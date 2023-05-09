import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';
import MyHeader from '../layout/header.js';
import MyFooter from '../layout/footer.js';
import MyContact from '../layout/contact.js';

const app = createApp({
  data(){
      return{
        toast:[
          {title:'技術情報'},
        ],
        searchResult:[
          {
            imageUrl:'../../img/product/product-2.jpg',
            time:'2023-05-06',
            lable:'#TECHNOLOGY',
            title:'我是標題我是標題',
            content:'我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容約20字後用...呈現',
            watch:'42,12354',
            year:'2023'
          },
          {
            imageUrl:'../../img/product/product-2.jpg',
            time:'2023-05-06',
            lable:'#TECHNOLOGY',
            title:'我是標題我是標題',
            content:'我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容約20字後用...呈現',
            watch:'42,12354',
            year:'2022'
          },
          {
            imageUrl:'../../img/product/product-2.jpg',
            time:'2023-05-06',
            lable:'#TECHNOLOGY',
            title:'我是標題我是標題',
            content:'我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容約20字後用...呈現',
            watch:'42,12354',
            year:'2021'
          },
          {
            imageUrl:'../../img/product/product-2.jpg',
            time:'2023-05-06',
            lable:'#TECHNOLOGY',
            title:'我是標題我是標題',
            content:'我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容約20字後用...呈現',
            watch:'42,12354',
            year:'2020'
          },
        ],
        productList:'',
        languageOption:'',
        selected: null,
        Showlanguage:false,
        indexs:-1,
      }
  },
  methods:{
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
  },
  components:{
    MyFooter,MyHeader,MyContact
  }
});
app.mount('#app');