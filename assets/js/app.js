function navOpen(){
    /* nav & dark-ligt mode display block*/ 
   document.querySelector(".navigation-wrapper").style.display="block";
   document.querySelector(".light-dark-mode-wrapper").style.display="block";

   /*hamb-btn display:none & close-btn display:block*/
   document.querySelector(".hamb-btn").style.display="none";
   document.querySelector(".close-btn").style.display="block";

}

function navClose(){
    /* nav & dark-ligt mode display none*/ 
   document.querySelector(".navigation-wrapper").style.display="none";
   document.querySelector(".light-dark-mode-wrapper").style.display="none";

   /*hamb-btn display:block & close-btn display:none*/
   document.querySelector(".hamb-btn").style.display="block";
   document.querySelector(".close-btn").style.display="none";

}

function lightMode(){
   
   document.querySelector("body").style.color="black";
   document.querySelector("body").style.background="#e7e7e7";
   document.querySelector(".navigation-wrapper").style.fontWeight="bold";
   document.querySelector(".logo-word-two").style.fontWeight="bold";
   document.querySelector(".nav-item-1").style.borderColor="black";
   document.querySelector(".nav-item-2").style.borderColor="black";
   document.querySelector(".nav-item-3").style.borderColor="black";
   document.querySelector(".nav-item-4").style.borderColor="black";

   
}

function darkMode(){
   
    document.querySelector("body").style.color="white";
    document.querySelector("body").style.background="#000c1a";
    document.querySelector(".navigation-wrapper").style.fontWeight="regular";
    document.querySelector(".logo-word-two").style.fontWeight="regular";
    
 }