<template>
  <section id="contact" class="contact section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Liên Hệ</h2>
      <p>Liên hệ ngay để nhận nhiều ưu đãi hấp dẫn từ chúng tôi</p>
    </div>
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-5">
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Địa chỉ</h3>
              <p PLEASE WRITE YOUR RESPONSE HEREp>Phường 5, Quận 3, Tp Hồ Chí Minh</p>
            </div>
          </div>
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Liên hệ ngay</h3>
              <p>0939.153.556</p>
            </div>
          </div>
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email</h3>
              <p>mtvn68@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <form action="/api/contact" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
            <div class="row gy-4">
              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="Tên của bạn" required />
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" name="email" placeholder="Email" required />
              </div>
              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="Vấn đề" required />
              </div>
              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" placeholder="Tin nhắn" required></textarea>
              </div>
              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
                <button type="submit">Gửi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Logic xử lý form (cần backend API)
</script>

<style scoped>
/* CSS từ main.css liên quan đến contact */
</style>