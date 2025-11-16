<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:items-center md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-left', { 'visible': isLeftVisible }]">
                <h1 class="text-[#595454] text-xl sm:text-2xl md:text-3xl font-bold text-center fade-in-up delay-100"
                    :class="{ 'visible': isLeftVisible }">Laminat Parke</h1>
                <div class="h-[400px] sm:h-[550px] md:h-[700px] relative fade-in-up delay-200"
                    :class="{ 'visible': isLeftVisible }">
                    <MouseScaleImage src="/images/19.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                    <ul class="absolute left-4 sm:left-10 md:left-20 bottom-6 sm:bottom-10 md:bottom-14 list-disc text-white text-xs sm:text-sm font-bold fade-in-up delay-400 space-y-0.5 sm:space-y-1"
                        :class="{ 'visible': isLeftVisible }">
                        <li v-for="item in list" :key="item.id" class="leading-tight sm:leading-normal">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div :class="['flex-1 fade-in-right', { 'visible': isRightVisible }]">
                <div class="flex flex-col sm:flex-row items-center sm:space-x-4 md:space-x-6 space-y-4 sm:space-y-0 fade-in-up delay-100"
                    :class="{ 'visible': isRightVisible }">
                    <img src="/images/20.webp" class="w-full sm:w-[300px] md:w-[400px] h-auto image-hover">
                    <ul class="list-disc space-y-6 sm:space-y-8 md:space-y-12 text-xs sm:text-sm text-[#464444] pl-5">
                        <li>aşınma tabakası</li>
                        <li>a dekorasyon tabakası</li>
                        <li>çekirdek levha</li>
                        <li>denge kağıdı</li>
                    </ul>
                </div>
                <ul class="space-y-1 text-[#808080] text-xs sm:text-[13px] pt-6 sm:pt-8 md:pt-10 fade-in-up delay-300"
                    :class="{ 'visible': isRightVisible }">
                    <li v-for="option in options" :key="option.id" class="leading-relaxed">
                        {{ option.name }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
    { id: 1, name: 'Sağlam ve dayanıklı HDF kalitesi.' },
    { id: 2, name: 'Klik kilitli zemin kaplaması, kolay montaj.' },
    { id: 3, name: 'Aşınmaya ve çizilmeye dayanıklı, uzun ömürlü.' },
    { id: 4, name: 'Kolay bakım.' },
    { id: 5, name: 'Milyonlarca renk seçeneği.' },
])
const options = ref([
    {
        id: 1,
        name: 'Kalınlık: 3.5mm, 4mm, 4.5mm, 5mm, 6mm',
    },
    {
        id: 2,
        name: 'Aşınma tabakası: 0.1mm, 0.2mm, 0.3mm, 0.4mm, 0.5mm',
    },
    {
        id: 3,
        name: 'Boyutlar: 610×305mm / 900×305mm / 1220×182mm / 1220×150mm / 910×150mm 1220×230mm / 1525×230mm',
    },
    {
        id: 4,
        name: 'Montaj: tıklamalı kilit sistemi',
    },
    {
        id: 5,
        name: 'Alt tabaka türü: 1mm / 1.5mm / 2mm EVA & IXPE',
    },
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