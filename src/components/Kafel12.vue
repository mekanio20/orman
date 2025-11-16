<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div
            :class="['w-full flex items-end justify-between pb-4 sm:pb-5 md:pb-6 fade-in-up', { 'visible': isHeaderVisible }]">
            <div class="w-16 sm:w-20 md:w-24">
                <img src="/images/logo.webp" class="w-full h-auto image-hover">
            </div>
            <div class="w-20 sm:w-24 md:w-[115px]">
                <img src="/images/orman.webp" class="w-full h-auto image-hover">
            </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pb-10">
            <div v-for="(item, index) in kaf10" :key="item.id"
                :class="['fade-in-up delay-' + (index % 4 + 1) * 100, { 'visible': isGridVisible }]">
                <MouseScaleImage :src="item.image" :maxScale="1.15" :parallax="50" :transition="400" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kaf10 = ref([
    { id: 1, image: '/images/kafels/kaf_10/1.webp' },
    { id: 2, image: '/images/kafels/kaf_10/2.webp' },
    { id: 3, image: '/images/kafels/kaf_10/3.webp' },
    { id: 4, image: '/images/kafels/kaf_10/4.webp' },
    { id: 5, image: '/images/kafels/kaf_10/5.webp' },
    { id: 6, image: '/images/kafels/kaf_10/6.webp' },
    { id: 7, image: '/images/kafels/kaf_10/7.webp' },
    { id: 8, image: '/images/kafels/kaf_10/8.webp' },
    { id: 9, image: '/images/kafels/kaf_10/9.webp' },
    { id: 10, image: '/images/kafels/kaf_10/10.webp' },
    { id: 11, image: '/images/kafels/kaf_10/11.webp' },
    { id: 12, image: '/images/kafels/kaf_10/12.webp' },
])

const sectionRef = ref(null)
const isHeaderVisible = ref(false)
const isGridVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        isHeaderVisible.value = true
                    }, 100)
                    setTimeout(() => {
                        isGridVisible.value = true
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