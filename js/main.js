var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var music=document.getElementById("music");
var imgcbg=document.querySelectorAll(".imgcbg")[0];
var imgImg=document.querySelectorAll(".imgImg")[0];
var audio=document.querySelector("audio");
var flog=1;
music.onclick=function(){
    if(flog==1){
        imgcbg.style.display="none";
        imgImg.style.animation="none";
        audio.pause();
        flog=0;
    }else {
        imgcbg.style.display="block";
        imgImg.style.animation="music 1s infinite linear";
        audio.play();
        flog=1
    }
};