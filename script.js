document.addEventListener("DOMContentLoaded",function(){
    console.log();
    var menuden = document.querySelector(".Header");
    console.log(menuden);

    var vitrimenu = menuden.offsetTop;
    console.log(vitrimenu);
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >510){
            menuden.classList.add("Scroll");
        }
        else{
            menuden.classList.remove("Scroll");
        }
    })  


    var sline = document.querySelectorAll("._1slide");
    console.log(sline);
    var cacnut = document.querySelectorAll(".nutcon");
    console.log(cacnut);
    //viet su kien cho nut phai
    var nutphai = document.querySelector(".phaiicon");
    var nuttrai = document.querySelector(".traiicon");

    console.log(nutphai);
    console.log(nuttrai);
    var vitri=0;
    for(var h = 0; h<cacnut.length;h++){
        cacnut[h].addEventListener('click',function(){
            //hinh chuyen
            for(var g=0;g<cacnut.length;g++){
                cacnut[g].classList.remove("doimau");
                this.classList.add("doimau");
            }
            var nutkichhoat= this;
            //xac dinh vi tri nut
            for(vitri = 0;nutkichhoat=nutkichhoat.previousElementSibling;vitri++)
            {}
            console.log(vitri);

            for(var i =0;i<sline.length;i++){
                sline[i].classList.remove("kichhoat");
                sline[vitri].classList.add("kichhoat");
            }
        })

    }

    nutphai.addEventListener("click",function(){
        console.log("Đã click");
         for(var u=0;u<cacnut.length;u++){
            cacnut[u].classList.remove("doimau");
         }
         for (var j = 0; j <sline.length; j++) {
            sline[j].classList.remove("kichhoat");
         }
         if (vitri<sline.length-1) {
            cacnut[vitri+1].classList.add("doimau");
            sline[vitri+1].classList.add("kichhoat");
            vitri++;
         }else{
            cacnut[0].classList.add("doimau");
            sline[0].classList.add("kichhoat");
            vitri=0;
         }

    })

    nuttrai.addEventListener("click",function(){
        console.log("Đã click");
         for(var u=0;u<cacnut.length;u++){
            cacnut[u].classList.remove("doimau");
         }
         for (var j = 0; j < sline.length; j++) {
            sline[j].classList.remove("kichhoat");
         }
         if (vitri<sline.length && vitri > 0 ) {
            console.log("helo ba gia")
            sline[vitri-1].classList.add("kichhoat");
            cacnut[vitri-1].classList.add("doimau");
            vitri--;
         }else{
            cacnut[6].classList.add("doimau");
            sline[6].classList.add("kichhoat");
            vitri=6;
         }

    })
})