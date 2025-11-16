<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:items-center md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-left', { 'visible': isLeftVisible }]">
                <h1 class="text-[#595454] text-xl sm:text-2xl md:text-3xl font-bold text-center fade-in-up delay-100"
                    :class="{ 'visible': isLeftVisible }">Taş Desen Renkleri</h1>
                <div class="fade-in-up delay-200" :class="{ 'visible': isLeftVisible }">
                    <MouseScaleImage src="/images/13.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                </div>
            </div>
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-right', { 'visible': isRightVisible }]">
                <div class="flex items-center justify-end fade-in-up delay-100" :class="{ 'visible': isRightVisible }">
                    <div class="w-20 sm:w-24 md:w-[115px]">
                        <img src="/images/orman.webp" class="w-full h-auto image-hover">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-3 sm:gap-x-4 fade-in-up delay-200"
                    :class="{ 'visible': isRightVisible }">
                    <div class="">
                        <img src="/images/14.webp" class="w-full h-full object-cover rounded image-hover">
                    </div>
                    <div class="flex flex-col space-y-3 sm:space-y-4 h-[300px] sm:h-[400px] md:h-[450px]">
                        <div class="h-full">
                            <img src="/images/15.webp" class="w-full h-full object-cover rounded image-hover">
                        </div>
                        <div class="h-full">
                            <img src="/images/16.webp" class="w-full h-full object-cover rounded image-hover">
                        </div>
                        <div class="h-full">
                            <img src="/images/17.webp" class="w-full h-full object-cover rounded image-hover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isLeftVisible = ref(false)
const isRightVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        isLeftVisible.value = true
                    }, 100)
                    setTimeout(() => {
                        isRightVisible.value = true
                    }, 200)
                    observer.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.2, rootMargin: '0px' }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})
</script>