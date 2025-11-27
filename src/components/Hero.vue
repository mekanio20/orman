<template>
    <header class="hero-container w-full h-screen overflow-hidden relative" role="banner">
        <!-- SEO için yapılandırılmış arkaplan resmi -->
        <img 
            src="/images/bg.webp" 
            alt="ORMAN Flooring - Sert Ahşap Zemin ve Parke Döşeme Hizmetleri" 
            class="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchpriority="high"
        />
        
        <!-- Hero içerik alanı -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 sm:px-6 lg:px-8 md:w-[900px] w-full">
            <div class="flex flex-col items-center justify-center text-center space-y-4">
                <!-- Ana başlık - SEO için optimize edilmiş -->
                <h1 ref="titleRef" :class="[
                    'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-roboto fade-in-up',
                    { 'visible': isTitleVisible }
                ]"
                itemscope 
                itemtype="https://schema.org/Organization"
                itemprop="name">
                    <span itemprop="name">ORMAN Flooring</span>'den 
                    <span itemprop="serviceType">Birinci Sınıf Sert Ahşap Zeminler</span>
                </h1>
                
                <!-- Açıklama metni - SEO için optimize edilmiş -->
                <p ref="textRef" :class="[
                    'text-base sm:text-lg md:text-xl text-white font-roboto fade-in-up delay-200',
                    { 'visible': isTextVisible }
                ]"
                itemscope 
                itemtype="https://schema.org/Service"
                itemprop="description">
                    <span itemprop="serviceType">Birinci sınıf sert ahşap zeminlerimizin</span> zarafetini ve dayanıklılığını keşfedin.
                    <span itemprop="provider" itemscope itemtype="https://schema.org/Organization">
                        <span itemprop="name">ORMAN Flooring</span>
                    </span> olarak, 
                    <span itemprop="areaServed">evinizi veya iş yerinizi</span> güzelleştirmek için 
                    <span itemprop="serviceOutput">en kaliteli malzemeleri ve uzman işçiliği</span> sunuyoruz.
                </p>
            </div>
        </div>
        
        <!-- Scroll indicator - Accessibility için -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
                class="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
                aria-label="Aşağı kaydır"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </header>
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
    position: relative;
}

.hero-container img {
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

/* CTA buton animasyonları */
.fade-in-up.delay-200 {
    transition-delay: 0.2s;
}

/* Responsive optimizasyonlar */
@media (max-width: 640px) {
    .hero-container img {
        background-attachment: scroll;
    }
}

/* Performance optimizasyonu için will-change */
.fade-in-up {
    will-change: opacity, transform;
}

.fade-in-up.visible {
    will-change: auto;
}
</style>