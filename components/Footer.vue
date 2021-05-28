<template>
  <!--Footer-->
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 text-black">
          <img
            class="h-40"
            src="/images/secom-tuyen-dung.svg"
            alt="SECOM Tuyển dụng"
          />
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Hỗ trợ</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="tel:0978333963"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Gọi Zalo</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="tel:0978333963"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Chat Zalo</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://m.me/tuyenbaovesecom"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Nhắn tin Facebook</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Kết nối</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Facebook</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Youtube</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Zalo</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Công ty</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.secom.vn/vi/"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >SECOM</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://vn.vieclambaove.ga/huong-dan-nop-ho-so/"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Hướng đẫn nộp hồ sơ</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="tel: 0978333963"
                class="
                  no-underline
                  hover:underline
                  text-gray-800
                  hover:text-pink-500
                "
                >Gọi ngay</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <a href="https://vn.vieclambaove.ga" class="text-gray-500"
      >Việc làm bảo vệ - vn.vieclambaove.ga</a
    >
  </footer>
  <!-- jQuery if you need it
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  -->
</template>
<script>
export default {
  mounted() {
    let scrollpos = window.scrollY
    const header = document.getElementById('header')
    const navcontent = document.getElementById('nav-content')
    const navaction = document.getElementById('navAction')
    const brandname = document.getElementById('brandname')
    const toToggle = document.querySelectorAll('.toggleColour')

    document.addEventListener('scroll', function () {
      /* Apply classes for slide in bar */
      scrollpos = window.scrollY

      if (scrollpos > 10) {
        header.classList.add('bg-white')
        navaction.classList.remove('bg-white')
        navaction.classList.add('gradient')
        navaction.classList.remove('text-gray-800')
        navaction.classList.add('text-white')
        // Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add('text-gray-800')
          toToggle[i].classList.remove('text-white')
        }
        header.classList.add('shadow')
        navcontent.classList.remove('bg-gray-100')
        navcontent.classList.add('bg-white')
      } else {
        header.classList.remove('bg-white')
        navaction.classList.remove('gradient')
        navaction.classList.add('bg-white')
        navaction.classList.remove('text-white')
        navaction.classList.add('text-gray-800')
        // Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add('text-white')
          toToggle[i].classList.remove('text-gray-800')
        }

        header.classList.remove('shadow')
        navcontent.classList.remove('bg-white')
        navcontent.classList.add('bg-gray-100')
      }
    })

    const navMenuDiv = document.getElementById('nav-content')
    const navMenu = document.getElementById('nav-toggle')

    document.onclick = check
    function check(e) {
      const target = (e && e.target) || (event && event.srcElement)

      // Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains('hidden')) {
            navMenuDiv.classList.remove('hidden')
          } else {
            navMenuDiv.classList.add('hidden')
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add('hidden')
        }
      }
    }
    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true
        }
        t = t.parentNode
      }
      return false
    }
  },
}
</script>
