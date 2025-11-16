<template>
    <div class="hero-container w-full h-screen overflow-hidden relative">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 sm:px-6 lg:px-8 md:w-[900px] w-full">
            <div class="flex flex-col items-center justify-center text-center space-y-4">
                <h1 ref="titleRef" :class="[
                    'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-roboto fade-in-up',
                    { 'visible': isTitleVisible }
                ]">
                    ORMAN Flooring'den Birinci Sınıf Sert Ahşap Zeminler
                </h1>
                <p ref="textRef" :class="[
                    'text-base sm:text-lg md:text-xl text-white font-roboto fade-in-up delay-200',
                    { 'visible': isTextVisible }
                ]">
                    Birinci sınıf sert ahşap zeminlerimizin zarafetini ve dayanıklılığını keşfedin.
                    ORMAN Flooring olarak, evinizi veya iş yerinizi güzelleştirmek için en kaliteli
                    malzemeleri ve uzman işçiliği sunuyoruz.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const titleRef = ref(null)
const textRef = ref(null)
const isTitleVisible = ref(false)
const isTextVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isTitleVisible.value = true
    }, 300)

    setTimeout(() => {
        isTextVisible.value = true
    }, 500)
})
</script>

<style scoped>
.hero-container {
    background-image: url('/images/bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

/* Fade-in animasyonları */
.fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>