<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:items-center md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-left', { 'visible': isLeftVisible }]">
                <h1 class="text-[#595454] text-xl sm:text-2xl md:text-3xl font-bold text-center fade-in-up delay-100"
                    :class="{ 'visible': isLeftVisible }">Halı Tasarım Renkleri</h1>
                <div class="h-[400px] sm:h-[550px] md:h-[700px] fade-in-up delay-200"
                    :class="{ 'visible': isLeftVisible }">
                    <MouseScaleImage src="/images/18.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                </div>
            </div>
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-right', { 'visible': isRightVisible }]">
                <div class="flex items-center justify-end fade-in-up delay-100" :class="{ 'visible': isRightVisible }">
                    <div class="w-20 sm:w-24 md:w-[115px]">
                        <img src="/images/orman.webp" class="w-full h-auto image-hover">
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div v-for="(item, index) in kaf6" :key="item.id"
                        :class="['flex flex-col items-center space-y-1.5 sm:space-y-2 fade-in-up delay-' + (index + 2) * 100, { 'visible': isRightVisible }]">
                        <img :src="item.image" class="w-full h-full rounded image-hover">
                        <span class="text-[#949191] text-[10px] sm:text-[11px] md:text-[12px]">{{ item.number }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kaf6 = ref([
    { id: 1, number: 901, image: '/images/kafels/kaf_6/1.webp' },
    { id: 2, number: 907, image: '/images/kafels/kaf_6/2.webp' },
    { id: 3, number: 908, image: '/images/kafels/kaf_6/3.webp' },
    { id: 4, number: 906, image: '/images/kafels/kaf_6/4.webp' },
    { id: 5, number: 909, image: '/images/kafels/kaf_6/5.webp' },
    { id: 6, number: 903, image: '/images/kafels/kaf_6/6.webp' },
    { id: 7, number: 911, image: '/images/kafels/kaf_6/7.webp' },
    { id: 8, number: 913, image: '/images/kafels/kaf_6/8.webp' },
    { id: 9, number: 904, image: '/images/kafels/kaf_6/9.webp' },
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