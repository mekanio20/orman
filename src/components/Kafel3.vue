<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 relative fade-in-left', { 'visible': isLeftVisible }]">
                <div class="space-y-3">
                    <h3 class="text-base sm:text-lg text-[#979897] font-bold fade-in-up delay-200"
                        :class="{ 'visible': isLeftVisible }">Yüzey Seçenekleri:</h3>
                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-2">
                        <div v-for="(item, index) in kaf1" :key="item.id"
                            :class="['flex flex-col items-center space-y-2 fade-in-up delay-' + (index + 3) * 100, { 'visible': isLeftVisible }]">
                            <img :src="item.image" class="h-20 sm:h-[110px] w-full object-cover rounded image-hover">
                            <p class="text-[11px] sm:text-[13px] text-[#8A8887]">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-6 sm:mt-10 text-sm sm:text-base text-[#9A9898] fade-in-up delay-600"
                    :class="{ 'visible': isLeftVisible }">
                    Boyut: <br>
                    Aşağıdaki ölçüleri kontrol edin, ayrıca özel ölçüler de üretilebilir.
                </div>
                <div class="mt-6  sm:mt-0 absolute md:block hidden top-52 left-0 -z-10 fade-in-left delay-700"
                    :class="{ 'visible': isLeftVisible }">
                    <div class="grid grid-cols-3 sm:flex sm:items-end gap-3 sm:gap-6">
                        <div v-for="item in kaf2" :key="item.id" class="relative">
                            <div class="absolute -top-4 sm:-top-6 text-[#909090] text-[10px] sm:text-[13px]">
                                {{ item.top }}
                            </div>
                            <img :src="item.image" class="w-full h-auto image-hover">
                            <div
                                class="absolute bottom-1/2 -left-5 sm:-left-8 text-[#909090] text-[10px] sm:text-[13px] rotate-[-90deg]">
                                {{ item.top }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="['flex-1 fade-in-right', { 'visible': isRightVisible }]">
                <div class="flex items-center justify-between pb-6">
                    <h4 class="text-xl sm:text-2xl font-semibold text-[#555252] fade-in-up delay-100"
                        :class="{ 'visible': isRightVisible }">LVT Zemin</h4>
                    <div class="w-24 sm:w-[160px]">
                        <img src="/images/orman.webp" class="w-full h-auto image-hover delay-200"
                            :class="{ 'visible': isRightVisible }">
                    </div>
                </div>
                <div class="relative h-[500px] sm:h-[700px] md:h-[850px]">
                    <MouseScaleImage src="/images/5.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                    <div
                        :class="['absolute bottom-4 sm:bottom-6 right-3 sm:right-4 fade-in-up delay-300', { 'visible': isRightVisible }]">
                        <p
                            class="text-white font-bold text-xs sm:text-sm md:text-base w-[200px] sm:w-[250px] md:w-[300px] leading-5 sm:leading-6 md:leading-8">
                            Çevre dostu, formaldehitsiz Tıklamalı kilit sistemiyle kolay döşeme Ses emici ve gürültü
                            azaltıcı özellik Su geçirmez, uzun ömürlü zemin kaplaması Milyonlarca renk seçeneği
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kaf1 = ref([
    { id: 1, name: 'BP', image: '/images/kafels/kaf_1/1.webp' },
    { id: 2, name: 'Açik BP', image: '/images/kafels/kaf_1/2.webp' },
    { id: 3, name: 'Kristal', image: '/images/kafels/kaf_1/3.webp' },
    { id: 4, name: 'Taş', image: '/images/kafels/kaf_1/4.webp' },
    { id: 5, name: 'EIR', image: '/images/kafels/kaf_1/5.webp' },
])
const kaf2 = ref([
    { id: 1, left: '610mm', top: '125mm', image: '/images/kafels/kaf_2/1.webp' },
    { id: 2, left: '1220mm', top: '150mm', image: '/images/kafels/kaf_2/2.webp' },
    { id: 3, left: '1220mm', top: '182mm', image: '/images/kafels/kaf_2/3.webp' },
    { id: 4, left: '1220mm', top: '230mm', image: '/images/kafels/kaf_2/4.webp' },
    { id: 5, left: '1525mm', top: '230mm', image: '/images/kafels/kaf_2/5.webp' },
    { id: 6, left: '1800mm', top: '230mm', image: '/images/kafels/kaf_2/6.webp' },
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