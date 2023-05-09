import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';
import MyHeader from '../layout/header.js';
import MyFooter from '../layout/footer.js';
import MyContact from '../layout/contact.js';

const app = createApp({
  data(){
      return{
        toast:[
          {title:'最新消息'},
        ],
        text:'德国里根斯堡; 爱尔兰科克及北卡罗来纳州三角研究园(2021年4月26日) – ASM AMICRA Microtechnologies GmbH (“ASM AMICRA”), ASM 太平洋科技有限公司的子公司， 发布三款新的制造系统，它们结合了 X-Celeprint 的微转移打印（MTP）和ASM AMICRA 的高精度固晶技术，打造半导体行业第一个完整的系统，成功地将大量超薄芯片异构集成到300毫米基底晶圆上。 X-Celeprint MTP 工艺堆叠超薄芯片，称为 X芯片，它可以是千变万化的1，还可以采用不同的工艺节点和技术2来创建模拟单片3D集成电路，以提高高性能计算、通信、移动装置、汽车、工业、医疗和国防系统的功率、性能、面积、成本、上市时间和安全性。 ASM AMICRA 近20年来一直在完善超高精度固放技术，目前已将X-Celeprint 的 MTP 技术整合到三个不同的制造系统中，其中包括： Nova+ MTP系统，符合ISO 4洁净室级系统要求，适合高产量需要的市场，该系统采用 50x50mm MTP 转移印章，大规模同时拾放x芯片。其放置精度为±1.5µm，周期时间为40秒 NANO MTP系统，适用于更高精度要求（±0.3µm）的市场，如光子市场等 AFC+ MTP系统，适用于研发和小批量制造市场。其放置精度为±1.0µm，周期时间为50秒 X-Celeprint 和 ASM AMICRA 通过提供开发支持，以促进 MTP 的技术采用，支持包括设计咨询、协助优化设计和流程，以及原型服务，以确保产品成功推出。广泛的关系网，供应商、制造商和研究人员，以支持客户的项目需求，包括授权计划。 1 X芯片包含射频和功率晶体管、硬件保证功能、光子学、传感器、电容器、电感、滤波器、天线等等，未能尽录 2 工艺包括SOI、GaN、GaAs、InP、SiGe或其他关于 ASM AMICRAASM AMICRA Microtechnologies GmbH 是一家全球领先的超高精度芯片贴装系统供应商。ASMAMICRA系统专攻精确至 ±0.3µm @3σ 亚微米级的放置精度，应用于光子学和半导体市场。该系统还支持固晶、覆晶、共晶、银浆固晶和X-Celeprint的微转移打印（MTP）工艺。所服务的市场包括硅光子、光电子、有源光缆（AOC）、VCSEL、激光二极管、2.5D/3D集成电路、晶圆级封装（WLP）、大面板扇出/嵌入式晶圆级封装（EWLP）和汽车传感器/激光雷达。ASM AMICRA总部位于德国里根斯堡，在全球设有销售和服务支持办事处。',
        images:[
          '../../img/product/product-2.jpg',
          '../../img/product/product-4.jpg',
          '../../img/product/product-5.jpg',
          '../../img/product/product-6.jpg',
          '../../img/product/product-7.jpg',      
      ],
        productList:'',
        languageOption:'',
        selected: null,
        Showlanguage:false,
        indexs:-1,
      }
  },
  methods:{
    newsSwiperinit(){
      var swiper = new Swiper(".news-swiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
      });
      var swiper2 = new Swiper(".news-swipers", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      var swiper = new Swiper(".mbSwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
//共用方法
    scrollChangeHeader(){
      $('#gotop').on('click',function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow'); 
        return false;
      });
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 800 ){
          $('#gotop').fadeIn();
        } else {
          $('#gotop').fadeOut();
        }
      });
    },
    getProduct(product){
      this.productList=product;
    },
    getoption(la){
      this.languageOption=la;
    },
    selectOption(option) {
      this.selected = option;
    },
    mbDropdown(val){
      this.mbDropdowns=val;
      $('#dropdown' + val).slideToggle();
      $('.mb-dropdown' + val).toggleClass("on");
    },
    mbDropdownlist(val){
      var dropdownId = 'dropdowns' + val;
      var dropdownClass = 'dropdowns' + val;
      var $dropdown = $('#' + dropdownId);
      var $dropdownClass = $('.' + dropdownClass);
      $dropdown.slideToggle();
      $dropdownClass.toggleClass("on");
      this.indexs = val;
    },
    dropdownLanguage(){
      $('.language-menu').slideToggle(300);
      this.Showlanguage=!this.Showlanguage;
    },
  },
  mounted(){
    this.scrollChangeHeader();
    this.newsSwiperinit();
  },
  components:{
    MyFooter,MyHeader,MyContact
  }
});
app.mount('#app');