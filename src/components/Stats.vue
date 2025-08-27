<template>
  <section id="stats" class="stats section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              data-purecounter-end="232"
              data-purecounter-duration="1"
              data-purecounter-separator=","
              class="purecounter"
            ></span>
            <p>Đơn vị cung cấp</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              data-purecounter-end="450"
              data-purecounter-duration="1"
              data-purecounter-separator=","
              class="purecounter"
            ></span>
            <p>Khuyến nghị sử dụng</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              data-purecounter-end="3000"
              data-purecounter-duration="1"
              data-purecounter-separator=","
              class="purecounter"
            ></span>
            <p>Khách hàng tin dùng</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              data-purecounter-end="2000000"
              data-purecounter-duration="1"
              data-purecounter-separator=","
              class="purecounter"
            ></span>
            <p>Chi phí hợp lí</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  PureCounter({
  });
});
</script>

<style scoped>
/* CSS từ main.css liên quan đến stats */
</style>
