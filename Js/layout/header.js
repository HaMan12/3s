export default{
  data(){
    return{
      productList:[
        {parents:'客製化系列產品',son:'',},
        {parents:'功率器件之封裝設備',son: ['錫膏網印機','銅跳線取放機','固晶機']},
        {parents:'回焊爐',son:''},
        {parents:'焊接材料',son:''},
        {parents:'客製化機台',son:['測試一','測試二']},
        {parents:'開放實驗室服務',son: ['測試一','測試二','測試二','測試二','測試二']},
      ],
      options: [
        { value: '繁體中文',label: '繁體中文' },
        { value: '簡體中文',label: '簡體中文' },
        { value: 'English',label: 'English' },
        { value: '日文版本',label: '日文版本' }
      ],
    }
  },
  methods:{
    emitProduct(){
      this.$emit('emit-product' , this.productList)
    },
    emitLanguage(){
      this.$emit('emit-language' , this.options)
    },
    dropdown(){
      $('.language').toggleClass('active');
      $('.dropdownMenu').slideToggle();
    },
    selectOption(option){
      this.$emit('select-option',option)
    },
    hamburgerMenu(){
      $('.hamburger').toggleClass("is-active");
      $('.mobile-nav').toggleClass("is-active");
      $('.img').toggleClass('is-active');
      $('.mb-search').toggleClass('is-active');
    },
    mbDropdown(val){
      this.$emit('mb-dropdown',val)
    },
    mbDropdownlist(val){
      this.$emit('mb-dropdownlist',val)
    },
    dropdownLanguages(){
      this.$emit('mb-dropdownlanguages')
    }
  },
  props: {
    selected: {
      type: null, // 屬性類型
      required: true // 是否必需
    },
    indexs: {
      type: Number,
      required: true
    },
    languageshow: {
      type: Boolean,
      required: true
    }
  },
  template:`<header class="sticky top-0 z-[99]">
  <nav class="w-full h-14 nav bg-white transition-all
  duration-300 header | lg:justify-start lg:h-20 lg:bg-transparent">
   <div class="flex items-center">
     <div class="w-1/2 z-50 | lg:w-1/6">
     <a href="../Home/index.html" title="首頁" class="inline-block pl-5">
       <picture>
         <source srcset="../../img/img/mb-logo.svg" media="(max-width:1024px)">
         <img src="../../img/img/pc-logo.svg" alt="logo" class="img">
       </picture>
     </a>
   </div>
   <div class="hamburger | lg:hidden" v-on:click="hamburgerMenu()">
     <span class="hamburger-line"></span>
     <span class="hamburger-line"></span>
     <span class="hamburger-line"></span>
   </div>
     <div class="hidden 2xl:pr-[6%] 2xl:pl-[6%] | lg:block lg:pt-4">
       <ul class="pc-nav-list center mt-5">
         <li class="list1">
           <a href="../Home/about.html" class="pc-nav-list-a">關於我們</a>
           <ul class="pc-nav-list-1 center list1-1">
             <div class="py-14 px-20 flex flex-col gap-8">
               <li><a href="../Home/about.html#1">公司簡介</a></li>
               <li><a href="../Home/about.html#4">經營理念</a></li>
             </div>
             <div class="py-14 px-20 flex flex-col gap-8">
               <li><a href="../Home/about.html#2">基本介紹</a></li>
               <li><a href="../Home/about.html#5">得獎榮耀</a></li>
           </div>
           </ul>
         </li>
         <li><a href="../News/index.html" class="pc-nav-list-a">最新消息</a></li>
         <li class="list2">
           <a href="../Product/index.html" class="pc-nav-list-a">產品資訊</a>
           <ul class="py-5 px-20 pc-nav-list-1 list2-1 center items-start gap-10 min-h-[50vh]">
             <li class="py-5 relative list3" v-for="product in productList" :key="product.parents">
               <a href="" class="block">
               {{product.parents}}
             </a>
             <ul class="absolute top-16 left-0 list3-1 bg-[#E2F7FF]">
               <li class="py-5" v-for="item in product.son">
                 <a href="">{{item}}</a>
               </li>
             </ul>
           </li>
           </ul>
         </li>
         <li><a href="../Technology/index.html" class="pc-nav-list-a">技術情報</a></li>
         <li><a href="" class="pc-nav-list-a">投資人專區</a></li>
         <li><a href="" class="pc-nav-list-a">實績案例</a></li>
         <li><a href="" class="pc-nav-list-a">永續發展</a></li>
         <li class="list4">
           <a href="" class="pc-nav-list-a">人力資源</a>
           <ul class="pc-nav-list-1 center list4-1">
             <div class="py-14 px-20 flex flex-col gap-8">
               <li><a href="">財務資訊</a></li>
               <li><a href="">公司年報</a></li>
             </div>
             <div class="pb-20 px-20 flex items-start">
              <li><a href="">股東專區</a></li>
             </div>
           </ul>
         </li>
       </ul>
     </div>
     <div class="language relative h-[80px] w-[130px] text-base z-50 cursor-pointer hidden | lg:center"
     v-on:click="dropdown()">
       <div class="center h-11">
         <span class="text-black inline-block mr-2 text-sm 2xl:text-base">{{ selected ? selected.label : '繁體中文' }}</span>
         <img src="../../img/img/black-earth.svg" alt="Earth">
       </div>
       <div class="dropdownMenu absolute top-16 left-3 hidden text-sm 2xl:text-base">
         <ul class="text-black">
           <li v-for="option in options" :key="option.value"
           @click="selectOption(option)">{{ option.label }}</li>
         </ul>
       </div>
     </div>
     <div class="flex items-center search h-[55px]">
     <div class="w-8 h-8 bg-bgBlue rounded-full center cursor-pointer hidden | lg:flex">
       <img src="../../img/img/pc-search-blue.svg" alt="pc-search">
     </div>
   </div>
     <div class="w-full h-[344px] bg-[#0070C0] fixed top-0 z-50 pc-search">
      <div class="absolute top-1/3 left-[15%]">
        <h2 class="text-white text-5xl font-bold">Search</h2>
        <div class="border border-white rounded-full flex mt-5 w-[600px] h-12">
          <input type="text" class="bg-transparent w-[530px] text-white ml-7 text-xl" placeholder="請輸入關鍵字搜尋">
          <button type="button">
            <img src="../../img/img/search.svg" alt="logo" width="32">
          </button>
        </div>
      </div>
      </div> 
   </div>
  </nav> 
  <div class="mobile-nav fixed top-14 left-0 bg-white w-full min-h-screen block | lg:hidden">
   <div class="relative" style="min-height: calc(100% - 100px);">
     <div class="h-14 flex justify-end">
       <div class="w-14 h-14 border border-[#00000029] border-t-0 center bg-white" v-on:click="dropdownLanguages()"
       :class="{'mb-la':languageshow}">
         <img src="../../img/img/mb-earth.svg" alt="mb-earth">
       </div>
     </div>
     <ul class="language-menu" v-show="languageshow">
       <li class="language-menu-list" v-for="option in options" :key="option.value">{{ option.label }}</li>
     </ul>
     <div v-show="!languageshow">
       <ul class="mb-list">
         <li>
           <a href="javascript:;" class="relative" v-on:click="mbDropdown(1)">關於廣化
             <button type="button" class="mb-dropdown mb-dropdown1"></button>
           </a>
           <ul id="dropdown1" class="mb-list-1 hidden" >
             <li><a href="#">公司簡介</a></li>
             <li><a href="">經營理念</a></li>
             <li><a href="">基本介紹</a></li>
             <li><a href="">得獎榮耀</a></li>
           </ul>
         </li>
         <li><a href="">最新消息</a></li>
         <li>
           <a href="javascript:;" class="relative" v-on:click="mbDropdown(2)">產品資訊
           <button type="button" class="mb-dropdown mb-dropdown2"></button>
         </a>
           <ul id="dropdown2" class="mb-list-1 hidden" >
             <li v-for="(product,index) in productList" :key="product.parents" v-on:click="mbDropdownlist(index)">
               <a href="#" class="relative" :class="{'mb-dropdown-Bg': indexs===index}">{{product.parents}}
                 <button type="button" class="mb-dropdown" :class="'dropdowns' + index" v-if="product.son.length > 0"></button>
               </a>
               <ul :id="'dropdowns' + index" class="mb-list-1-1 hidden" v-if="product.son.length > 0">
                 <li v-for="productSon in product.son">
                   <a href="">{{productSon}}</a></li>
               </ul>
             </li>
           </ul>
         </li>
         <li><a href="">技術情報</a></li>
         <li><a href="javascript:;" class="relative" v-on:click="mbDropdown(3)">投資人專區
           <button type="button" class="mb-dropdown mb-dropdown3"></button>
         </a>
           <ul id="dropdown3" class="mb-list-1 hidden">
             <li>
               <a href="">財務資訊</a>
             </li>
             <li>
               <a href="">股東專區</a>
             </li>
             <li>
               <a href="">公司年度
               </a>
             </li>
           </ul>
         </li>
         <li><a href="">實績案例</a></li>
         <li><a href="">永續發展</a></li>
         <li><a href="">人力資源</a></li>
       </ul>
     </div>
     <!-- 手機搜尋欄 -->
     <div class="foot-search">
       <div class="border border-[#707070] rounded-lg w-[322px] h-[44px] center bg-white">
         <input type="text" placeholder="輸入關鍵字搜尋" class="w-[250px] h-[40px]">
         <button class="w-[50px] h-full border-l border-[#707070] relative">
           <img src="../../img/img/mb-search.svg" alt="搜尋" class="absolute left-[40%] bottom-[25%] inline-block">
         </button>
       </div>
       <div class="flex gap-3 mt-2 ml-3">
         <img src="../../img/img/fb.svg" alt="fb" width="45">
         <img src="../../img/img/in.svg" alt="icon" width="45">
         <img src="../../img/img/youtube.svg" alt="youtube">
       </div>
     </div>
   </div>
   <div class="text-[#235E7A] text-xs Copyright">
     <p>Copyright © 2023 廣化科技股份有限公司. All Rights Reserved.</p>
   </div>    
   </div>
 </header>`
}