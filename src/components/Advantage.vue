<template>
  <div ref="sectionRef" class="relative w-full min-h-screenflex flex-col overflow-hidden">
    <div class="w-full mx-auto sm:px-20 px-6 py-10 relative z-10 sm:py-6">
      <h2 ref="titleRef" :class="['text-2xl font-bold text-gray-800 fade-in-up', { 'visible': isTitleVisible }]">
        Şirketin Avantajları
      </h2>

      <div class="flex justify-between flex-col items-center mt-6
                  md:flex-row md:gap-8 sm:gap-6">
        <!-- Sol sütun -->
        <div class="flex flex-col space-y-6 w-full md:w-1/2">
          <div v-for="(advantage, index) in advantages.slice(0, 2)" :key="index"
            :ref="el => { if (el) advantageRefs[index] = el }"
            :class="['flex flex-col space-y-4 fade-in-up', { 'visible': isAdvantageVisible[index] }, `delay-${(index + 1) * 100}`]">
            <h4 class="font-semibold">{{ advantage.id }}. {{ advantage.title }}</h4>
            <p class="text-sm">{{ advantage.description }}</p>
          </div>
        </div>

        <!-- Sağ sütun -->
        <div class="flex flex-col space-y-6 w-full mt-0 md:w-1/2 md:mt-6">
          <div v-for="(advantage, index) in advantages.slice(2)" :key="index"
            :ref="el => { if (el) advantageRefs[index + 2] = el }"
            :class="['flex flex-col space-y-4 fade-in-up', { 'visible': isAdvantageVisible[index + 2] }, `delay-${(index + 3) * 100}`]">
            <h4 class="font-semibold">{{ advantage.id }}. {{ advantage.title }}</h4>
            <p class="text-sm max-w-[550px] md:max-w-full whitespace-pre-wrap z-20">{{ advantage.description }}</p>
          </div>
        </div>
      </div>

      <!-- Dekoratif ağaç kesiti görseli -->
      <img ref="decorativeRef" src="/images/2.webp" alt="Wood section" :class="[
        'absolute bottom-0 right-0 w-[300px] -z-10 opacity-80 translate-y-8 translate-x-8 select-none fade-in-right image-hover',
        'md:w-[220px] sm:w-[180px]',
        { 'visible': isDecorativeVisible }
      ]" />
    </div>

    <div class="advantage-bg relative h-[60vh] w-full overflow-hidden">
      <div class="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const advantages = ref([
  { id: 1, title: 'Üstün Üretim Kapasitesi', description: '100.000 m² üretim alanı ile ahşap zemin ürünlerinde yüksek kalite standartlarında üretim yapılır.' },
  { id: 2, title: 'Gelişmiş Otomasyon', description: 'Tam otomatik üretim hatları ile Süreçler minimum hata ve maksimum verimle yönetilir.' },
  { id: 3, title: 'Sıkı Kalite Kontrolü', description: 'Ürünlerimiz üretimden paketlemeye kadar çok aşamalı kalite kontrol testlerinden gelecektir.' },
  { id: 4, title: 'Küresel Dağıtım Ağı', description: 'Ürünlerimiz 30\'dan fazla ülkeye ihraç edilmekte olup uluslararası pazarda güçlü bir konuma sahiptir.' },
  { id: 5, title: 'Müşteri Memnuniyeti', description: 'Satış sonrası destek ekibimiz, Müşteri memnuniyetini garanti altına alır.' }
])

const sectionRef = ref(null)
const titleRef = ref(null)
const decorativeRef = ref(null)
const advantageRefs = ref([])
const isTitleVisible = ref(false)
const isDecorativeVisible = ref(false)
const isAdvantageVisible = ref(advantages.value.map(() => false))

onMounted(() => {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { if (titleRef.value) isTitleVisible.value = true }, 100)
          setTimeout(() => { if (decorativeRef.value) isDecorativeVisible.value = true }, 300)
          setTimeout(() => {
            advantageRefs.value.forEach((el, index) => {
              if (el) { setTimeout(() => { isAdvantageVisible.value[index] = true }, index * 100) }
            })
          }, 200)
          sectionObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px' }
  )
  if (sectionRef.value) sectionObserver.observe(sectionRef.value)
})
</script>

<style scoped>
.advantage-bg {
  background-image: url('/images/1.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>