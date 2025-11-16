<template>
    <canvas ref="canvas" class="fixed inset-0 w-full h-full"></canvas>
</template>

<script setup>
const canvas = ref(null);
let ctx;
let stars = [];

const STAR_COUNT = 900;

// Scroll hızını tut
let scrollSpeed = 0.2;

// Scroll hareketini yakala
window.addEventListener("wheel", (e) => {
    // aşağı scroll → hız +
    // yukarı scroll → hız -
    scrollSpeed += e.deltaY * 0.10;

    // hız bir limitte kalsın:
    scrollSpeed = Math.max(Math.min(scrollSpeed, 10), -10);
});

const rand = (min, max) => Math.random() * (max - min) + min;

onMounted(() => {
    const c = canvas.value;
    ctx = c.getContext("2d");

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    initStars();
    animate();
});

function resizeCanvas() {
    const c = canvas.value;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}

function initStars() {
    stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: rand(-window.innerWidth, window.innerWidth),
            y: rand(-window.innerHeight, window.innerHeight),
            z: rand(0, window.innerWidth)
        });
    }
}

function animate() {
    const c = canvas.value;
    const { width, height } = c;

    const halfW = width / 2;
    const halfH = height / 2;

    // Arka plan
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    stars.forEach((star) => {
        // Scroll hızına göre Z değişimi
        star.z -= scrollSpeed;

        // Arkaya gitmesi için limit
        if (star.z <= 1) {
            star.x = rand(-width, width);
            star.y = rand(-height, height);
            star.z = width;
        }

        // Çok geriye giderse yine resetle
        if (star.z > width) {
            star.x = rand(-width, width);
            star.y = rand(-height, height);
            star.z = 1;
        }

        // 3D → 2D projeksiyon
        const k = 100 / star.z;
        const px = star.x * k + halfW;
        const py = star.y * k + halfH;

        const size = (1 - star.z / width) * 3;

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}
</script>

<style scoped>
canvas {
    background: black;
}
</style>