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
      methods:{
        emitProduct(){
          this.$emit('emit-product' , this.productList)
        },
      },
    }
  },
  template:`<footer>
  <div>
    <img src="../../img/img/gotop.svg" alt="置頂" id="gotop" class="hidden w-[50px] fixed right-0 bottom-0 z-[999] cursor-pointer | md:w-[74px]"> 
    </div>
  <div class="bg-bgGray">
    <div class="px-3 py-3 md:pt-10 md:pb-5 md:px-16">
      <ul class="justify-between max-w-400 mx-auto hidden | xl:flex">
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">關於廣化</a>
          <ul class="footer-container">
            <li><a href="">公司簡介</a></li>
            <li><a href="">基本介紹</a></li>
            <li><a href="">經營理念</a></li>
            <li><a href="">得獎榮耀</a></li>
          </ul>
        </li>
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">最新消息</a>
          <ul class="footer-container">
            <li><a href="">活動消息</a></li>
          </ul>
        </li>
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">產品資訊</a>
          <ul class="footer-container">
            <li v-for="item in productList" :key="item.parents"><a href="">{{item.parents}}</a></li>
          </ul>
        </li>
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">技術情報</a>
          <ul class="footer-container">
            <li><a href="">技術情報</a></li>
          </ul>
        </li>
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">投資人服務</a>
          <ul class="footer-container">
            <li><a href="">財務資訊</a></li>
            <li><a href="">公司年度</a></li>
            <li><a href="">股東專區</a></li>
          </ul>
        </li>
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">人力資源</a>
          <ul class="footer-container">
            <li><a href="">人力資源</a></li>
          </ul>
        </li>
        <li class="relative"><a href="javascript:;" class="pb-2 block text-[22px] footer-containers">聯絡我們</a>
          <ul class="footer-container">
            <li><a href="">聯絡我們</a></li>
          </ul>
        </li>
      </ul>
      <div class="block max-w-400 mx-auto | md:flex md:mt-3 md:border-t md:border-footertext">
        <ul class="text-[#002060] py-2 w-full text-sm | md:w-3/5 md:py-8 md:text-footertext md:text-[19px]">
          <li class="flex">
            <img src="../../img/img/icon-home.svg" alt="home">
            <p class="center pl-5">30444 新竹縣新豐鄉康樂路一段169-2號2樓</p>
          </li>
          <ul class="block | md:pt-3 md:flex">
            <li class="flex justify-between mr-7 py-3 | md:justify-start">
              <div class="flex gap-2 pr-5 | md:pr-7">
                <img src="../../img/img/icon-tel.svg" alt="tel">
                <p class="center ">886-3-5577668</p>
              </div>
              <div class="flex gap-2">
                <img src="../../img/img/icon-fax.svg" alt="fax">
                <p class="center ">886-3-5577658</p>
              </div>
            </li>
            <li class="flex gap-2">
              <img src="../../img/img/icon-fax.svg" alt="fax" width="45">
              <p class="center">sales@sss-tech.com.tw</p>
            </li>
            <li class="center gap-3 py-2 footer-icon | md:gap-5 md:ml-3">
              <a href="">
                <img src="../../img/img/fb.svg" alt="fb-link" width="45">
              </a>
              <a href="">
                <img src="../../img/img/in.svg" alt="in-link" width="45">
              </a>
              <a href="">
                <img src="../../img/img/youtube.svg" alt="yt-link">
              </a>
            </li>
          </ul>
        </ul>
        <div class="w-full tracking-wide text-[#002060] center text-xs | md:w-2/5 md:text-[19px] md:text-footertext">
          <p>Copyright © 2023 廣化科技股份有限公司.All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>`,
// props:{
//   productData:{
//     type:Array,
//     required:true,
//   }
// }
}