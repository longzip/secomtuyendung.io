(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{196:function(n,t,e){"use strict";e.r(t);var l={mounted:function(){window.scrollY;var header=document.getElementById("header"),n=document.getElementById("nav-content"),t=document.getElementById("navAction"),e=(document.getElementById("brandname"),document.querySelectorAll(".toggleColour"));document.addEventListener("scroll",(function(){if(window.scrollY>10){header.classList.add("bg-white"),t.classList.remove("bg-white"),t.classList.add("gradient"),t.classList.remove("text-gray-800"),t.classList.add("text-white");for(var i=0;i<e.length;i++)e[i].classList.add("text-gray-800"),e[i].classList.remove("text-white");header.classList.add("shadow"),n.classList.remove("bg-gray-100"),n.classList.add("bg-white")}else{header.classList.remove("bg-white"),t.classList.remove("gradient"),t.classList.add("bg-white"),t.classList.remove("text-white"),t.classList.add("text-gray-800");for(i=0;i<e.length;i++)e[i].classList.add("text-white"),e[i].classList.remove("text-gray-800");header.classList.remove("shadow"),n.classList.remove("bg-white"),n.classList.add("bg-gray-100")}}));var l=document.getElementById("nav-content"),o=document.getElementById("nav-toggle");function r(n,t){for(;n.parentNode;){if(n==t)return!0;n=n.parentNode}return!1}document.onclick=function(n){var t=n&&n.target||event&&event.srcElement;r(t,l)||(r(t,o)&&l.classList.contains("hidden")?l.classList.remove("hidden"):l.classList.add("hidden"))}}},o=e(34),component=Object(o.a)(l,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",{staticClass:"bg-white"},[e("div",{staticClass:"container mx-auto px-8"},[e("div",{staticClass:"w-full flex flex-col md:flex-row py-6"},[e("div",{staticClass:"flex-1 mb-6 text-black"},[e("img",{staticClass:"h-40",attrs:{src:"/images/secom-tuyen-dung.svg",alt:"SECOM Tuyển dụng"}})]),n._v(" "),e("div",{staticClass:"flex-1"},[e("p",{staticClass:"uppercase text-gray-500 md:mb-6"},[n._v("Hỗ trợ")]),n._v(" "),e("ul",{staticClass:"list-reset mb-6"},[e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"tel:0978333963"}},[n._v("Gọi Zalo")])]),n._v(" "),e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"tel:0978333963"}},[n._v("Chat Zalo")])]),n._v(" "),e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"https://m.me/tuyenbaovesecom"}},[n._v("Nhắn tin Facebook")])])])]),n._v(" "),e("div",{staticClass:"flex-1"},[e("p",{staticClass:"uppercase text-gray-500 md:mb-6"},[n._v("Kết nối")]),n._v(" "),e("ul",{staticClass:"list-reset mb-6"},[e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"#"}},[n._v("Facebook")])]),n._v(" "),e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"#"}},[n._v("Youtube")])]),n._v(" "),e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"#"}},[n._v("Zalo")])])])]),n._v(" "),e("div",{staticClass:"flex-1"},[e("p",{staticClass:"uppercase text-gray-500 md:mb-6"},[n._v("Công ty")]),n._v(" "),e("ul",{staticClass:"list-reset mb-6"},[e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"https://www.secom.vn/vi/"}},[n._v("SECOM")])]),n._v(" "),e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"https://vn.vieclambaove.ga/huong-dan-nop-ho-so/"}},[n._v("Hướng đẫn nộp hồ sơ")])]),n._v(" "),e("li",{staticClass:"mt-2 inline-block mr-2 md:block md:mr-0"},[e("a",{staticClass:"\n                no-underline\n                hover:underline\n                text-gray-800\n                hover:text-pink-500\n              ",attrs:{href:"tel: 0978333963"}},[n._v("Gọi ngay")])])])])])]),n._v(" "),e("a",{staticClass:"text-gray-500",attrs:{href:"https://vn.vieclambaove.ga"}},[n._v("Việc làm bảo vệ - vn.vieclambaove.ga")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:e(196).default})},197:function(n,t,e){"use strict";e.r(t);var l=e(34),component=Object(l.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"fixed w-full z-30 top-0 text-white",attrs:{id:"header"}},[e("div",{staticClass:"\n      w-full\n      container\n      mx-auto\n      flex flex-wrap\n      items-center\n      justify-between\n      mt-0\n      py-2\n    "},[e("div",{staticClass:"pl-4 flex items-center"},[e("a",{staticClass:"\n          toggleColour\n          text-white\n          no-underline\n          hover:no-underline\n          font-bold\n          text-2xl\n          lg:text-4xl\n        ",attrs:{href:"/"}},[e("svg",{staticClass:"h-8 fill-current inline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.005 512.005"}},[e("rect",{attrs:{fill:"#2a2a31",x:"16.539",y:"425.626",width:"479.767",height:"50.502",transform:"matrix(1,0,0,1,0,0)"}}),n._v(" "),e("path",{staticClass:"plane-take-off",attrs:{d:" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "}})]),n._v("\n        SECOM Tuyển dụng\n      ")])]),n._v(" "),e("div",{staticClass:"block lg:hidden pr-4"},[e("button",{staticClass:"\n          flex\n          items-center\n          p-1\n          text-pink-800\n          hover:text-gray-900\n          focus:outline-none\n          focus:shadow-outline\n          transform\n          transition\n          hover:scale-105\n          duration-300\n          ease-in-out\n        ",attrs:{id:"nav-toggle"}},[e("svg",{staticClass:"fill-current h-6 w-6",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("title",[n._v("Menu")]),n._v(" "),e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),n._v(" "),n._m(0)]),n._v(" "),e("hr",{staticClass:"border-b border-gray-100 opacity-25 my-0 py-0"})])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"\n        w-full\n        flex-grow\n        lg:flex\n        lg:items-center\n        lg:w-auto\n        hidden\n        mt-2\n        lg:mt-0\n        bg-white\n        lg:bg-transparent\n        text-black\n        p-4\n        lg:p-0\n        z-20\n      ",attrs:{id:"nav-content"}},[e("ul",{staticClass:"list-reset lg:flex justify-end flex-1 items-center"},[e("li",{staticClass:"mr-3"},[e("a",{staticClass:"inline-block py-2 px-4 text-black font-bold no-underline",attrs:{href:"#"}},[n._v("Trang chủ")])]),n._v(" "),e("li",{staticClass:"mr-3"},[e("a",{staticClass:"\n              inline-block\n              text-black\n              no-underline\n              hover:text-gray-800 hover:text-underline\n              py-2\n              px-4\n            ",attrs:{href:"https://vn.vieclambaove.ga/tuyen-dung/"}},[n._v("Tuyển dụng bảo vệ")])])]),n._v(" "),e("a",{staticClass:"\n          mx-auto\n          lg:mx-0\n          hover:underline\n          bg-white\n          text-gray-800\n          font-bold\n          rounded-full\n          mt-4\n          lg:mt-0\n          py-4\n          px-8\n          shadow\n          opacity-75\n          focus:outline-none\n          focus:shadow-outline\n          transform\n          transition\n          hover:scale-105\n          duration-300\n          ease-in-out\n        ",attrs:{id:"navAction",href:"https://vn.vieclambaove.ga/wordpress/wp-login.php?loginSocial=google"}},[n._v("\n        Đăng nhập\n      ")])])}],!1,null,null,null);t.default=component.exports},198:function(n,t,e){"use strict";e.r(t);var l=e(34),component=Object(l.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._m(0),n._v(" "),e("div",{staticClass:"relative -mt-12 lg:-mt-24"},[e("svg",{attrs:{viewBox:"0 0 1428 174",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-2.000000, 44.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("path",{attrs:{d:"M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}}),n._v(" "),e("path",{attrs:{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}}),n._v(" "),e("path",{attrs:{id:"Path-4",d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",opacity:"0.200000003"}})]),n._v(" "),e("g",{attrs:{transform:"translate(-4.000000, 76.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("path",{attrs:{d:"M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"}})])])])])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"pt-24"},[e("div",{staticClass:"\n        container\n        px-3\n        mx-auto\n        flex flex-wrap flex-col\n        md:flex-row\n        items-center\n      "},[e("div",{staticClass:"\n          flex flex-col\n          w-full\n          md:w-2/5\n          justify-center\n          items-start\n          text-center\n          md:text-left\n        "},[e("p",{staticClass:"uppercase tracking-loose w-full"},[n._v("\n          Bạn muốn xin làm nhân viên bảo vệ?\n        ")]),n._v(" "),e("h1",{staticClass:"my-4 text-5xl font-bold leading-tight"},[n._v("\n          Công ty Cổ Phần dịch vụ bảo vệ SECOM Việt Nam tuyển dụng!\n        ")]),n._v(" "),e("p",{staticClass:"leading-normal text-2xl mb-8"},[n._v("\n          Chúng tôi đang tuyển dụng nhân viên bảo vệ lương cực cao!\n        ")]),n._v(" "),e("a",{staticClass:"\n            mx-auto\n            lg:mx-0\n            hover:underline\n            bg-white\n            text-gray-800\n            font-bold\n            rounded-full\n            my-6\n            py-4\n            px-8\n            shadow-lg\n            focus:outline-none\n            focus:shadow-outline\n            transform\n            transition\n            hover:scale-105\n            duration-300\n            ease-in-out\n          ",attrs:{href:"https://vn.vieclambaove.ga/wordpress/wp-login.php?loginSocial=google"}},[n._v("\n          Có, tôi muốn xin làm bảo vệ\n        ")])]),n._v(" "),e("div",{staticClass:"w-full md:w-3/5 py-6 text-center"},[e("img",{staticClass:"w-full md:w-4/5 z-50",attrs:{src:"/images/secom-tuyen-dung.png"}})])])])}],!1,null,null,null);t.default=component.exports},199:function(n,t,e){"use strict";e.r(t);var l=e(34),component=Object(l.a)({},(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"bg-white border-b py-8"},[e("div",{staticClass:"container max-w-5xl mx-auto m-8"},[e("h2",{staticClass:"\n        w-full\n        my-2\n        text-5xl\n        font-bold\n        leading-tight\n        text-center text-gray-800\n      "},[n._v("\n      Chúng tôi đang tuyển dụng nhân viên bảo vệ làm việc tại Tp.Hà Nội\n    ")]),n._v(" "),e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"})]),n._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-5/6 sm:w-1/2 p-6"},[e("h3",{staticClass:"text-3xl text-gray-800 font-bold leading-none mb-3"},[n._v("\n          Yêu cầu công việc\n        ")]),n._v(" "),e("div",{staticClass:"text-gray-600 mb-8"},[e("ul",[e("li",[n._v("Từ 20 đến dưới 50 đối với Nam")]),n._v(" "),e("li",[n._v("Từ 20 đến dưới 45 đối với Nữ")]),n._v(" "),e("li",[n._v("Tốt nghiệp cấp 2 trở lên")])])]),n._v(" "),e("div",{staticClass:"align-middle"},[e("h3",{staticClass:"text-3xl text-gray-800 font-bold leading-none mb-3"},[n._v("\n            Mô tả công việc\n          ")]),n._v(" "),e("div",{staticClass:"text-gray-600 mb-8"},[n._v("\n            Sau khi vào công ty, bạn sẽ có rất nhiều cơ hội để học hỏi nhằm\n            phát triển không chỉ về nghiệp vụ bảo vệ mà còn về tác phong, kỹ\n            năng làm việc.\n            "),e("ul",[e("li",[n._v("Đảm bảo an ninh cho nhân sự và tài sản của công ty")]),n._v(" "),e("li",[n._v("Thực hiện công việc bảo vệ tại vị trí được phân công")]),n._v(" "),e("li",[n._v("Báo cáo nếu xảy ra sự cố")])])])])]),n._v(" "),e("div",{staticClass:"w-5/6 sm:w-1/2 p-6"},[e("h3",{staticClass:"text-3xl text-gray-800 font-bold leading-none mb-3"},[n._v("\n          Quyền lợi của nhân viên bảo vệ SECOM\n        ")]),n._v(" "),e("div",{staticClass:"text-gray-600 mb-8"},[e("ul",[e("li",[n._v("Được đào tạo miễn phí trước khi làm việc")]),n._v(" "),e("li",[n._v("\n              Được trả 100% lương cơ bản trong thời gian đào tạo và thử việc\n            ")]),n._v(" "),e("li",[n._v("Thử việc 1 tháng và được ký hợp đồng lao động ngay")]),n._v(" "),e("li",[n._v("\n              Được nghỉ 4 ngày/tháng và có 12 ngày phép/năm hưởng nguyên lương\n            ")]),n._v(" "),e("li",[n._v("\n              Được đóng Bảo hiểm y tế, Bảo hiểm xã hội và Bảo hiểm thất nghiệp\n              theo Luật lao động\n            ")]),n._v(" "),e("li",[n._v("\n              Được mua bảo hiểm tai nạn với mức bồi thường lên đến 30 tháng\n              lương\n            ")]),n._v(" "),e("li",[n._v("Đánh giá tăng lương hàng năm")]),n._v(" "),e("li",[n._v("Lương tháng 13 + Thưởng cuối năm")]),n._v(" "),e("li",[n._v("Mỗi năm công ty phát 2 bộ đồng phục")]),n._v(" "),e("li",[n._v("Được trả lương vào ngày cuối tháng và đúng hạn")]),n._v(" "),e("li",[n._v("Không đặt cọc tiền hay giữ lương bất cứ hình thức nào")]),n._v(" "),e("li",[n._v("\n              Sau một năm làm việc được công ty mua gói bảo hiểm sức khỏe\n              (được khám ngoại trú với chi phí 8 triệu/năm (bao gồm khám\n              răng), khám nội trú với chi phí 105 triệu/năm)\n            ")]),n._v(" "),e("li",[n._v("\n              Địa điểm làm việc: Siêu thị thời trang Uniqlo của Nhật là gồm\n              Toà nhà Aeon Long Biên, AEON Hà Đông, Toà nhà Vincom 29 Liễu\n              Giai, Toà Nhà Vincom số 2 Phạm Ngọc Thạch, Khu công nghiệp Nội\n              Bài, KCN Thăng long 1, KCN Sài Đồng long biên, KCN Đồng Văn 2 Hà\n              Nam.\n            ")])])])])])])])}],!1,null,null,null);t.default=component.exports},200:function(n,t,e){"use strict";e.r(t);var l=e(34),component=Object(l.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("svg",{staticClass:"wave-top",attrs:{viewBox:"0 0 1439 147",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-1.000000, -14.000000)","fill-rule":"nonzero"}},[e("g",{staticClass:"wave",attrs:{fill:"#f8fafc"}},[e("path",{attrs:{d:"M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"}})]),n._v(" "),e("g",{attrs:{transform:"translate(1.000000, 15.000000)",fill:"#FFFFFF"}},[e("g",{attrs:{transform:"translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "}},[e("path",{attrs:{d:"M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}}),n._v(" "),e("path",{attrs:{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}}),n._v(" "),e("path",{attrs:{d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",opacity:"0.200000003"}})])])])])]),n._v(" "),n._m(0)])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"container mx-auto text-center py-6 mb-12"},[e("h2",{staticClass:"\n        w-full\n        my-2\n        text-5xl\n        font-bold\n        leading-tight\n        text-center text-white\n      "},[n._v("\n      Đăng ký ứng tuyển nhân viên bảo vệ\n    ")]),n._v(" "),e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"})]),n._v(" "),e("p",{staticClass:"my-4 text-3xl leading-tight"},[n._v("\n      Nếu bạn đang tìm công việc bảo vệ thu nhập cao, ổn định với môi trường\n      chuyên nghiệp Nhật Bản, không giữ lương, không đặt cọc và được mua bảo\n      hiểm tai nạn và bảo hiểm sức khỏe thì công ty Secom là lựa chọn đúng đắn\n      nhất!\n    ")]),n._v(" "),e("a",{staticClass:"\n        mx-auto\n        lg:mx-0\n        hover:underline\n        bg-white\n        text-gray-800\n        font-bold\n        rounded-full\n        my-6\n        py-4\n        px-8\n        shadow-lg\n        focus:outline-none\n        focus:shadow-outline\n        transform\n        transition\n        hover:scale-105\n        duration-300\n        ease-in-out\n      ",attrs:{href:"https://vn.vieclambaove.ga/wordpress/wp-login.php?loginSocial=google"}},[n._v("\n      Có, tôi muốn xin làm bảo vệ\n    ")])])}],!1,null,null,null);t.default=component.exports},201:function(n,t,e){"use strict";e.r(t);var l=e(34),component=Object(l.a)({},(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"bg-white border-b py-8"},[e("div",{staticClass:"container mx-auto flex flex-wrap pt-4 pb-12"},[e("h2",{staticClass:"\n        w-full\n        my-2\n        text-5xl\n        font-bold\n        leading-tight\n        text-center text-gray-800\n      "},[n._v("\n      Quyền lợi của nhân viên bảo vệ\n    ")]),n._v(" "),e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"})]),n._v(" "),e("div",{staticClass:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},[e("div",{staticClass:"\n          flex-1\n          bg-white\n          rounded-t rounded-b-none\n          overflow-hidden\n          shadow\n        "},[e("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:"#"}},[e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[n._v("\n            Được đào tạo miễn phí trước khi làm việc\n          ")]),n._v(" "),e("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[n._v("\n            Lorem ipsum dolor sit amet.\n          ")]),n._v(" "),e("p",{staticClass:"text-gray-800 text-base px-6 mb-5"},[n._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            at ipsum eu nunc commodo posuere et sit amet ligula.\n          ")])])]),n._v(" "),e("div",{staticClass:"\n          flex-none\n          mt-auto\n          bg-white\n          rounded-b rounded-t-none\n          overflow-hidden\n          shadow\n          p-6\n        "},[e("div",{staticClass:"flex items-center justify-start"},[e("button",{staticClass:"\n              mx-auto\n              lg:mx-0\n              hover:underline\n              gradient\n              text-white\n              font-bold\n              rounded-full\n              my-6\n              py-4\n              px-8\n              shadow-lg\n              focus:outline-none\n              focus:shadow-outline\n              transform\n              transition\n              hover:scale-105\n              duration-300\n              ease-in-out\n            "},[n._v("\n            Action\n          ")])])])]),n._v(" "),e("div",{staticClass:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},[e("div",{staticClass:"\n          flex-1\n          bg-white\n          rounded-t rounded-b-none\n          overflow-hidden\n          shadow\n        "},[e("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:"#"}},[e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[n._v("\n            xGETTING STARTED\n          ")]),n._v(" "),e("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[n._v("\n            Lorem ipsum dolor sit amet.\n          ")]),n._v(" "),e("p",{staticClass:"text-gray-800 text-base px-6 mb-5"},[n._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            at ipsum eu nunc commodo posuere et sit amet ligula.\n          ")])])]),n._v(" "),e("div",{staticClass:"\n          flex-none\n          mt-auto\n          bg-white\n          rounded-b rounded-t-none\n          overflow-hidden\n          shadow\n          p-6\n        "},[e("div",{staticClass:"flex items-center justify-center"},[e("button",{staticClass:"\n              mx-auto\n              lg:mx-0\n              hover:underline\n              gradient\n              text-white\n              font-bold\n              rounded-full\n              my-6\n              py-4\n              px-8\n              shadow-lg\n              focus:outline-none\n              focus:shadow-outline\n              transform\n              transition\n              hover:scale-105\n              duration-300\n              ease-in-out\n            "},[n._v("\n            Action\n          ")])])])]),n._v(" "),e("div",{staticClass:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},[e("div",{staticClass:"\n          flex-1\n          bg-white\n          rounded-t rounded-b-none\n          overflow-hidden\n          shadow\n        "},[e("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:"#"}},[e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[n._v("\n            xGETTING STARTED\n          ")]),n._v(" "),e("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[n._v("\n            Lorem ipsum dolor sit amet.\n          ")]),n._v(" "),e("p",{staticClass:"text-gray-800 text-base px-6 mb-5"},[n._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n            at ipsum eu nunc commodo posuere et sit amet ligula.\n          ")])])]),n._v(" "),e("div",{staticClass:"\n          flex-none\n          mt-auto\n          bg-white\n          rounded-b rounded-t-none\n          overflow-hidden\n          shadow\n          p-6\n        "},[e("div",{staticClass:"flex items-center justify-end"},[e("button",{staticClass:"\n              mx-auto\n              lg:mx-0\n              hover:underline\n              gradient\n              text-white\n              font-bold\n              rounded-full\n              my-6\n              py-4\n              px-8\n              shadow-lg\n              focus:outline-none\n              focus:shadow-outline\n              transform\n              transition\n              hover:scale-105\n              duration-300\n              ease-in-out\n            "},[n._v("\n            Action\n          ")])])])])])])}],!1,null,null,null);t.default=component.exports},202:function(n,t,e){"use strict";e.r(t);var l=e(34),component=Object(l.a)({},(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"bg-gray-100 py-8"},[e("div",{staticClass:"container mx-auto px-2 pt-4 pb-12 text-gray-800"},[e("h1",{staticClass:"\n        w-full\n        my-2\n        text-5xl\n        font-bold\n        leading-tight\n        text-center text-gray-800\n      "},[n._v("\n      Pricing\n    ")]),n._v(" "),e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"})]),n._v(" "),e("div",{staticClass:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"},[e("div",{staticClass:"\n          flex flex-col\n          w-5/6\n          lg:w-1/4\n          mx-auto\n          lg:mx-0\n          rounded-none\n          lg:rounded-l-lg\n          bg-white\n          mt-4\n        "},[e("div",{staticClass:"\n            flex-1\n            bg-white\n            text-gray-600\n            rounded-t rounded-b-none\n            overflow-hidden\n            shadow\n          "},[e("div",{staticClass:"p-8 text-3xl font-bold text-center border-b-4"},[n._v("\n            Free\n          ")]),n._v(" "),e("ul",{staticClass:"w-full text-center text-sm"},[e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")])])]),n._v(" "),e("div",{staticClass:"\n            flex-none\n            mt-auto\n            bg-white\n            rounded-b rounded-t-none\n            overflow-hidden\n            shadow\n            p-6\n          "},[e("div",{staticClass:"w-full pt-6 text-3xl text-gray-600 font-bold text-center"},[n._v("\n            £0\n            "),e("span",{staticClass:"text-base"},[n._v("for one user")])]),n._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("button",{staticClass:"\n                mx-auto\n                lg:mx-0\n                hover:underline\n                gradient\n                text-white\n                font-bold\n                rounded-full\n                my-6\n                py-4\n                px-8\n                shadow-lg\n                focus:outline-none\n                focus:shadow-outline\n                transform\n                transition\n                hover:scale-105\n                duration-300\n                ease-in-out\n              "},[n._v("\n              Sign Up\n            ")])])])]),n._v(" "),e("div",{staticClass:"\n          flex flex-col\n          w-5/6\n          lg:w-1/3\n          mx-auto\n          lg:mx-0\n          rounded-lg\n          bg-white\n          mt-4\n          sm:-mt-6\n          shadow-lg\n          z-10\n        "},[e("div",{staticClass:"\n            flex-1\n            bg-white\n            rounded-t rounded-b-none\n            overflow-hidden\n            shadow\n          "},[e("div",{staticClass:"w-full p-8 text-3xl font-bold text-center"},[n._v("Basic")]),n._v(" "),e("div",{staticClass:"h-1 w-full gradient my-0 py-0 rounded-t"}),n._v(" "),e("ul",{staticClass:"w-full text-center text-base font-bold"},[e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")])])]),n._v(" "),e("div",{staticClass:"\n            flex-none\n            mt-auto\n            bg-white\n            rounded-b rounded-t-none\n            overflow-hidden\n            shadow\n            p-6\n          "},[e("div",{staticClass:"w-full pt-6 text-4xl font-bold text-center"},[n._v("\n            £x.99\n            "),e("span",{staticClass:"text-base"},[n._v("/ per user")])]),n._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("button",{staticClass:"\n                mx-auto\n                lg:mx-0\n                hover:underline\n                gradient\n                text-white\n                font-bold\n                rounded-full\n                my-6\n                py-4\n                px-8\n                shadow-lg\n                focus:outline-none\n                focus:shadow-outline\n                transform\n                transition\n                hover:scale-105\n                duration-300\n                ease-in-out\n              "},[n._v("\n              Sign Up\n            ")])])])]),n._v(" "),e("div",{staticClass:"\n          flex flex-col\n          w-5/6\n          lg:w-1/4\n          mx-auto\n          lg:mx-0\n          rounded-none\n          lg:rounded-l-lg\n          bg-white\n          mt-4\n        "},[e("div",{staticClass:"\n            flex-1\n            bg-white\n            text-gray-600\n            rounded-t rounded-b-none\n            overflow-hidden\n            shadow\n          "},[e("div",{staticClass:"p-8 text-3xl font-bold text-center border-b-4"},[n._v("Pro")]),n._v(" "),e("ul",{staticClass:"w-full text-center text-sm"},[e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")]),n._v(" "),e("li",{staticClass:"border-b py-4"},[n._v("Thing")])])]),n._v(" "),e("div",{staticClass:"\n            flex-none\n            mt-auto\n            bg-white\n            rounded-b rounded-t-none\n            overflow-hidden\n            shadow\n            p-6\n          "},[e("div",{staticClass:"w-full pt-6 text-3xl text-gray-600 font-bold text-center"},[n._v("\n            £x.99\n            "),e("span",{staticClass:"text-base"},[n._v("/ per user")])]),n._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("button",{staticClass:"\n                mx-auto\n                lg:mx-0\n                hover:underline\n                gradient\n                text-white\n                font-bold\n                rounded-full\n                my-6\n                py-4\n                px-8\n                shadow-lg\n                focus:outline-none\n                focus:shadow-outline\n                transform\n                transition\n                hover:scale-105\n                duration-300\n                ease-in-out\n              "},[n._v("\n              Sign Up\n            ")])])])])])])])}],!1,null,null,null);t.default=component.exports},203:function(n,t,e){"use strict";e.r(t);var l=e(197),o=e(198),r=e(199),c=e(201),d=e(202),v=e(200),m=e(196),h=[{name:"Tuyển dụng",href:"#"},{name:"Hướng đẫn",href:"#"},{name:"Liên hệ",href:"#"}],f={components:{Hero:o.default,MainNav:l.default,SectionFirst:r.default,SectionSecond:c.default,Pricing:d.default,CallToAction:v.default,Footer:m.default},asyncData:function(){return{open:!1,navigation:h}}},x=e(34),component=Object(x.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"leading-normal tracking-normal text-white gradient",staticStyle:{"font-family":"'Source Sans Pro', sans-serif"}},[e("main-nav"),n._v(" "),e("hero"),n._v(" "),e("section-first"),n._v(" "),e("CallToAction"),n._v(" "),e("Footer")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MainNav:e(197).default,Hero:e(198).default,SectionFirst:e(199).default,CallToAction:e(200).default,Footer:e(196).default})}}]);