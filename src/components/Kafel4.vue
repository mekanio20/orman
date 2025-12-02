<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 fade-in-left', { 'visible': isLeftVisible }]">
                <MouseScaleImage src="/images/6.webp" :maxScale="1.15" :parallax="50" :transition="400" />
            </div>
            <div :class="['flex-1 fade-in-right', { 'visible': isRightVisible }]">
                <div class="w-full flex items-end justify-between fade-in-up delay-100"
                    :class="{ 'visible': isRightVisible }">
                    <div class="w-16 sm:w-20 md:w-24">
                        <img src="/favicon.png" class="w-full h-auto image-hover">
                    </div>
                    <div class="w-20 sm:w-24 md:w-[115px]">
                        <img src="/images/orman.webp" class="w-full h-auto image-hover">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 pt-6">
                    <div v-for="(item, index) in kaf3" :key="item.id"
                        :class="['flex flex-col space-y-2 fade-in-up delay-' + (index + 2) * 100, { 'visible': isRightVisible }]">
                        <img :src="item.image" class="w-full h-auto rounded image-hover">
                        <div class="w-full h-[20px] py-2 px-2 sm:px-3 flex items-center justify-between rounded-sm"
                            :style="{ backgroundColor: item.color }">
                            <span class="text-white text-[9px] sm:text-[10px] md:text-[11px]">{{ item.name }}</span>
                            <span class="text-white text-[9px] sm:text-[10px] md:text-[11px]">{{ item.size }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kaf3 = ref([
    { id: 1, color: '#9E7443', name: 'FE1100', size: '1220*230*6.5mm/0.5', image: '/images/kafels/kaf_3/1.webp' },
    { id: 2, color: '#D4C4B4', name: 'FE1100', size: '1220*230*6.5mm/0.5', image: '/images/kafels/kaf_3/2.webp' },
    { id: 3, color: '#413029', name: 'FE1100', size: '1220*230*6.5mm/0.5', image: '/images/kafels/kaf_3/3.webp' },
    { id: 4, color: '#715D50', name: 'FE1100', size: '1220*230*6.5mm/0.5', image: '/images/kafels/kaf_3/4.webp' },
    { id: 5, color: '#8E8877', name: 'FE1100', size: '1220*230*6.5mm/0.5', image: '/images/kafels/kaf_3/5.webp' },
    { id: 6, color: '#6E7174', name: 'FE1100', size: '1220*230*6.5mm/0.5', image: '/images/kafels/kaf_3/6.webp' },
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