<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:items-center md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 space-y-3 sm:space-y-4 md:pt-[60px] fade-in-left', { 'visible': isLeftVisible }]">
                <h1 class="text-[#595454] text-xl sm:text-2xl md:text-3xl font-bold text-center fade-in-up delay-100"
                    :class="{ 'visible': isLeftVisible }">Ahşap Desen Renkleri</h1>
                <div class="grid grid-cols-2 gap-x-3 sm:gap-x-4 md:h-[500px] fade-in-up delay-200"
                    :class="{ 'visible': isLeftVisible }">
                    <div class="col-span-1">
                        <img src="/images/7.webp" class="w-full h-full object-cover rounded image-hover">
                    </div>
                    <div class="flex flex-col space-y-3 sm:space-y-4 h-full">
                        <img src="/images/8.webp" class="w-full h-full object-cover rounded image-hover">
                        <img src="/images/9.webp" class="w-full h-full object-cover rounded image-hover">
                    </div>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-2">
                    <div v-for="(item, index) in kaf4" :key="item.id"
                        :class="['h-[100px] sm:h-[140px] md:h-[170px] fade-in-up delay-' + (index + 3) * 50, { 'visible': isLeftVisible }]">
                        <img :src="item.image" class="w-full h-full object-cover rounded image-hover" />
                    </div>
                </div>
            </div>
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-right', { 'visible': isRightVisible }]">
                <div class="flex items-end justify-between fade-in-up delay-100" :class="{ 'visible': isRightVisible }">
                    <div class="w-16 sm:w-20 md:w-24">
                        <img src="/images/logo.webp" class="w-full h-auto image-hover">
                    </div>
                    <div class="w-20 sm:w-24 md:w-[115px]">
                        <img src="/images/orman.webp" class="w-full h-auto image-hover">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-3 sm:gap-x-4 md:h-[500px] fade-in-up delay-200"
                    :class="{ 'visible': isRightVisible }">
                    <div class="flex flex-col space-y-3 sm:space-y-4 h-full">
                        <img src="/images/10.webp" class="w-full h-full object-cover rounded image-hover">
                        <img src="/images/12.webp" class="w-full h-full object-cover rounded image-hover">
                    </div>
                    <div class="col-span-1">
                        <img src="/images/11.webp" class="w-full h-full object-cover rounded image-hover">
                    </div>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-2">
                    <div v-for="(item, index) in kaf5" :key="item.id"
                        :class="['h-[100px] sm:h-[140px] md:h-[170px] fade-in-up delay-' + (index + 3) * 50, { 'visible': isRightVisible }]">
                        <img :src="item.image" class="w-full h-full object-cover rounded image-hover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kaf4 = ref([
    { id: 1, image: '/images/kafels/kaf_4/1.webp' },
    { id: 2, image: '/images/kafels/kaf_4/2.webp' },
    { id: 3, image: '/images/kafels/kaf_4/3.webp' },
    { id: 4, image: '/images/kafels/kaf_4/4.webp' },
    { id: 5, image: '/images/kafels/kaf_4/5.webp' },
    { id: 6, image: '/images/kafels/kaf_4/6.webp' },
])
const kaf5 = ref([
    { id: 1, image: '/images/kafels/kaf_5/1.webp' },
    { id: 2, image: '/images/kafels/kaf_5/2.webp' },
    { id: 3, image: '/images/kafels/kaf_5/3.webp' },
    { id: 4, image: '/images/kafels/kaf_5/4.webp' },
    { id: 5, image: '/images/kafels/kaf_5/5.webp' },
    { id: 6, image: '/images/kafels/kaf_5/6.webp' },
])

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