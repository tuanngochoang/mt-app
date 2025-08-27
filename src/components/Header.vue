<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
    >
      <a href="index.html" class="logo d-flex align-items-center">
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <img
          width="auto"
          height="335"
          src="/public/logo-MT.png"
          class="header-logo-dark"
          alt="Thẻ ưu đãi 10%"
        />
        <h1 class="sitename">Money Tree</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Trang Chủ</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#services">Dịch vụ</a></li>
          <li><a href="#portfolio">Về chúng tôi</a></li>
          <li><a href="#team">Nhóm</a></li>
          <li class="dropdown">
            <a href="#"
              ><span>Cửa hàng</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i
            ></a>
            <ul>
              <li><a href="#">F&B</a></li>
              <li class="dropdown">
                <a href="#"
                  ><span>Deep Dropdown</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i
                ></a>
                <ul>
                  <li><a href="#">Spa</a></li>
                  <li><a href="#">Nhà hàng</a></li>
                  <li><a href="#">Garage</a></li>
                  <li><a href="#">Coffee</a></li>
                  <li><a href="#">Hầm rượu</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>
