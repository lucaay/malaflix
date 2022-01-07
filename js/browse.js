function show(){
    const element = document.getElementById("search-input");
    element.classList.toggle("search-input-show");

}

function rotate1(){
    if (getWidth()>=980) {
        const element = document.getElementById("prof-arrow");
        element.classList.toggle("rotate");             
    }
}

function rotate2(){
        const element = document.getElementById("prof-arrow");
        element.classList.toggle("rotate");             
}

function show2(){
    const element = document.getElementById("drp-cont-menu");
    element.classList.toggle("show-it");    
}

function shown1(){
    const element = document.getElementById("not-main-div");
    element.classList.toggle("show");    
}
function shown3(){
    const element = document.getElementById("prof-cont");
    element.classList.toggle("show");    
}
function shown4(){
    const element = document.getElementById("browse-lk");
    element.classList.toggle("show");    
}


function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );

}





    function event1(){
        volumeOff.addEventListener('click', (event) =>{
            volumeOn.classList.toggle("show-btns");
            volumeOff.classList.toggle("show-btns");
            element3.muted = false;
        })
        volumeOn.addEventListener('click', () =>{
            volumeOn.classList.toggle("show-btns");
            volumeOff.classList.toggle("show-btns");
            element3.muted = true;
        }) 

        element1 = document.getElementById("ti");
        element1.classList.toggle("show-billboard");            
        element2 = document.getElementById("tv");
        element2.classList.toggle("show-billboard");
        if (volumeOn.classList.contains("show-btns")) {
            volumeOn.classList.toggle("show-btns");   
        }else{
            volumeOff.classList.toggle("show-btns");   
        }  

        elementX = document.getElementById("t-logo");
        elementY = document.getElementById("t-description");
        elementZ = document.getElementById("ldn");        

        setTimeout(function (){           
            elementY.style.display = "flex";
        }, 500)        
        elementX.classList.toggle("anim-logo");            
        elementY.classList.toggle("anim-d");
        elementZ.classList.toggle("anim-ldn");           

        replay.classList.toggle("show-btns");  
    }

    var replayClicked = false;
setTimeout(function a(){ 
    element1 = document.getElementById("ti");
    element1.classList.toggle("show-billboard");

    setTimeout(function (){ 
        element2 = document.getElementById("tv");
        element2.classList.toggle("show-billboard");
        element3 = document.getElementById("tvp");
        element3.play();

        var duration = 0;
        if (replayClicked==false) {
            duration = 6000;
        }else{
            duration = 0;
        }
        
        setTimeout(function logoAnim(){ 
            elementX = document.getElementById("t-logo");
            elementY = document.getElementById("t-description");
            elementZ = document.getElementById("ldn");

            elementX.classList.toggle("anim-logo");            
            elementY.classList.toggle("anim-d");
            elementZ.classList.toggle("anim-ldn");
            setTimeout(function (){           
                elementY.style.display = "none";
            }, 500)
        }, duration)

        replay = document.getElementById("replay");

        volumeOn = document.getElementById("volume-on");
        volumeOff = document.getElementById("volume-off");
        if (element3.muted == true) {
            volumeOff.classList.toggle("show-btns");
        }else{
            volumeOn.classList.toggle("show-btns");
        }        
            
        volumeOff.addEventListener('click', (event) =>{
            volumeOn.classList.toggle("show-btns");
            volumeOff.classList.toggle("show-btns");
            element3.muted = false;
        })
        volumeOn.addEventListener('click', () =>{
            volumeOn.classList.toggle("show-btns");
            volumeOff.classList.toggle("show-btns");
            element3.muted = true;
        })                
        
        element3.addEventListener('ended', event1);     
         
        var count = 0;
        replay.addEventListener('click', () =>{
            if (count<1) {
                count++;
                replay.classList.toggle("show-btns");

                elementX.classList.toggle("anim-logo");
                elementY = document.getElementById("t-description");

                elementX.classList.toggle("anim-logo");                           
                elementY.style.display = "flex";      
                replayClicked = true;
                a();                
            }            
        })                
    }, 100)          
}, 2000)



const addBtns = document.querySelectorAll('.add');
var AddClicked = [];
for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].classList.add(i);
    AddClicked[i] = false;    
}

function videoBtnAdd(btn){    
    var index = btn.className.toString().split(' ')[1];
    if (AddClicked[index] == false) {
        addBtns[index].style.backgroundColor = "white";
        addBtns[index].style.color = "black";
        AddClicked[index]=true;      
    }else{
        addBtns[index].style.backgroundColor = "transparent";
        addBtns[index].style.color = "white";
        AddClicked[index]=false;        
    }    
}  

const likeBtns = document.querySelectorAll('.like');
var LikeClicked = [];
for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].classList.add(i);
    LikeClicked[i] = false;    
}

function videoBtnLike(btn){    
    var index = btn.className.toString().split(' ')[1];
    if (LikeClicked[index] == false && DislikeClicked[index] == false) {
        //likeBtns[index].setAttribute("name", "heart");
        likeBtns[index].style.backgroundColor = "white";
        likeBtns[index].style.color = "black"
        LikeClicked[index]=true;      
    }else{
        //likeBtns[index].setAttribute("name", "heart-outline");
        likeBtns[index].style.backgroundColor = "transparent";
        likeBtns[index].style.color = "white"        
        LikeClicked[index]=false;        
    }    
} 

const dislikeBtns = document.querySelectorAll('.dislike');
var DislikeClicked = [];
for (let i = 0; i < dislikeBtns.length; i++) {
    dislikeBtns[i].classList.add(i);
    DislikeClicked[i] = false;    
}

function videoBtnDislike(btn){    
    var index = btn.className.toString().split(' ')[1];
    if (DislikeClicked[index] == false && LikeClicked[index] == false) {
        //dislikeBtns[index].setAttribute("name", "heart-dislike");
        dislikeBtns[index].style.backgroundColor = "white";
        dislikeBtns[index].style.color = "black";
        DislikeClicked[index]=true;      
    }else{
        //dislikeBtns[index].setAttribute("name", "heart-dislike-outline");
        dislikeBtns[index].style.backgroundColor = "transparent";
        dislikeBtns[index].style.color = "white";
        DislikeClicked[index]=false;        
    }    
} 



$('.swiper-slide').hover(
    function () {
        var self = this;
        hovertimer = setTimeout(function(){
            $('video', self).get(0).play();
            $('video', self).get(0).style.opacity = "1";
            $('img', self).get(0).style.opacity = "0";  
        }, 1000);
    },
    function () {
        clearTimeout(hovertimer);
        var self = this;
        $('img', self).get(0).style.opacity = "1";
        $('video', self).get(0).pause();
        $('video', self).get(0).currentTime = 0;
        $('video', self).get(0).style.opacity = "0";
    },
);

$(".malaflix-slider").hover(
    function(){
        if($(this).is(":hover") == true){

            $(this).css("z-index", "20");
        }else{
            $(this).css("z-index", "10");
        }
    }
);





var swiper = new Swiper('.swiper-container-normal', {
        freeMode:true,
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 3,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        100:{
            slidesPerView: 1,
            spaceBetween: 5,
            slidesPerGroup: 1,
        },
        300:{
            slidesPerView: 2,
            spaceBetween: 6,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 7,
            slidesPerGroup: 2,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 8,
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 9,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 10,
            slidesPerGroup: 3,
        },
        }
});


let movies = [
    //trending now
    {
        title: "How to Become A Tyrant",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYBfBWGOyAEc0kQ5SsRAfWmj7Gke91n-tk3HF2gGIB2Dh9OrkcZb7MHF2fmNA0Qhn0zzwKGYMimiWVu2WbUSNPCZVNdH-6qregsBTjVVn7xZD4cnWN6wYNCy8zaV.jpg?r=d16",
        videoUrl: "/videos/howtobecometyrant.webm",
        moreInfo: "",
        matchPercentage: "98",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Dark",
        genre2: "Docuseries",
        genre3: "War"
    },
    {   
        title: "Suits",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTzNYYA4X_oHuQgeMYobZ-gh2WIuQVjsuA1XXHj6zKQ-MRYWmDMgigPswxievTqC8nLadzuhgVdSR1yEEdOz2JH3ThACTeJppnhHjGojBw1N8ezFoGaQlCKXLSgAM_Fx9Q.jpg?r=b1f",
        videoUrl: "/videos/suits.webm",
        moreInfo: "",
        matchPercentage: "98",
        reqAge: "16+",
        seasons: "9 Seasons",
        quality: "HD",
        genre1: "Witty",
        genre2: "Dramedy",
        genre3: "Notable Soundtrack"
    },
    {   
        title: "Dark",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEl8LWx4tMJIM9Atm3F1Y49Uq6X01tnDe8gPA6d84-gQ767saz9z7Jxj9sFozuI8bcM2vlxeP9IPq3Aa7jxLlkMu8JGjizRLblNEcmD7g-Z2NeZvkvV5nWF9DmJ.jpg?r=393",
        videoUrl: "/videos/dark.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "German",
        genre2: "TV Mysteries",
        genre3: "Crime TV Shows"
    },
    {   
        title: "Gotham",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX34XXIZ8Ua7AZOTYPzj7IlspsM9aXCSy1rsc0WlumKYyU-L935jopA37pO4WQFzMtd2dDJhQziDClZk6qgWailUjAQ.jpg?r=fd2",
        videoUrl: "/videos/gotham.webm",
        moreInfo: "",
        matchPercentage: "96",
        reqAge: "16+",
        seasons: "5 Seasons",
        quality: "HD",
        genre1: "Exciting",
        genre2: "Superhero",
        genre3: "Action"
    },
    {   
        title: "Sweet Tooth",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYoxwEkZ2lXJa00_Vr9gjyWU8XFSPJwHTVA3I2jQoRiJfY3GoAXRY0VV-oZI_tfrJd-G-faYe1B0V1uZWrfZbFEsXAIxcZ1kbObZX2jY3xsshLz_pmlyMl1kIv-q.jpg?r=71a",
        videoUrl: "/videos/sweettooth.webm",
        moreInfo: "",
        matchPercentage: "96",
        reqAge: "13+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Quirky",
        genre2: "Heartfelt",
        genre3: "Fantasy TV"
    },
    {   
        title: "Heist",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqtSIu9nKWtM7nhhYNHfkWHIB4g5hReIlDuAFEq6edrmlFH_20rzJxuGatFi8SbVxofVxj042Cpl3Id4gR8GS-fXc3ZR5rE9tO4b6oLjv--FDcxtBLT2cGLNbWNqjducUWQuz_qy1orKxbtttxzgEtbPHo8feO_4u1KQsVEOW0hq3qiRqIlEBs.jpg?r=7e3",
        videoUrl: "/videos/heist.webm",
        moreInfo: "",
        matchPercentage: "New ?",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Riveting",
        genre2: "Investigative",
        genre3: "Suspenseful"
    },
    {   
        title: "Major Grom Plague Doctor",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfdsgvAJvxuE76MOhqRIa79pH33fm0HIHbjqf6mqInrOu5eYB9AYe7ZLHYka5MBZUXOSj-pnyhCp83tNbbdmqI-xztsX4OGlmxgDN36rIB_DR8CQUSWoEd_alsrAZfGLPiTd0zZ_AWFn6KqIw5g9YIEXCPuiA7sunOe1Gk7wrMMrt7fVgEV4cbM.jpg?r=872",
        videoUrl: "/videos/majorgrom.webm",
        moreInfo: "",
        matchPercentage: "92",
        reqAge: "13+",
        seasons: "2h 18m",
        quality: "HD",
        genre1: "Suspenseful",
        genre2: "Exciting",
        genre3: "Superhero"
    },
    {   
        title: "Birds of Prey",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQqflxkVLZNHcapiA_XHJ-wsEx3U_HHYJOoQ3w5jLmHNN3QbIMdaKhfU6vtvxHFy97KgG8V0vroAeV03RA8noQ_ZvbjajG0PXM98wwDsO4cvqsbvPcToBJ52L5xk0h1rCBPjMjIOmqqJR9aiS5-aMOJofCY.jpg?r=232",
        videoUrl: "/videos/birdsofprey.webm",
        moreInfo: "",
        matchPercentage: "New ?",
        reqAge: "16+",
        seasons: "1h 48m",
        quality: "HD",
        genre1: "Explosive",
        genre2: "Slick",
        genre3: "Offbeat"
    },
    {   
        title: "Snowpiercer",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUWo_UpJA3w7lRpb9VYKf3duMhqybKlX7Ok39xqQ2v0wljCNFmo4qx3pwFKsNook1ZE3UnbsvhAp9yXeT5I5Pbj8qDYAWQddT7-Tq-md8E-LqjDth_wlACIRGuVG.jpg?r=77c",
        videoUrl: "/videos/snowpiercer.webm",
        moreInfo: "",
        matchPercentage: "94",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Dystopian",
        genre2: "Intimate",
        genre3: "Dark"
    },
    {   
        title: "The Mire '97",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa15Rx8o_FDBzbIxxbOq_dDAg0GClvy1-Ru_P7tjsSHuMXgYznj2OwCzRO8ep7Ps93n9Ap4lT7biRWUVoHfLcqPJyGlgRFGPoZk5bffkSj9jiVH307E2IDs4GucAu4lIZHu7V8OTdKx8KQu2ct7JIZEKntU_mA.jpg?r=a2e",
        videoUrl: "/videos/themire.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Ominous",
        genre2: "Slow Burn",
        genre3: "Dark"
    },
    {   
        title: "Orphan Black",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYirMI7kRR5VIMHcMrSfdMrToKkmxeuZyyX1z8kbPhm3KdFxOXPB-BqhYyIvnswx-BljYSmYFj6vfx-6CcPxAvsP3LE.jpg?r=d74",
        videoUrl: "/videos/orphanblack.webm",
        moreInfo: "",
        matchPercentage: "97",
        reqAge: "16+",
        seasons: "5 Seasons",
        quality: "HD",
        genre1: "Mind-Bending",
        genre2: "Suspenseful",
        genre3: "Exciting"
    },
    //suspenseful tv dramas
    {   
        title: "New Amsterdam",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX50fxBVIPOz9Ys6M2U2v3wx5jCkoDF2jl9UmUjBFDTQLmhT2FrNi37Jf0af-z89Qt7X8BYkVPqdz7WO9x11nWhvA5Q.jpg?r=f04",
        videoUrl: "/videos/newamsterdam.webm",
        moreInfo: "",
        matchPercentage: "96",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Hertfelt",
        genre2: "Emotional",
        genre3: "Feel-Good"
    },
    {   
        title: "13 Reasons Why",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbFbOV-eO2SOb4rbndVWrG0zDiNeeinhg5NKtloMTqsd27iDNYazOWRV83jaZfsThHae6-VDHB6ULrklSTHvTrxMdWViTakKni1RrlrixbGhFgo1DpeZecnHqosD.jpg?r=753",
        videoUrl: "/videos/13reasonswhy.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "4 Seasons",
        quality: "HD",
        genre1: "Dark",
        genre2: "Suspenseful",
        genre3: "Emotional"
    },
    {   
        title: "The Mist",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUFdoCyfizITVGcuexohbWPRcAmtx5B8HfHSK4aq1K2EcfVlj55FLPN7lICSKJv6RnGZhjAFSE4dh55IvGGo4cQMthem8j6pvxvOMwtWfg6xPBOx37TAcFhVttRz.jpg?r=273",
        videoUrl: "/videos/themist.webm",
        moreInfo: "",
        matchPercentage: "94",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Ominous",
        genre2: "Scary",
        genre3: "Dark"
    },
    {   
        title: "Virgin River",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWWZg4nCZTF3ba5Pb5fpzPchTZaTfrgBdgk_g4yml1crG9W2yLZMQ_BmWJW2oeReI2Z-Jo3MvMxKALh9k1VORhCmB9b0dkGMTRr1EPxJzpWz1Q2qThzyzFtgPWIQk1MWQg0oLiud6KZA_hXtlRoxDTDxUZVj2SRVssznt5jtDxItmIlEH7HkK2VPoOugmwoU4TOVjUtqm_VW4KLR8PNhVp8K.jpg?r=e13",
        videoUrl: "/videos/virginriver.webm",
        moreInfo: "",
        matchPercentage: "93",
        reqAge: "13+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Intimate",
        genre2: "Heartfelt",
        genre3: "Emotional"
    },
    {   
        title: "You",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfx_fq3Ln-KD13NpiIy8hYSj2Q_tfYb_mOrG9FE7g7Y9ROxJVRvzKUKkDtrLBRdw-48Eek_auwvfn1oScUUVPkHYzD8OwozTC67eRMb_OwCWxLD6P_namx30bdl1.jpg?r=148",
        videoUrl: "/videos/you.webm",
        moreInfo: "",
        matchPercentage: "91",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Slick",
        genre2: "Psychological",
        genre3: "Dark"
    },
    {   
        title: "Bad Blood",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfbO-SEYCvTmBztTD5o--CzhKjMxrzxhUrLB6a574DzwCoyWqYReTCxzFdgDZwZG84M9IqBucRw90mKnI1zL78cyG3t35MnLwdVWe3QpFovR0KhLCyzaw1xbxOzU.jpg?r=c13",
        videoUrl: "/videos/badblood.webm",
        moreInfo: "",
        matchPercentage: "89",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Rousing",
        genre2: "Gritty",
        genre3: "Suspenseful"
    },
    {   
        title: "Bridgerton",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW2B1QlVpFWWdNbWyRCyPYnwsA-PhukGdScz_T8M2v11vfsl6xzWGEm5xVCKGncCTkjMyT7I9msC2KikWUdp87elTdCCXwA5nXuaqhrnxD9GMPdiinbTejKfVMUB.jpg?r=b24",
        videoUrl: "/videos/bridgerton.webm",
        moreInfo: "",
        matchPercentage: "88",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Swoonworthy",
        genre2: "Witty",
        genre3: "Emotional"
    },
    {   
        title: "Cursed",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVVLstAwNF8YA7w1_GWjK8kHDtEUfFeoAyLrxF_lLfefRALJ2CR7B7XLSAtD3-J1qrIpOG4nKnPVMrN2zqYiB94jpA-c6uqZF44cCGluulOhl4p5Eji4jPtcMUDG.jpg?r=5b8",
        videoUrl: "/videos/cursed.webm",
        moreInfo: "",
        matchPercentage: "84",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Violent",
        genre2: "Gritty",
        genre3: "Fantasy TV"
    },
    {   
        title: "Zoo",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQamPc4GhymuHTdC9VTeAiGmMk2KaziSeNiuZscHEgINrH8qMq2co_NWfFplcHk_Ityr6w9TjmvWKucSak8fAle3bl0.jpg?r=0c0",
        videoUrl: "/videos/zoo.webm",
        moreInfo: "",
        matchPercentage: "80",
        reqAge: "13+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Suspenseful",
        genre2: "Exciting",
        genre3: "Si-Fi TV"
    },
    {   
        title: "The Shannara Chronicles",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQNkJyshMJAsHGqUDS8IDJ2X2O0QdJeDUU-xYQXw26y2kAVwAB19aReH9cDK7kl4nYMLlrh15ZTjwAxVo56mmsL8uNQ.jpg?r=d7e",
        videoUrl: "/videos/shannara.webm",
        moreInfo: "",
        matchPercentage: "71",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Fantasy TV",
        genre2: "Action",
        genre3: "Drama"
    },
    {   
        title: "The Liberator",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAVlnq2YFAPFdCvz7Lt_6MBjhUhRc_bfOjoBCpkqi2QaQMIPqKOVLdk_eGEXY9qowt38xsNGdfntQ0T635knImDNhmp5a7coHQmAH5r4XWsxeAJ26ZYDHW6C6ym.jpg?r=c73",
        videoUrl: "/videos/theliberator.webm",
        moreInfo: "",
        matchPercentage: "?",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Rousing",
        genre2: "Gritty",
        genre3: "Inspiring"
    },
    
    //Action & adventures
    {   
        title: "Iron Fist",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRuEvLJ5xJbDnm1tq2KytX9UKWPD0oYzIIvvMoIW3Uwrszl55rnxcmo2UxgSFGXQyo0TaY6SEtgILBXE1P1A_H1cJbQ9UYR4BfWX6VFlqZR7RHmRxoBMYsjEkuHR.jpg?r=16d",
        videoUrl: "/videos/ironfist.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Suspenseful",
        genre2: "Exciting",
        genre3: "Superhero"
    },
    {   
        title: "Jessica Jones",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQKfTrcj6KBylrcfHm9tvMnn1ma7mWsV9Ly9U_FdYla0BSK51YntqxWltzaHUJuj7QHrk8RkvSA782oEstkTOExmmiZdmIEnB4lJQ_g5OnO4oeGre-6Bt61fG_7F.jpg?r=5c6",
        videoUrl: "/videos/jessicajones.webm",
        moreInfo: "",
        matchPercentage: "93",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Gritty",
        genre2: "Dark",
        genre3: "Exciting"
    },
    {   
        title: "Fauda",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcnHkrAA_nC278BheLBj-ScikRy4NGopUN2Ua3UCOwX5eZ51A_gozVHkGMmdBODizxi0g9Q7rln10XMfBd0373GtOnI4SbYjSpFDTVfuhJ8ZVPTmoKgmbH1lKlwf.jpg?r=b10",
        videoUrl: "/videos/fauda.webm",
        moreInfo: "",
        matchPercentage: "93",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Gritty",
        genre2: "Action",
        genre3: "Thriller"
    },
    {   
        title: "Marco Polo",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSNv8xVJOMO9NZbSN65GQZ5MOCSzU8Bm_T0iFq6fxDV-DYlHNpITtiRXhWETMBsSnQiytgfKBzFcaaoGdlLWkohowXGIasAYpq5XSh9w5rJB7T1NzBnlNctXN3nl.jpg?r=459",
        videoUrl: "/videos/marcopolo.webm",
        moreInfo: "",
        matchPercentage: "91",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Rousing",
        genre2: "Exciting",
        genre3: "Epic"
    },
    {   
        title: "Alice in Borderland",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVYSZUXE4N5B9JGB0i2YhJvDka9p7Xszpi2zBuuZqRyxe7m9PzE98gakcoMqL2rlI_Po_1LIMngNVz3-IGzHPa5DmoAxhWCqnhzADyoOitMaexNVAUGx7lyZnlX8.jpg?r=e52",
        videoUrl: "/videos/aliceinborderland.webm",
        moreInfo: "",
        matchPercentage: "91",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Dystopian",
        genre2: "Dark",
        genre3: "Suspenseful"
    },
    {   
        title: "Cobra Kai",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRPnYREuSwXXq5mbVbwSb0ma_OOd6BHJheRorgdoi4d3UJkgvSCAMPStaR6D38haMjjlbKFjBUAMtxVFqsj7d8l67qxB5Tp3AhkxGxclzOUqV5V5WMql2NJwM_kd.jpg?r=826",
        videoUrl: "/videos/cobrakai.webm",
        moreInfo: "",
        matchPercentage: "90",
        reqAge: "13+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Rousing",
        genre2: "Heartfelt",
        genre3: "Exciting"
    },
    {   
        title: "El Chapo",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf7jab6nvZr_mdIQX6BrqpwwwcQJi4NnT9bKvvBtL3mN-BTYAGJHep_5cwHtUJqpY4IDXN_1K089fWmtLKkexbQ2s-6VArkH09HPHOYGIGafRXlPYYszCKvTF1pK.jpg?r=bca",
        videoUrl: "/videos/elchapo.webm",
        moreInfo: "",
        matchPercentage: "89",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Action",
        genre2: "Thriller",
        genre3: "Drama"
    },
    {   
        title: "Z Nation",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ7kz6_woPZYGTMm58scfK3hheolwW3qvJUZdhPWgVvaWlPqcC_SdztvATwTphr8VIuwdiaFk927JFJy0qEjka9wQ7Q.jpg?r=980",
        videoUrl: "/videos/znation.webm",
        moreInfo: "",
        matchPercentage: "89",
        reqAge: "16+",
        seasons: "5 Seasons",
        quality: "HD",
        genre1: "Gruesome",
        genre2: "Gory",
        genre3: "Offbeat"
    },
    {   
        title: "Tribes of Europa",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfeRRKWMp1R9djKz7nDLuM20et2MNsYQKwV6dDP2hFOq9HVgjmf9eCrFcRLCB0aWPmFbVtbL9EsbK0AaunrhBSys5k0ubEMY6EPHJwLXSB-X3U7UXrHmbikM8GLf.jpg?r=357",
        videoUrl: "/videos/tribeseurope.webm",
        moreInfo: "",
        matchPercentage: "86",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Dystopian",
        genre2: "Dark",
        genre3: "Exciting"
    },
    {   
        title: "Jupiter's Legacy",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTIJCHrXbugnPIjYUNxvApHj-neJ0CaNL0RPdi0ebbKtX49YStnlNrBTIVwkeejxlbm4_2jg6OjYCBgYFEsUziBehO1KbHKjMfx9jCnPPpKCvaOQ9qao_g5aF1Vz.jpg?r=f15",
        videoUrl: "/videos/jupiterslegacy.webm",
        moreInfo: "",
        matchPercentage: "84",
        reqAge: "16+",
        seasons: "1 Volume",
        quality: "HD",
        genre1: "Dark",
        genre2: "Exciting",
        genre3: "Superhero"
    },
    {   
        title: "Zoo",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQamPc4GhymuHTdC9VTeAiGmMk2KaziSeNiuZscHEgINrH8qMq2co_NWfFplcHk_Ityr6w9TjmvWKucSak8fAle3bl0.jpg?r=0c0",
        videoUrl: "/videos/zoo.webm",
        moreInfo: "",
        matchPercentage: "80",
        reqAge: "13+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Suspenseful",
        genre2: "Exciting",
        genre3: "Sci-Fi TV"
    },
    //TV HORROR
    {   
        title: "The Haunting of Hill House",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT-ObSX17ha3dta774D0lbUwLReJLCDPER9-ogpffzTdJOjVq-ds6t4TojBe5WKDZtDQV06rdgr9FDnP4I6BZS1IPV1kmDazoK9W7TLVY_UTqlc9HTL9ZxglXDb3.jpg?r=4cd",
        videoUrl: "/videos/thehauntingofhillhouse.webm",
        moreInfo: "",
        matchPercentage: "90",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Chilling",
        genre2: "Omnious",
        genre3: "Psychological"
    },
    {   
        title: "Ratched",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfi3b8N7v-1Xn6SmbNR12JuNwitu57yxZTSZ2X-tsGk8zbDlO0dPp7gclh-ysTiuxUnFiwJGIkc5rS1LjFvlGtrkmCmtzkmwRyUg0KcAN9KgGjTVVVfMABsqBHtC.jpg?r=575",
        videoUrl: "/videos/ratched.webm",
        moreInfo: "",
        matchPercentage: "85",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Omnious",
        genre2: "Psychological",
        genre3: "Dark"
    },
    {   
        title: "The Order",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXhOWfUmG2CyXsIX27t6FlUQB5lq-g0LE-dyYUuYCE1AqoHfK_g_4U5S3eHZ-5OfCHXwXNU8odRnieLVtQUkR0pkwgR7HKR7LEWvX1OeMByT_L_Mm2gsIavAxiie.jpg?r=283",
        videoUrl: "/videos/theorder.webm",
        moreInfo: "",
        matchPercentage: "81",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Dark",
        genre2: "Suspenseful",
        genre3: "Horror"
    },
    {   
        title: "Hemlock Grove",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcez2P_VfQkR20Kc-2ew8rfLuM792Ee8YENXoH3Otf-8xhqIp4MNf3VCgX5UJKVvWtdLc_j7U-eEbH-bzsHojEC57MIq9plXuKDwWetpcjEpS0RSLrQ9dvO5rP0F.jpg?r=714",
        videoUrl: "/videos/hemlockgrove.webm",
        moreInfo: "",
        matchPercentage: "78",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Gory",
        genre2: "Chilling",
        genre3: "Omnious"
    },
    {   
        title: "Sweet Home",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTHqJjCF4fbQAaN_e8V6NNdFbJ7s83Z9PbGNsWxioTuSfKlSE6tkmm-nzEWKVU3ADR_HD4R_ce76N0w-xyK3iBm17VfqgvPEHjjdh9QaTfvKyboucx_rEOU-hS5j.jpg?r=fd7",
        videoUrl: "/videos/sweethome.webm",
        moreInfo: "",
        matchPercentage: "67",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Scary",
        genre2: "Dark",
        genre3: "Suspenseful"
    },
    {   
        title: "Ares",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcW-w1Vi6GyHt5EnkcM58EwHq5Z3vchODRBOuK2e_fpHsttwStlLpMcSWnta_EaxWJ0PKHhz1AiX7Vwu8WlJ-kUOgSA0GXHRU0O3GiqLIsS4ol8zIU3N91UnSora.jpg?r=ac2",
        videoUrl: "/videos/ares.webm",
        moreInfo: "",
        matchPercentage: "?",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Gruesome",
        genre2: "Gory",
        genre3: "Dark"
    },
    {   
        title: "Nightflyers",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZdm34sKQjssYirU6UU_tmpxNO-uUyhNxe331iGTUxi8Fk18kFpuxBuRFG6yI3gQueORZ6z60jaoQndxGmE3VrZ8PZsa9AuNN_qhIPXvXe4EaV0TZfpZ55JAXOWa.jpg?r=64f",
        videoUrl: "/videos/nightflyers.webm",
        moreInfo: "",
        matchPercentage: "?",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Scary",
        genre2: "Dark",
        genre3: "Suspenseful"
    },
    {   
        title: "Army of the Dead",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfzd26G7qf5-W1Rwz616Mgs02EYyV0g9mEy1IbbirXwTk6jC83_UVRpT1J8qHVH7_EJpunHRktOgxq9rRX3OY6yrSM4cguGcAy0WDo5IB6GJPSOpjKji_7G23P3m.jpg?r=880",
        videoUrl: "/videos/armyofthedead.webm",
        moreInfo: "",
        matchPercentage: "89",
        reqAge: "16+",
        seasons: "2h 28m",
        quality: "HD",
        genre1: "Gory",
        genre2: "Violent",
        genre3: "Irreverent"
    },
    {   
        title: "Brightburn",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXj8Ed2SGYgNQ887e7rJWI345V0zGUOSKDDT4CRh_yRKCslLsDXKXBBt-AP_DHwP0KSqBSNZKd3yEgZ9FNDytkkB_JQ.jpg?r=484",
        videoUrl: "/videos/brightburn.webm",
        moreInfo: "/videos/brightburn.webm",
        matchPercentage: "85",
        reqAge: "16+",
        seasons: "1h 30m",
        quality: "HD",
        genre1: "Gruesome",
        genre2: "Gory",
        genre3: "Suspenseful"
    },
    {   
        title: "The Conjuring",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABffNTVimB9s4faS2cqIKG8e9tHrcy5y7S-x6QQBcMWXAO5sPhlA9-fzRCJGJFfp1iVE0lCZc87LCyM-KZ-fPWCigYts.jpg?r=fbf",
        videoUrl: "/videos/theconjuring.webm",
        moreInfo: "",
        matchPercentage: "85",
        reqAge: "16+",
        seasons: "1h 51m",
        quality: "HD",
        genre1: "Chilling",
        genre2: "Scary",
        genre3: "Suspenseful"
    },
    {   
        title: "Countdown",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ4YCVccevUvi0qjPwx6RggzJXVVCIi6bvZgRcyNh_fVhA78OYfLXCnYi141dSF46xmWRJTsAPyp-G3_xM3zM8mKLSk.jpg?r=f91",
        videoUrl: "/videos/countdown.webm",
        moreInfo: "",
        matchPercentage: "84",
        reqAge: "13+",
        seasons: "1h 30m",
        quality: "HD",
        genre1: "Scary",
        genre2: "Suspenseful",
        genre3: "Supernatural Horror"
    },

    //bingeworthy crime tv shows
    {   
        title: "Designated Survivor",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfNs1pQ39qG0r4bgC8TF0JLxhLtEZmSdpxXvSvcSC4H4x-BZVqZoppxf-OmJefaiCyuOcJFUqnsLkZkLa4h_PkY7ExOngWgjV6HlUCrL2b5LWIWpYkNsQEwX3xK6.jpg?r=236",
        videoUrl: "/videos/designatedsurvivor.webm",
        moreInfo: "",
        matchPercentage: "98",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Slick",
        genre2: "Suspenseful",
        genre3: "Exciting"
    },
    {   
        title: "Narcos",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcdvMmYPKzHBs4JQ1Whr0kXhDp3KRcJ0ctdZcWtA0w8nfksCn1F82aQfkOJoIUlIx3FYaFQiCgd_0tA6prZ2dtQc0naiZx_p_BwIH38btLmsL3X3tjKfBJUTEXka.jpg?r=cb4",
        videoUrl: "/videos/narcos.webm",
        moreInfo: "",
        matchPercentage: "98",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Gritty",
        genre2: "Dark",
        genre3: "Suspenseful"
    },
    {   
        title: "How to get away with murder",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSVJRzb0rg2S5usQsg-KYGWZaAUDgkfgW-GspzWwyEVI3002-bwYE3UivK0XA7eaH04Wwp2xNEQ1k6FxLCbhWioKRMU.jpg?r=7dd",
        videoUrl: "/videos/howtogetawaywithmurder.webm",
        moreInfo: "",
        matchPercentage: "97",
        reqAge: "13+",
        seasons: "6 Seasons",
        quality: "HD",
        genre1: "Slow Burn",
        genre2: "Suspenseful",
        genre3: "Mystery"
    },
    {   
        title: "Elite",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXV5Dg3DKxELEPjTBgYRGDOw5x1Og3sj4UrWvRCL060lcZG05TgdkaKl9ahqusVCAgmmrLcE75VrrvzB34E9TYWWRnTUmnP36HCY2Fu5m-E4sx8P06aKnXhdnGaA.jpg?r=e6c",
        videoUrl: "/videos/elite.webm",
        moreInfo: "",
        matchPercentage: "96",
        reqAge: "16+",
        seasons: "4 Seasons",
        quality: "HD",
        genre1: "Soapy",
        genre2: "Slow Burn",
        genre3: "Suspenseful"
    },
    {   
        title: "Elize Matsunaga Once Upon A Crime",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcXbGm57xhKfWH0hYtoFcCV41ckuSJNuPFRtnB9Qhy-Wd3X_ePBLKl1hMB1ejcNBG7H5WxTYWXA00JdtxnVN1AqTnAIWzTuQA3c8GnDsVrViQg_lYHE6upNIKnz-.jpg?r=d79",
        videoUrl: "/videos/alizematsunaga.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "Limited Series",
        quality: "HD",
        genre1: "Riveting",
        genre2: "Provocative",
        genre3: "Investigative"
    },
    {   
        title: "Better Call Souls",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbMZqYnqp2r5s5L1ykd9DhvOxSx0JqZt9xDfBokDAojHc6KWR7pkvmEJZIVRePraD3_KWr2usQ0NwzQhIXrErWJh2GQ.jpg?r=62a",
        videoUrl: "/videos/bettercallsoul.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "5 Seasons",
        quality: "HD",
        genre1: "Offbeat",
        genre2: "Gritty",
        genre3: "Drama"
    },
    {   
        title: "Unbelievable",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6pG9F-73eKOrUt83VSoJCxL1m3td3M--lKgBZNDCJtq2a2g2eLzdPkBGEhak4nnqecI_SGTrtJT4s5ejdvyKguVA7ivia2PgU8D6vjX8paIbJFIq8-1JSs_gO8.jpg?r=808",
        videoUrl: "/videos/unbelievable.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "Limited Series",
        quality: "HD",
        genre1: "Emotional",
        genre2: "True Crime",
        genre3: "Drama"
    },
    {   
        title: "The Alienist",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABedOce-hc4uzveiM4RUH7RsOnF2f4TIjMqogJY5buMsbN3qgOruX_u_gv_YZHmGf0PHTVBtxy3T1Z6PXCDGIoVHRWpC6w7TD2k_0M8s8XTi5ooyRAfS0_Sy__kay.jpg?r=cdb",
        videoUrl: "/videos/thealienist.webm",
        moreInfo: "",
        matchPercentage: "95",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Slow Burn",
        genre2: "Psychological",
        genre3: "Dark"
    },
    {   
        title: "Marcella",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcwyg9WEjiqUQTgY0f-uDQ6tG7Ve69BUeij78xzUyg3AZneRm5UwoPjqpUqwg6elsM-cT_AFynk1H_1SkhTL6fA12xGygJnV44oRzR5xpMZjlJSw9p0FdJ90iaMh.jpg?r=5ed",
        videoUrl: "/videos/marcella.webm",
        moreInfo: "",
        matchPercentage: "93",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Slow Burn",
        genre2: "Dark",
        genre3: "Thriller"
    },
    {   
        title: "Bordertown",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbrnfR6fvRRG8bGYQrKVvlVcBTmWeM3PbqIN8i_WnJecK-J7zeYjJLL_ORf0ASH8lQEVPk8cfpvhdaZlF5Z5rP4XJFLmJYqhHGYbUJhZIbsLpYq4OTvNzswyg2C8.jpg?r=c4c",
        videoUrl: "/videos/bordertown.webm",
        moreInfo: "",
        matchPercentage: "93",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Violent",
        genre2: "Dark",
        genre3: "suspenseful"
    },
    {   
        title: "Trapped",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYGdnF0eSMhwaK5sn03ZgyI8pTanTkXwyGy3rPxq2INcZ416lYy4UR2EijLYPalPdSzkLj7O3Lqwr_RhCI2WoshgrTs.jpg?r=0d4",
        videoUrl: "/videos/trapped.webm",
        moreInfo: "",
        matchPercentage: "92",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Slow Burn",
        genre2: "Suspenseful",
        genre3: "Nordic Noir"
    },

];
const movieImagesSelector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide img');
const movieVideosSelector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide video');
const movieMatchSelector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .match-percent');
const movieAgeSelector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .age');
const movieSeasonsSelector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .seasons');
const movieQualitySelector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .quality');
const movieGenre1Selector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .genre1');
const movieGenre2Selector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .genre2');
const movieGenre3Selector = document.querySelectorAll('.swiper-container-normal .swiper-wrapper .swiper-slide .genre3');


function EachSlideNormal(){    
    for (let i = 0; i < movieImagesSelector.length; i++) {
        movieImagesSelector[i].src = movies[i].imageUrl;
        movieVideosSelector[i].src = movies[i].videoUrl;
        movieMatchSelector[i].innerHTML = movies[i].matchPercentage;
        movieAgeSelector[i].innerHTML = movies[i].reqAge;
        movieSeasonsSelector[i].innerHTML = movies[i].seasons;
        movieQualitySelector[i].innerHTML = movies[i].quality;
        movieGenre1Selector[i].innerHTML = movies[i].genre1;
        movieGenre2Selector[i].innerHTML = movies[i].genre2;
        movieGenre3Selector[i].innerHTML = movies[i].genre3;
    }
};
EachSlideNormal();

//SPECIAL MOVIES ONLY ON NETFLIX
var swiper = new Swiper('.swiper-container-special', {
        freeMode:true,
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 3,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        100:{
            slidesPerView: 1,
            spaceBetween: 5,
            slidesPerGroup: 1,
        },
        300:{
            slidesPerView: 2,
            spaceBetween: 6,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 7,
            slidesPerGroup: 2,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 8,
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 9,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 10,
            slidesPerGroup: 3,
        },
        }
});

let moviesSpecial = [
    //Only on Malaflix
    {
        title: "Mindhunter",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABb9uh3SZVgXlGttxqqDI33n8EK-bS9b9iK43oti9gmIw9SQyHk_5PTGKdszxGDowvMiCZESVPaKm9P84VQr4b-byX7qAGoGV99ZokmkVxBEjvVp4wHilJkkympNvXQcD9SM8-N6Zr1ImtiYSZnEj8HgScrFSZHGYzdB6tHbhPFYDfjvmSlZ49Qj_QHPN6acb6OCdKZEC.jpg?r=15e",
        videoUrl: "/videos/nobars/mindhunter-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUyHp5bSzxxXfSYAt4cT7hfEvXOXuPc5sVyF38hpsPWOaYmD2L2LkbwEfWPdPK_0t-cnwHyhdbIZ6I3MWGe5_DNgCIOWa61atWkb9ytkb2JF5Gfj8seSC0GChwiY.jpg?r=4aa",
        altVideo: "/videos/mindhunter.webm",
        moreInfo: "",
        matchPercentage: "?",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "TV Mysteries",
        genre2: "Crime TV Shows",
        genre3: "Based on Books"
    },
    {
        title: "Lost in Space",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABf5266kWhWYaE2CRquiYdUn1l88lZq_udScaQBM89BgWcfxE_dGZLkKJm5gnAtdzdJYINGCmG1hDr_8D-UaJfuq9_fwkpPVnyKUC3Vz24_bMo4qSd6TiMeOz577026olSS4nci59nedtqLDjxaepzMtBh0QDdehVSC1t06HSZqooCvaB-pvb1IPq1L5Ca3tU999UcRt3.jpg?r=0a9",
        videoUrl: "/videos/nobars/lostinspace-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQLrtT0iw6ASBlIvkj13L7JMmwlxhDlpq16mRiWjy6yTPlznl-9yjQU8LXT3mDKoc8lReIqgDZ1zmMVsepRKw9bs7NlEvoC6qBQh6zWJAjkTENWtaYk0HBYkEq4n.jpg?r=dab",
        altVideo: "/videos/lostinspace.webm",
        moreInfo: "",
        matchPercentage: "?",
        reqAge: "7+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "TV Dramas",
        genre2: "US TV Shows",
        genre3: "Watch Together"        
    },
    {
        title: "Val Helsing",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABZ76WCX24rwagWnM7QWtMOyIXpz-hK6DDWLKrCGagGrysBBuFBgq6Og6lPqfOEprJPp1SbjpGxu6fSHLKptxdccc9OAao_DjQmuOiDXXC0jIyiUto-Ocrm7nBHrKWdZ5inxdojHRFF_Rki1-U1P6v1bC-tfo1puhP6XKMzId5vLkk34_M7BXURrEKWhnH2kcwpHb-AQiwzEncjq9WPVXSu6anlvqAlDNLupB_DGfCQ.jpg?r=427",
        videoUrl: "/videos/nobars/vanhelsing-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfO3sLTqwNaKaEsD-Fd_kBiOEfp9YzcORqVz_MYzmDbOwDcJSOR247oW04-t3fl3Md_W2u5PwpGYkzvxd_U3scVFRr548l6fnVszkfRFU3kEjeeAgeEgZJ5dw0RYaINuksAbHzMugUkawsrEERCaRKez0t3K3g.jpg?r=2d4",
        altVideo: "/videos/vanhelsing.webm",
        moreInfo: "",
        matchPercentage: "99",
        reqAge: "16+",
        seasons: "5 Seasons",
        quality: "HD",
        genre1: "Violent",
        genre2: "Dark",
        genre3: "Exciting"        
    },
    {
        title: "The Spy",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABZ44f5V4L062LSPH0ZC4xU6xh_gCObuwAmwCGDUNZmNMRn7BTudiCOuzW4tPyJVwzvxQFHx6Ly7RxdZlxQgWaW6C7R5RjSztc9JvASeHRCdhpX83NDnrF8SFnR7tKm-v-phf0deqll0Nvvune-GNjSdKJiMgAlg8lQqjaYrtw0cqirwlqPDbQn9i3eNlrudyUt27Tu2O.jpg?r=552",
        videoUrl: "/videos/nobars/thespy-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUnfLzPOGbZrq4aLNorwCfhbVqWLz2Ma7_-FCypoKpCjfkLJvsJPioW2cQtsIno5vWCp382-DmC7VVT51ORxaNPDkvo_Hkm_l_lub3VUhXoGJmewqhL18fzH6bD4.jpg?r=001",
        altVideo: "/videos/thespy.webm",
        moreInfo: "",
        matchPercentage: "65",
        reqAge: "16+",
        seasons: "Limited Series",
        quality: "HD",
        genre1: "French",
        genre2: "Political TV Shows",
        genre3: "Based on Books"        
    },
    {
        title: "Black Summer",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABQxzcDg2VSDawASJX1yR_Snti9d54bMRN7tTjcVdxaUT6BcqpArFVSd7B420foNd3WCwoWcQO8bukxnCQXxsVT7S4N8qSm65XgSAqveaZrraRocOUhG_pEQaW7MoZWXTXa8XoV4ZMMf0HJzdlXFxNiJTq_qGn4Mf-ZKVOSN2q9Wm3ILLO43fno_LMbItAFfa_bY8Vt4P.jpg?r=d94",
        videoUrl: "/videos/nobars/blacksummer-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRDHjSqiajwGVof6nQj1PCcMCvWAoHSTYnga9GOaCMZ9Vesd5K-6H5ldR7EGIeYgLYUy7AMkqXf7JCyyi1tE3R67kUpAFXXUep1W31U8Eqwo3bZCiVWZzvPK8Gm3.jpg?r=a0e",
        altVideo: "/videos/blacksummer.webm",
        moreInfo: "",
        matchPercentage: "98",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Gritty",
        genre2: "Dystopian",
        genre3: "Dark"        
    },
    {
        title: "Heist",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABem1ZUG612XlSSPt6aloYGj09O1if0YxX1D1hevnszxvK0qzhzc1GbbSrQxr6byKD0-Qyl4v7hTQEQl4Nina-JEL-pqiLHe1Z5tCkqd0W-GLoNEicD43jhB98FWPJV3jnlJF7OkYaHc9g-jOrgvRfYNE1uc1qsFVT1V4JgER6DfhIXpMKVRy4f-1d92eSTvPXY6qXxrXMfDNzTkdKyVApG2esdQhWE7Iu4HVpGYdA7LU0lgpYBqMGWuK-CSA1V100nE.jpg?r=e95",
        videoUrl: "/videos/nobars/heist-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcYzFgmza0cWZYG3JfcdmN9MViktr0RB2GPwAtNAMzT_XTpDbwcrgRcgZgtRuqmYhJ9ccD2GsEa2Bf2G8XEgFLn4MmDTfuftgTRfwC_8A7FUTX_Db1BlZsjWFw2i2ZB7sG_AwmIcLAWVR--lOMSz1BTSUoJDgxkCKPk5sq-c82GBkiwRh3kXI1o.jpg?r=b8a",
        altVideo: "/videos/heist.webm",
        moreInfo: "",
        matchPercentage: "New ?",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Riveting",
        genre2: "Investigative",
        genre3: "Suspenseful"        
    },
    {
        title: "How to become a Tyrant",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABcKTk2v2vR_90dwNrwOoPtg61U4KQFL1WWsROcQzOilGZL3fW4mlFGsrmCtwU_lKhCL7kX2ckiX1TKWgAMdfKM-YBBMOn7ImAxzZpRNUG8yQn1kBR1zWyrPzQKaVdKKF7Kk-IW8gTsFRsZ5hP_Hr96zpygNOupXOuD-Yd-ETJ7HVJEo6SE8hfUKYxikOYXQSUVo8x9Uq.jpg?r=6c3",
        videoUrl: "/videos/nobars/howtobecomeatyrant-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYBfBWGOyAEc0kQ5SsRAfWmj7Gke91n-tk3HF2gGIB2Dh9OrkcZb7MHF2fmNA0Qhn0zzwKGYMimiWVu2WbUSNPCZVNdH-6qregsBTjVVn7xZD4cnWN6wYNCy8zaV.jpg?r=d16",
        altVideo: "/videos/howtobecometyrant.webm",
        moreInfo: "",
        matchPercentage: "98",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Dark",
        genre2: "Docuseries",
        genre3: "War"        
    },
    {
        title: "Pine Gap",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABY1syDFELV5ls5gCiiRY4Y1IP3jM6p5tq7YVfZC4wHj92POyjfPD0KOhicsX31-vh7Fntr-xVtiHMo0bL3aGpt0MMnwEqOfC0fEGK3hmrhGExCMDqweJ6ewY_-Fso9Yg9SU5vAfSGXBISd4DHC5wwKou5snJu8b8xE2uh4JGgKFsYYVai-DDJx5OKlUA3Niwg_FP_Vxa.jpg?r=b67",
        videoUrl: "/videos/nobars/pinegap-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQeFdL9vOUMAf9NhtovBjSBsh11d3RBVCoR3OdycPGEIeo6numy3gITwATn27iaar-6MamZk8OHVPh1xGrCaxUIFYsk1Mcmhr0S7PgPWmMaIXUFAnHo3_p_hEM8Y.jpg?r=ecc",
        altVideo: "/videos/piengap.webm",
        moreInfo: "",
        matchPercentage: "97",
        reqAge: "16+",
        seasons: "1 Season",
        quality: "HD",
        genre1: "Cerebral",
        genre2: "Intimate",
        genre3: "Sunspenseful"        
    },
    {
        title: "Army of the Dead",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABZyVOxoSgfZKIf1gTMyRzu5uEpHz90IK9DiluMt_7iOB6qPyhimnSuDIoX3ZcYW17YUP-6l0U5eCsrCTW6doRwwZ2pzXbzp4xbAFgQBIbLDAhDf3zqOeuZ1w57Ydbr7ix2y_H37GLzQHL5JGYgeSrnQDDd7u8mvrN7aKu7pi7lKfGJU_IHHRkjdqeaqoKqBVsDkIVt3j.jpg?r=b43",
        videoUrl: "/videos/nobars/armyofthedead-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfzd26G7qf5-W1Rwz616Mgs02EYyV0g9mEy1IbbirXwTk6jC83_UVRpT1J8qHVH7_EJpunHRktOgxq9rRX3OY6yrSM4cguGcAy0WDo5IB6GJPSOpjKji_7G23P3m.jpg?r=880",
        altVideo: "/videos/armyofthedead.webm",
        moreInfo: "",
        matchPercentage: "89",
        reqAge: "16+",
        seasons: "2h 28m",
        quality: "HD",
        genre1: "Gory",
        genre2: "Violent",
        genre3: "Irreverent"        
    },
    {
        title: "Star Trek Discovery",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABbP6-THyWqQRPicDLyXjJfA0OC11hVXNv39jn8_3osZeN8A_KxqbHRc042_ocUoRKtvS2losstUE-4Sbkl6Y4Z-LYjpbU-20jymCNykCzyVTVeIyOMRvLEhEZZI8toRMHQyWbndciw1GQabW1w51fQ4FndAs0nAcGC_q-cbWKAeydLaOZVt9dMcBN3YsOXMtJ3uhEsEf.jpg?r=dd5",
        videoUrl: "/videos/nobars/startrekdiscovery-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX-qRhqEsQVrYmSiJ16C1L02yBBQCirkM2_oRXxHUzjNfR9S10BkksdtlegUW5xWW1_2hoLnHAPlA4CKufUY9byAMGwA2ZekMyhejn_xpttKOygEQOR5SWkZFTC9.jpg?r=0e0",
        altVideo: "/videos/startrekdiscovery.webm",
        moreInfo: "",
        matchPercentage: "96",
        reqAge: "16+",
        seasons: "3 Seasons",
        quality: "HD",
        genre1: "Exciting",
        genre2: "Sci-Fi TV",
        genre3: "Alien Sci-Fi"        
    },
    {
        title: "Black Spot",
        imageUrl: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABUxjGwgq0C9YckHR8jOxnTkHDr-cgBMct-eDxBGhJ90X_gywDQQcHYwh1cfjyS8sU1bxyPMGhiGwS8LbzwOBbbgr61ZnoxAuE8StciFbRmAc0ilwEXWBDB_dkKVpiXEnFqdwWQDqjgI_zTYLVAau4yQXgaNTyU3TDxGlBsEWzMonhK-KA_sf34T8YWZdR19dFBt6SE0V.jpg?r=d56",
        videoUrl: "/videos/nobars/blackspot-nobars.webm",
        altImg: "https://occ-0-3032-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXukPyy2s6mY_vW2hDFFWbrqoB2sU8JW7PvGCG0wWCXRsZ6RR27lmS6QUnEtF4WQkJjodUAb0nBEF1H8Eok7KXbO6UHrocVJ4IWQ4QuMaHG1qEvNcpP6A5jmBC0W.jpg?r=fa6",
        altVideo: "/videos/blackspot.webm",
        moreInfo: "",
        matchPercentage: "93",
        reqAge: "16+",
        seasons: "2 Seasons",
        quality: "HD",
        genre1: "Slow Burn",
        genre2: "Psychological",
        genre3: "Dark"        
    },

];

const movieImagesSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .mainImage ');
const movieVideosSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .mainVideo ');
const movieAltImagesSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .altImg');
const movieAltVideosSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .altVideo');
const movieMatchSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .match-percent');
const movieAgeSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .age');
const movieSeasonsSelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .seasons');
const movieQualitySelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .quality');
const movieGenre1SelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .genre1');
const movieGenre2SelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .genre2');
const movieGenre3SelectorSpecial = document.querySelectorAll('.swiper-container-special .swiper-wrapper .swiper-slide .genre3');


function EachSlideSpecial(){    
    for (let i = 0; i < movieImagesSelectorSpecial.length; i++) {
        movieImagesSelectorSpecial[i].src = moviesSpecial[i].imageUrl;
        movieVideosSelectorSpecial[i].src = moviesSpecial[i].videoUrl;
        movieAltImagesSelectorSpecial[i].src = moviesSpecial[i].altImg;
        movieAltVideosSelectorSpecial[i].src = moviesSpecial[i].altVideo;
        movieMatchSelectorSpecial[i].innerHTML = moviesSpecial[i].matchPercentage;
        movieAgeSelectorSpecial[i].innerHTML = moviesSpecial[i].reqAge;
        movieSeasonsSelectorSpecial[i].innerHTML = moviesSpecial[i].seasons;
        movieQualitySelectorSpecial[i].innerHTML = moviesSpecial[i].quality;
        movieGenre1SelectorSpecial[i].innerHTML = moviesSpecial[i].genre1;
        movieGenre2SelectorSpecial[i].innerHTML = moviesSpecial[i].genre2;
        movieGenre3SelectorSpecial[i].innerHTML = moviesSpecial[i].genre3;
    }
};
EachSlideSpecial();





$(document).ready(function(){
    $(window).scroll(function(){
    if(this.scrollY > 5){
        $("#header").addClass("header-color-change");
    }
    else{
        $("#header").removeClass("header-color-change");
    }
    });
});
    


var html = '';
var aux;
$(".info-right-btn").click(
    function(){
        var self = $(this).parent('.video-details-buttons').parent('.video-details').parent('.swiper-slide');
        $("video", self).get(0).pause();
        $('video', self).get(0).currentTime = 0;
        var self = document.querySelector("html");
        $(".moreInfoBg",self).css({display: "flex"});
        $("body",self).css({'overflow-y': "hidden"});
        $(".movieInfo",self).css({display: "flex"});

        const movieImagesSelector = document.querySelectorAll('.movieInfo img');
        const movieVideosSelector = document.querySelectorAll('.movieInfo video');
        const movieMatchSelector = document.querySelectorAll('.movieInfo .match-percent');
        const movieAgeSelector = document.querySelectorAll('.movieInfo .age');
        const movieSeasonsSelector = document.querySelectorAll('.movieInfo .seasons');
        const movieQualitySelector = document.querySelectorAll('.movieInfo .quality');
        const movieGenre1Selector = document.querySelectorAll('.movieInfo .genre1');
        const movieGenre2Selector = document.querySelectorAll('.movieInfo .genre2');
        const movieGenre3Selector = document.querySelectorAll('.movieInfo .genre3');
        
        var btn = this;
        aux = this;
        var mine = $(this).parent('.video-details-buttons').parent('.video-details').parent('.swiper-slide');

        var myImg = ' ';
        var myVideo = ' ';
        if ($(this).parent().parent().parent().attr('class').split(' ')[1] == 'specialSlide') {
            myImg = $('.altImg', mine).get(0).src;
            myVideo = $('.altVideo', mine).get(0).src;
        }else{
            myImg = $('img', mine).get(0).src;
            myVideo = $('video', mine).get(0).src;
        }

        const myMatch = $('.match-percent', mine).get(0).innerHTML;
        const myAge = $('.age', mine).get(0).innerHTML;
        const mySeasons = $('.seasons', mine).get(0).innerHTML;
        const myQuality = $('.quality', mine).get(0).innerHTML;
        const myGenre1 = $('.genre1', mine).get(0).innerHTML;
        const myGenre2 = $('.genre2', mine).get(0).innerHTML;
        const myGenre3 = $('.genre3', mine).get(0).innerHTML;

        $(movieImagesSelector).attr('src', myImg);
        $(movieVideosSelector).attr('src', myVideo);
        $(movieMatchSelector).text(myMatch);
        $(movieAgeSelector).text(myAge);
        $(movieSeasonsSelector).text(mySeasons);
        $(movieQualitySelector).text(myQuality);
        $(movieGenre1Selector).text(myGenre1);
        $(movieGenre2Selector).text(myGenre2);
        $(movieGenre3Selector).text(myGenre3);

        const nbofmyseasons = mySeasons.split(' ')[0];
        
        for (let i = 0; i < nbofmyseasons; i++) {
            html[i]+=$(".infoHeader form select").append("<option value='Season'>Season " + (i+1) +"</option>");
        }

        function a() {
            var self = document.querySelector(".movieInfo");
            clicktimer = setTimeout(function(){
                $("video", self).get(0).play();
                $("img", self).get(0).style.opacity = "0"; 
            }, 2000);
        }
        a();
    }
);


function ExitMovieInfo(){

    const movieSeasonsSelector = document.querySelectorAll('.movieInfo .seasons');
    var mine = $(aux).parent('.video-details-buttons').parent('.video-details').parent('.swiper-slide');
    const mySeasons = $('.seasons', mine).get(0).innerHTML;
    $(movieSeasonsSelector).text(mySeasons);
    const nbofmyseasons = mySeasons.split(' ')[0];
    for (let i = 0; i < nbofmyseasons; i++) {
        html[i]=$(".infoHeader form select option").remove();
    }
    $(".moreInfoBg").css({display: "none"});
    $("body").css({'overflow-y': 'visible'});
    $(".movieInfo").css({display: "none"});
    clearTimeout(clicktimer);
    var self = document.querySelector(".movieInfo");
    $("video", self).get(0).pause();
    $("img", self).get(0).style.opacity = "1";
    $('video', self).get(0).currentTime = 0;
}

