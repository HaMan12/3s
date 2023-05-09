export default{
  data(){
    return{
      ContactBox:false,
    }
  },
  methods:{
    ContactUs(){
      this.ContactBox=!this.ContactBox;
    },
    closeBox(){
      this.ContactBox=false;
    },
  },
  template:`<div class="w-full h-[55px] md:fixed md:right-0 md:top-[70%] md:w-[67px] md:h-[168px] bg-[#0070C0] z-[56] md:rounded-l-md" 
  v-on:click="ContactUs()">
    <div class="center tracking-widest text-white text-xl cursor-pointer pt-3 md:flex-col" style="font-family: serif;">
      <img src="../../img/img/content.svg" alt="ContactUs" class="inline-block pr-2 md:pb-2 ContactImg">
      <p>聯</p>
      <p>絡</p>
      <p>我</p>
      <p>們</p>
    </div>
  </div>
  <div class="px-5 max-w-[459px] md:px-0 md:fixed md:top-[10%] md:right-10 z-[55] md:w-[459px] md:h-[835px] bg-[#EBEBEB] rounded-xl" v-show="ContactBox" v-cloak>
      <div class="w-full h-[183px] contact-title rounded-t-xl text-white relative">
        <div class="closeBox" v-on:click="closeBox()"></div>
        <h6>HI~您好</h6>
        <p>感謝您拜訪本網站，如果您有任何疑問，或對我們服務有任何疑問，歡迎填寫下列表單，我們的工作人員將會分析您的資料與需求，以提供您所需的答案。</p>
      </div>
      <div class="center">
        <form class="w-[389px] h-[630px] text-[#7A7A7A] border-l-8 border-[#4BB8EB] rounded-xl contact-form">
          <input type="text" placeholder="*公司名稱">
          <input type="text" placeholder="*Name">
          <input type="text" placeholder="*Phone">
          <input type="email" placeholder="*E-mail">
          <div class="flex justify-between contact-radio">
            <div class="ml-5">
              <input type="radio" id="consult" name="group1" class="mr-1 mt-5">
              <label class="text-[#7A7A7A]" for="consult">業務諮詢</label>
            </div>
            <div class="mr-5">
              <input type="radio" name="group1" id="invest" class="mr-1 mt-5">
              <label class="text-[#7A7A7A]" for="invest">投資諮詢</label>
            </div>
          </div>
          <input type="text" placeholder="*聯絡地址">
          <textarea placeholder="*諮詢內容"></textarea>
          <button type="submit" class="rounded-xl contact-submit text-xl">送出</button>
        </form>
    </div>
  </div>`,
}