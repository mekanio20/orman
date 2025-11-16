<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="md:pb-10 pb-5 flex md:flex-row flex-col md:items-start md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-left', { 'visible': isLeftVisible }]">
                <h1 class="text-[#595454] text-lg sm:text-2xl md:text-3xl font-bold max-w-full sm:max-w-[350px] md:max-w-[400px] fade-in-up delay-100"
                    :class="{ 'visible': isLeftVisible }">Laminat Parke Nasıl Seçilir? Yüzey:</h1>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 w-full sm:w-[450px] md:w-[500px]">
                    <div v-for="(item, index) in kaf8" :key="item.id"
                        :class="['text-center fade-in-up delay-' + (index + 2) * 100, { 'visible': isLeftVisible }]">
                        <img :src="item.image" class="w-full h-auto rounded image-hover">
                        <span class="text-xs sm:text-sm text-[#8A8A8A]">{{ item.name }}</span>
                    </div>
                </div>
                <div class="w-full h-[300px] sm:h-[370px] md:h-[440px] fade-in-up delay-500"
                    :class="{ 'visible': isLeftVisible }">
                    <MouseScaleImage src="/images/25.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                </div>
            </div>
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-right', { 'visible': isRightVisible }]">
                <div class="fade-in-up delay-100" :class="{ 'visible': isRightVisible }">
                    <Table />
                </div>
                <div class="relative fade-in-up delay-200" :class="{ 'visible': isRightVisible }">
                    <h1 class="text-lg sm:text-xl text-[#626363] font-bold mb-3 md:block hidden">Size:</h1>
                    <div class="mt-6 sm:mt-8 md:absolute md:block hidden md:top-10 md:left-0 md:-z-10">
                        <div class="grid grid-cols-3 sm:flex sm:items-end gap-3 sm:gap-6 md:gap-10">
                            <div v-for="item in kaf9" :key="item.id" class="relative">
                                <div
                                    class="absolute -top-4 sm:-top-5 md:-top-6 text-[#909090] text-[10px] sm:text-[11px] md:text-[13px]">
                                    {{ item.top }}
                                </div>
                                <img :src="item.image" class="w-full h-auto image-hover">
                                <div
                                    class="absolute bottom-1/2 -left-6 sm:-left-8 md:-left-10 text-[#909090] text-[10px] sm:text-[11px] md:text-[13px] rotate-[-90deg]">
                                    {{ item.left }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kaf8 = ref([
    { id: 1, name: 'Küçük Kabartma', image: '/images/kafels/kaf_8/1.webp' },
    { id: 2, name: 'Kristal Kabartma', image: '/images/kafels/kaf_8/2.webp' },
    { id: 3, name: 'Parlak EIR', image: '/images/kafels/kaf_8/3.webp' },
    { id: 4, name: 'Ahşap Kabartma', image: '/images/kafels/kaf_8/4.webp' },
    { id: 5, name: 'Orta Kabartma', image: '/images/kafels/kaf_8/5.webp' },
    { id: 6, name: 'EIR', image: '/images/kafels/kaf_8/6.webp' },
])
const kaf9 = ref([
    { id: 1, left: '810mm', top: '150mm', image: '/images/kafels/kaf_9/1.webp' },
    { id: 2, left: '1220mm', top: '170mm', image: '/images/kafels/kaf_9/2.webp' },
    { id: 3, left: '1220mm', top: '240mm', image: '/images/kafels/kaf_9/3.webp' },
    { id: 4, left: '1220mm', top: '199mm', image: '/images/kafels/kaf_9/4.webp' },
    { id: 5, left: '1525mm', top: '240mm', image: '/images/kafels/kaf_9/5.webp' },
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