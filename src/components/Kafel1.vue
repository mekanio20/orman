<template>
  <section ref="sectionRef"
    :class="['w-full min-h-screen flex items-center justify-center pt-10', { 'section-visible': isSectionVisible }]">
    <div class="md:max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-0 px-6 items-center">

      <!-- Sol taraf - iç mekân görseli -->
      <div ref="leftImageRef"
        :class="['relative h-[780px] overflow-hidden rounded-md fade-in-left', { 'visible': isLeftImageVisible }]">
        <MouseScaleImage class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          src="/images/3.webp" :maxScale="1.15" :parallax="50" :transition="400" />
      </div>

      <!-- Sağ taraf - ürün bilgisi -->
      <div ref="rightContentRef"
        :class="['h-full flex flex-col justify-between py-4 fade-in-right', { 'visible': isRightContentVisible }]">
        <!-- Logo -->
        <img src="/favicon.png" alt="Orman Logo"
          :class="['w-28 image-hover delay-100', { 'visible': isRightContentVisible }]" />

        <!-- Ürün görseli -->
        <div class="md:w-full w-[400px]">
          <img src="/images/4.webp" :class="['image-hover delay-200 w-full h-full', { 'visible': isRightContentVisible }]" />
        </div>

        <ul
          :class="['space-y-1 text-[#808080] text-[13px] pt-10 fade-in-up delay-300', { 'visible': isRightContentVisible }]">
          <li v-for="option in options" :key="option.id">
            {{ option.name }}
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
const leftImageRef = ref(null)
const rightContentRef = ref(null)
const isSectionVisible = ref(false)
const isLeftImageVisible = ref(false)
const isRightContentVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isSectionVisible.value = true
          setTimeout(() => {
            isLeftImageVisible.value = true
          }, 100)
          setTimeout(() => {
            isRightContentVisible.value = true
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
