<template>
  <!-- Ana sayfa yapısı - SEO için semantic HTML -->
  <div class="w-full h-full overflow-hidden bg-[linear-gradient(90deg,#FFFFFF_1%,#FFEFE1_100%)]" itemscope
    itemtype="https://schema.org/WebPage">
    <!-- Skip to content link - Accessibility için -->
    <a href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded z-50"
      tabindex="1">
      Ana içeriğe geç
    </a>

    <!-- Ana hero bölümü -->
    <Hero />

    <!-- Ana içerik alanı -->
    <main id="main-content" role="main" itemprop="mainContentOfPage">

      <!-- Avantajlar bölümü -->
      <section id="avantajlarimiz" aria-labelledby="avantajlar-baslik">
        <Advantage />
      </section>

      <!-- Ürün galerisi bölümü -->
      <section id="urun-galerisi" aria-labelledby="urunler-baslik" itemscope itemtype="https://schema.org/ItemList">
        <h2 id="urunler-baslik" class="sr-only">Ürün Galerisi</h2>

        <!-- Kafel ürün serisi -->
        <article id="kafel-1" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel1 />
        </article>

        <article id="kafel-2" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel2 />
        </article>

        <article id="kafel-3" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel3 />
        </article>

        <article id="kafel-4" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel4 />
        </article>

        <article id="kafel-5" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel5 />
        </article>

        <article id="kafel-6" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel6 />
        </article>

        <article id="kafel-7" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel7 />
        </article>

        <article id="kafel-8" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel8 />
        </article>

        <article id="kafel-9" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel9 />
        </article>

        <article id="kafel-10" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel10 />
        </article>

        <article id="kafel-11" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel11 />
        </article>

        <article id="kafel-12" itemscope itemtype="https://schema.org/Product" itemprop="itemListElement">
          <Kafel12 />
        </article>
      </section>
    </main>

    <!-- Footer - İletişim bilgileri için -->
    <footer id="iletisim" class="bg-amber-900 text-white py-4 px-4" role="contentinfo" itemscope
      itemtype="https://schema.org/Organization">
      <div class="text-center">
        <p>&copy; 2024 ORMAN Flooring. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  </div>
</template>