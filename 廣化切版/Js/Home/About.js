import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';
import MyHeader from '../layout/header.js';
import MyFooter from '../layout/footer.js';
import MyContact from '../layout/contact.js';

const app = createApp({
  data(){
      return{
        toast:[
          {title:'關於我們'},
        ],
        years:[
          {
            year:'2023',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2023',
            id:1,
          },
          {
            year:'2023',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2023',
            id:2,
          },
          {
            year:'2023',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2023',
            id:3,
          },
          {
            year:'2023',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2023',
            id:4,
          },
          {
            year:'2022',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2022',
            id:5,
          },
          {
            year:'2021',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2021',
            id:6,
          },
          {
            year:'2020',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2020',
            id:7,
          },
          {
            year:'2019',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2019',
            id:8,
          },
          {
            year:'2018',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2018',
            id:9,
          },
          {
            year:'2017',
            content:'中機資安品質再升級~通過法國標準協會(AFNOR)驗證，取得資訊安全管理系統 ISO/IEC 27001:2013 證書，充分展現中機對客戶資訊安全與服務品質的承諾!!',
            time:'March 2017',
            id:10,
          },//十筆資料模擬年份相同 且有多筆資料的情況 來做分類
        ],
        productList:'',
        languageOption:'',
        selected: null,
        Showlanguage:false,
        indexs:-1,
        yearsData: [], // 記錄每個年份對應的資料
        uniqueYears: [], // 不重複的年份陣列
        selectedYear: 0, // 選中的年份對應的資料
        selectedData:0, //綁定class用的一個數組
      }
  },
  methods:{
    yearSwiperInit(){
      var swiper = new Swiper('.yearswiper', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1280:{
            slidesPerView: 6,
          },
          768:{
            slidesPerView: 4,
          }
        }
      });
    },
    showContent(index,year){
      this.selectedYear = this.yearsData[year];
      this.selectedData = year;
    },
    DragScrollinit(){
      $('.droptree').dragScroll({
        direction: 'scrollLeft',
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
    this.$nextTick(() => {
      this.yearSwiperInit();
    });
    this.scrollChangeHeader();
    this.DragScrollinit();
    // 獲取不重複的年份
    this.years.forEach((item) => {
      if (!this.uniqueYears.includes(item.year)) {
        this.uniqueYears.push(item.year);
        this.yearsData[item.year] = []; // 初始化對應的資料陣列
      }
      this.yearsData[item.year].push(item); // 將資料加入對應年份的陣列中
    });
    this.showContent(0, 2023);
  },
  computed: {
    filteredYears() {
      return this.selectedYear;
    },
  },
  components:{
    MyFooter,MyHeader,MyContact
  }
});
app.mount('#app');