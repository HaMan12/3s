import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';
import MyFooter from '../layout/footer.js';
import MyContact from '../layout/contact.js';
const app = createApp({
    data(){
        return{
          productList:[
            {parents:'客製化系列產品',son:'',images:'../../img/product/product-1.png',isDropdownOpen: false,},
            {parents:'功率器件之封裝設備',son: ['錫膏網印機','銅跳線取放機','固晶機'],images:'../../img/product/product-2.jpg',isDropdownOpen: false, },
            {parents:'回焊爐',son:'',images:'../../img/product/product-3.png',isDropdownOpen: false,},
            {parents:'焊接材料',son:'',images:'../../img/product/product-4.jpg',isDropdownOpen: false,},
            {parents:'客製化機台',son:['測試一','測試二',],images:'../../img/product/product-5.jpg',isDropdownOpen: false,},
            {parents:'開放實驗室服務',son: '' ,images:'../../img/product/product-6.jpg',isDropdownOpen: false,},
          ],
          options: [
            { value: '繁體中文',label: '繁體中文' },
            { value: '簡體中文',label: '簡體中文' },
            { value: 'English',label: 'English' },
            { value: '日文版本',label: '日文版本' }
          ],
          currentProduct: {
            parents: '',
            son: '',
            images: '../../img/product/product-1.png',
          },
          mbDropdowns: null,
          languageShow:false,
          selected: null,
          indexs:'-1',
          headerActive:false,
        }
    },
    methods:{
      swiperInit(){
        var swiper = new Swiper(".banner-Swiper", {
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
        });
      }, 
      initAOS() {
        AOS.init({
          duration:1000,
          easing: 'ease-out-back',
          delay: 0
        });
      },
      initGasp(){
        gsap.registerPlugin(ScrollTrigger);
        let start = { val: 0 };
        gsap.utils.toArray('.tal').forEach( (label) => {
        start.val = 0;
        gsap.to( start, {
        duration: 1,
        scrollTrigger: {
        trigger: label,
        toggleActions: "play none none none",
        start: "center center+=150",
        markers: false,
      },
      val: label.dataset.end,
      onUpdate: (()=>{
        label.innerHTML=Math.floor( Number( start.val ))
         })
        });
      });
      },
      DragScrollinit(){
        $('.mountainSwiper').dragScroll({
          direction: 'scrollLeft',
        });
      },
      scrollChangeHeader(){
        $(window).scroll(function () {
          let scrollTop = $(window).scrollTop();
          if (scrollTop > 0) {
            $('.header').addClass('is-active');      
          } else {
            $('.header').removeClass('is-active');
          }
        });
        $('#gotop').on('click',function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow'); 
          return false;
        });
        $(window).scroll(function() {
          if ( $(this).scrollTop() > 800){
            $('#gotop').fadeIn();
          } else {
            $('#gotop').fadeOut();
          }
        });
      },
      dropdown(){
        $('.language').toggleClass('active');
        $('.dropdownMenu').slideToggle();
      },
      selectOption(option) {
        this.selected = option;
      },
      hamburgerMenu(){
        $('.hamburger').toggleClass("is-active");
        $('.mobile-nav').toggleClass("is-active");
        $('.pc-nav').toggleClass('is-active');
        $('.img').toggleClass('is-active');
        $('.mb-search').toggleClass('is-active');
      },
      dropdownLanguage(){
        $('.language-menu').slideToggle(300);
        this.languageShow=!this.languageShow;
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
      toggleDropdownlist(index){
        var dropdownProduct = 'Product' + index;
        var $dropdownProduct = $('.' + dropdownProduct);
        $dropdownProduct.toggleClass("on");
        this.productList.forEach((product, i) => {
          if (i === index) {
            product.isDropdownOpen = !product.isDropdownOpen;
          } else {
            product.isDropdownOpen = false;
          }
        });
        this.currentProduct = this.productList[index];
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.swiperInit();
      });
      this.initAOS();
      this.initGasp();
      this.DragScrollinit();
      this.scrollChangeHeader();
    },
    components:{
      MyFooter,MyContact
    }
});
app.mount('#app');