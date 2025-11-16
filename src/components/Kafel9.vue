<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:items-center md:space-x-10 space-y-8 md:space-y-0">
            <div :class="['flex-1 space-y-3 sm:space-y-4 fade-in-left', { 'visible': isLeftVisible }]">
                <h1 class="text-[#595454] text-xl sm:text-2xl md:text-3xl font-bold text-center fade-in-up delay-100"
                    :class="{ 'visible': isLeftVisible }">Laminat Parke</h1>
                <div class="h-[400px] sm:h-[550px] md:h-[700px] relative fade-in-up delay-200"
                    :class="{ 'visible': isLeftVisible }">
                    <MouseScaleImage src="/images/21.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                    <ul class="absolute left-4 sm:left-10 md:left-20 bottom-6 sm:bottom-10 md:bottom-14 list-disc text-white text-xs sm:text-sm font-bold fade-in-up delay-400 space-y-0.5 sm:space-y-1"
                        :class="{ 'visible': isLeftVisible }">
                        <li v-for="item in list" :key="item.id" class="leading-tight sm:leading-normal">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div :class="['flex-1 fade-in-right', { 'visible': isRightVisible }]">
                <div class="space-y-4 sm:space-y-1 md:space-y-2">
                    <div class="fade-in-up delay-100" :class="{ 'visible': isRightVisible }">
                        <h2 class="text-[#636060] text-lg sm:text-xl md:text-2xl font-bold text-center uppercase">SÜPER
                            SU GEÇİRMEZ</h2>
                        <p class="text-[#908F8F] text-xs sm:text-sm font-bold py-3 sm:py-4 leading-5 sm:leading-6">
                            Yeni teknolojiyle birlikte laminat parkeler, geleneksel laminat parkelerin en büyük sorununu
                            çözen süper su geçirmez hale geliyor. Bu yeni ürün, daha güzel bir görünüme kavuşmanızı ve
                            çok
                            beğenilmenizi sağlayacak. Koridorlar, mutfaklar ve diğer ıslak alanlar için sağlam ve
                            dayanıklı
                            bir laminat parke elde etmenizi sağlıyor.
                        </p>
                    </div>
                    <div class="fade-in-up delay-200" :class="{ 'visible': isRightVisible }">
                        <h2 class="text-[#636060] text-lg sm:text-xl md:text-2xl font-bold text-center uppercase">Neden
                            su geçirmez?</h2>
                        <p class="text-[#908F8F] text-xs sm:text-sm font-bold py-3 sm:py-4 leading-5 sm:leading-6">
                            72 saat suda bekletildiğinde kalınlığının şişmesi %4'ün altındadır. <br>
                            Yetkililer tarafından test edildi:
                        </p>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse fade-in delay-300 min-w-[300px]"
                                :class="{ 'visible': isRightVisible }">
                                <thead>
                                    <tr>
                                        <th
                                            class="bg-[#C8DEE2] p-2 sm:p-3 text-left font-bold text-sm sm:text-base md:text-lg text-white w-1/3">
                                        </th>
                                        <th
                                            class="bg-[#C8DEE2] p-2 sm:p-3 text-left font-bold text-sm sm:text-base md:text-lg text-white">
                                            Kalınlık Şişme (%)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-[#E9F0F3]">
                                        <td class="p-2 sm:p-3 text-[#656C6E] font-medium text-xs sm:text-sm">Yeni</td>
                                        <td class="p-2 sm:p-3 text-[#707678] text-xs sm:text-sm">&lt;%4, 72 saat suda
                                            kaldıktan sonra</td>
                                    </tr>

                                    <tr class="bg-[#F5F8FA]">
                                        <td class="p-2 sm:p-3 text-[#656C6E] font-medium text-xs sm:text-sm">Geleneksel
                                        </td>
                                        <td class="p-2 sm:p-3 text-[#707678] text-xs sm:text-sm">&lt;18% 24 saat suda
                                            kaldıktan sonra</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="text-center text-[#908F8F] text-xs sm:text-sm font-bold mt-2">Kalınlık şişme değeri ne
                            kadar düşükse o
                            kadar iyidir.</p>
                        <p class="text-[#908F8F] text-xs sm:text-sm font-bold py-3 sm:py-4 leading-5 sm:leading-6">
                            Süper su geçirmez laminat parke aynı zamanda çevre dostudur. Yüksek yoğunluklu levha,
                            formaldehit emisyonu (=0.11ppm/M3) olan Carb standardına sahiptir. Konforlu eviniz için daha
                            güvenlidir.
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 fade-in-up delay-400"
                        :class="{ 'visible': isRightVisible }">
                        <img v-for="item in icons" :key="item.id" :src="item.image"
                            class="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] image-hover">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
    { id: 1, name: 'Su Geçirmez' },
    { id: 2, name: 'Çizilmez' },
    { id: 3, name: 'Çevre Dostu' },
    { id: 4, name: 'Kolay tıklamalı kurulum' },
    { id: 5, name: 'Kolay temizlik' },
])
const icons = ref([
    { id: 1, image: '/icons/1.webp' },
    { id: 2, image: '/icons/2.webp' },
    { id: 3, image: '/icons/3.webp' },
    { id: 4, image: '/icons/4.webp' },
    { id: 5, image: '/icons/5.webp' },
    { id: 6, image: '/icons/6.webp' },
    { id: 7, image: '/icons/7.webp' },
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