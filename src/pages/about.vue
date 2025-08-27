<template>
  <div class="about-page">
    <Header />
    <section id="about" class="about section">
      <div class="container" data-aos="fade-up">
        <h2>Trang Giới thiệu</h2>
        <p>Đây là trang giới thiệu của Money Tree. Tìm hiểu thêm về chúng tôi và các dịch vụ tuyệt vời.</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
.about-page {
  text-align: center;
}
</style>