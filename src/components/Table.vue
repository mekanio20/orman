<template>
    <div class="w-full">
        <h3 class="text-xl text-[#626363] font-bold mb-3">Aşınma direnci:</h3>

        <table class="w-full">
            <thead>
                <tr>
                    <th v-for="item in data" :key="item.code"
                        class="bg-[#B4D4D0] text-lg font-bold text-[#E8F5F1]">
                        {{ item.code }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td v-for="item in data" :key="item.class"
                        class="bg-[#E5ECEB] text-sm font-medium text-[#757977] text-center py-1">
                        {{ item.class }}
                    </td>
                </tr>

                <tr>
                    <td v-for="item in data" :key="item.desc"
                        class="bg-[#F3F3F1] text-[13px] text-[#91908F] text-center pb-4">
                        {{ item.desc }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const data = [
    { code: "AC1", class: "Sınıf 21", desc: "Konutlarda düşük kullanım oranı" },
    { code: "AC2", class: "Sınıf 22", desc: "Konut orta kullanım" },
    { code: "AC3", class: "Sınıf 23", desc: "Konut yüksek kullanım" },
    { code: "AC3", class: "Sınıf 31", desc: "Ticari düşük kullanım" },
    { code: "AC4", class: "Sınıf 32", desc: "Ticari orta kullanım" },
    { code: "AC5", class: "Sınıf 33", desc: "Ticari yüksek kullanım" },
]
</script>