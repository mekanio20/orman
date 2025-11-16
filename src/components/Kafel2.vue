<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto sm:pb-10 pb-6 pt-5">
        <!-- Header Logos -->
        <div :class="['w-full flex items-end justify-between fade-in-up', { 'visible': isHeaderVisible }]">
            <div class="w-16 sm:w-20 md:w-24">
                <img src="/images/logo.webp" class="image-hover w-full h-auto">
            </div>
            <div class="w-20 sm:w-24 md:w-[115px]">
                <img src="/images/orman.webp" class="image-hover w-full h-auto">
            </div>
        </div>

        <!-- Main Content -->
        <div class="pt-10 flex md:flex-row flex-col md:space-x-20">
            <!-- Left Content -->
            <div :class="['flex-1 fade-in-left', { 'visible': isLeftContentVisible }]">
                <!-- EIR Description with Image -->
                <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div class="w-32 sm:w-36 md:w-[160px] flex-shrink-0">
                        <img src="/images/26.webp" class="image-hover w-full h-auto">
                    </div>
                    <div class="space-y-2">
                        <p class="font-bold text-[#969595] text-xs sm:text-sm">
                            EIR, "Embossed-in-Register" olarak adlandırılır
                        </p>
                        <p class="font-bold text-[#969595] text-xs sm:text-sm">
                            EIR üretim süreci, kabartma desenini baskılı tasarımla hizalayarak zeminin derinliğini,
                            dokusunu ve gerçekçi görünümünü artıran bir teknolojidir.
                        </p>
                        <p class="font-bold text-[#969595] text-xs sm:text-sm">
                            Piyasada yaygın olarak görülen diğer dokulardan farklı olarak — düz, kabartmalı (ahşap
                            damarına uymayan hafif doku) veya elle kazınmış yüzeylerden — EIR yüzey, gerçek ahşap
                            görünümüne en yakın, son derece doğal bir etki yaratır. Bu özellik, ürünü nihai kullanıcılar
                            için çok daha çekici hale getirir.
                        </p>
                    </div>
                </div>

                <!-- EIR Types -->
                <div>
                    <p class="font-bold text-[#898787] text-sm sm:text-base py-4">
                        Şu anda üretimimizde uygulayabildiğimiz EIR yüzey türleri şunlardır:
                    </p>

                    <!-- First Row: 3 Items -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pb-3">
                        <div v-for="(item, index) in eirItems.slice(0, 3)" :key="index" :class="[
            'flex flex-col items-center space-y-1 fade-in-up',
            'delay-' + (index + 1) * 100,
            { 'visible': isEirVisible },
            index === 2 ? 'col-span-2 sm:col-span-1' : ''
        ]">
                            <img :src="item.image" class="w-full h-auto object-cover rounded-md image-hover">
                            <p class="text-[10px] sm:text-[12px] text-[#959291] uppercase">{{ item.label }}</p>
                        </div>
                    </div>

                    <!-- Second Row: 2 Items -->
                    <div class="grid grid-cols-2 gap-4 sm:gap-6">
                        <div v-for="(item, index) in eirItems.slice(3)" :key="index" :class="[
            'flex flex-col items-center space-y-1 fade-in-up',
            'delay-' + (index + 4) * 100,
            { 'visible': isEirVisible }
        ]">
                            <img :src="item.image" class="w-full h-auto object-cover rounded-md image-hover">
                            <p class="text-[10px] sm:text-[12px] text-[#959291] uppercase">{{ item.label }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Image -->
            <div :class="['flex-1 fade-in-right mt-6 md:mt-0', { 'visible': isRightImageVisible }]">
                <MouseScaleImage src="/images/32.webp" :maxScale="1.15" :parallax="50" :transition="400" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const eirItems = [
    { image: '/images/27.webp', label: 'EIR 1#' },
    { image: '/images/28.webp', label: 'EIR 2#' },
    { image: '/images/29.webp', label: 'EIR 3#' },
    { image: '/images/30.webp', label: 'EIR 4#' },
    { image: '/images/31.webp', label: 'EIR 5#' },
]

const sectionRef = ref(null)
const isHeaderVisible = ref(false)
const isLeftContentVisible = ref(false)
const isRightImageVisible = ref(false)
const isEirVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        isHeaderVisible.value = true
                    }, 100)
                    setTimeout(() => {
                        isLeftContentVisible.value = true
                    }, 200)
                    setTimeout(() => {
                        isRightImageVisible.value = true
                    }, 300)
                    setTimeout(() => {
                        isEirVisible.value = true
                    }, 400)
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