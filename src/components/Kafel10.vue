<template>
    <section ref="sectionRef" class="md:max-w-7xl md:px-0 px-6 mx-auto">
        <div class="pb-10 flex md:flex-row flex-col md:items-center md:space-x-10 space-y-8 md:space-y-0">
            <div 
                :class="['flex-1 space-y-4 fade-in-left', { 'visible': isLeftVisible }]"
            >
                <h1 class="text-[#595454] text-3xl font-bold text-center fade-in-up delay-100" :class="{ 'visible': isLeftVisible }">Laminat Parke</h1>
                <div class="h-[700px] relative fade-in-up delay-200" :class="{ 'visible': isLeftVisible }">
                    <MouseScaleImage src="/images/22.webp" :maxScale="1.15" :parallax="50" :transition="400" />
                    <ul class="absolute sm:left-20 left-10 bottom-14 text-white text-sm font-bold w-[300px] fade-in-up delay-400" :class="{ 'visible': isLeftVisible }">
                        <li v-for="item in list" :key="item.id">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                :class="['flex-1 space-y-4 mt-12 fade-in-right', { 'visible': isRightVisible }]"
            >
                <div class="relative md:flex hidden items-center justify-end fade-in-up delay-100" :class="{ 'visible': isRightVisible }">
                    <span class="text-[12px] text-[#888586] absolute bottom-2 right-1/2">1515mm</span>
                    <span class="text-[12px] text-[#888586] absolute -bottom-10 left-24">240mm</span>
                    <span class="text-[12px] text-[#888586] absolute -bottom-[120px] right-1/2">1828mm</span>
                    <img src="/images/23.webp" class="absolute right-10 top-0 w-[430px] image-hover">
                    <img src="/images/24.webp" class="absolute top-8 -z-10 w-[430px] image-hover">
                </div>
                <div class="md:!mt-36">
                    <h3 class="text-[#595454] text-2xl font-bold text-center fade-in-up delay-200" :class="{ 'visible': isRightVisible }">Daha uzun planklar, daha az iş, daha az
                        atık!!!</h3>
                    <div class="grid grid-cols-2 gap-x-6 gap-y-2 pt-3">
                        <div 
                            v-for="(item, index) in kaf7" 
                            :key="item.id" 
                            :class="['text-center fade-in-up delay-' + (index + 3) * 100, { 'visible': isRightVisible }]"
                        >
                            <img :src="item.image" class="rounded image-hover">
                            <span class="text-sm text-[#858282]">{{ item.name }}</span>
                        </div>
                    </div>
                    <div class="pt-5 fade-in-up delay-500" :class="{ 'visible': isRightVisible }">
                        <h4 class="text-sm text-[#A6A4A4] pb-1 font-bold">**Avantajları**</h4>
                        <ul class="space-y-1 text-[#A6A4A4] text-xs leading-4">
                            <li v-for="option in options" :key="option.id">
                                {{ option.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
    { id: 1, name: 'Zikzak desen, odanıza hareket katarak daha geniş görünmesini sağlar.' },
    { id: 2, name: '+ Kolay temizlenir, kaymaz ve yoğun ev ve ticari kullanım için yüksek kalitelidir.' },
    { id: 3, name: 'Kurulumu kolaydır, "sol" ve "sağ" tarafları farklı kutulara sahiptir, bunları ayrı ayrı almak kolaydır.' },
    { id: 4, name: 'Boyalı eğimli kenarları, size belirgin bir V oluğu verir.' },
    { id: 5, name: '20 yıl aşınma garantisine sahiptir.' },
    { id: 6, name: 'Sıcak tonları ve dokunsal ahşap dokusu, size gerçek bir ahşap zeminin göz alıcı güzelliğini sunar.' },
])
const kaf7 = ref([
    { id: 1, name: 'WL201', image: '/images/kafels/kaf_7/1.webp' },
    { id: 2, name: 'WL301', image: '/images/kafels/kaf_7/2.webp' },
    { id: 3, name: 'WL202', image: '/images/kafels/kaf_7/3.webp' },
    { id: 4, name: 'WL302', image: '/images/kafels/kaf_7/4.webp' },
])
const options = ref([
    { id: 1, name: '1. **Gelişmiş Mekansal Genişleme Etkisi**' },
    { id: 2, name: 'Ekstra uzun döşemeler, yatay derzleri zayıflatarak küçük alanların daha açık görünmesine neden olur; özellikle dar veya uzun oda düzenleri (örneğin koridorlar, çatı katları) için uygundur.' },
    { id: 3, name: '2. **Yüksek Montaj Verimliliği**' },
    { id: 4, name: 'Tahta başına daha fazla kaplama ile aynı alanda derz sayısı yaklaşık %20 azalır ve proje süreleri %10-15 oranında kısalır.' },
    { id: 5, name: '3. **Premium Konumlandırma**' },
    { id: 6, name: 'Daha uzun boyutlar genellikle orta ve üst düzey ürün serilerinde, daha ince yüzey işlemleriyle (örneğin ElR yüzey, kabartmalı dokular) sunulur.' },
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