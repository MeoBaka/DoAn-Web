document.addEventListener("DOMContentLoaded",function(){
    console.log();
    var menuden = document.querySelector(".Header");
    console.log(menuden);

    var vitrimenu = menuden.offsetTop;
    console.log(vitrimenu);
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >300){
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
    $(function() {
    
    //xử lý class cho noidung
         $('.noidung').addClass('noidunghienra');

         // xu ly class cho .momo
         $('.momo').addClass('momodira');
    // xu ly cho nut .nut click vao 
    $('.dk').click(function(event) {
         
         //xử lý class cho noidung
         $('.noidung').addClass('noidunghienra');

         // xu ly class cho .momo
         $('.momo').addClass('momodira');
    });

    //jquery cho nut close 
    $('.nutdong, .momo').click(function(event) {
         //xử lý class cho noidung
         $('.noidung').removeClass('noidunghienra');

         // xu ly class cho .momo
         $('.momo').removeClass('momodira');

        });  
    });

    var chaytrai = document.querySelector(".KhungContent");
    console.log(chaytrai);

    var vitritrai = chaytrai.offsetTop;
    console.log(vitritrai);
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >400 && window.pageYOffset <1520){
              chaytrai.classList.add("trai");
        }
        else{
            chaytrai.classList.remove("trai");
        }
    })

    var chayphai = document.querySelector(".P");
    console.log(chayphai);

    var vitriphai = chayphai.offsetTop;
    console.log(vitriphai);
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >820 && window.pageYOffset <2320){
              chayphai.classList.add("phai");
        }
        else{
            chayphai.classList.remove("phai");
        }
    })

    var chaylen = document.querySelector(".Khung-Store");
    console.log(chaylen);

    var vitrilen = chaylen.offsetTop;
    console.log(vitrilen);
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >1500 && window.pageYOffset <2820 ){
              chaylen.classList.add("runup");
        }
        else{
            chaylen.classList.remove("runup");
        }
    })
    $(document).ready(function(){
                        var currentIndex = 0;
                        var slides = $('._1slide');

                        // Hàm chuyển động tự động
                        function autoSlide() {
                            currentIndex = (currentIndex + 1) % slides.length;
                            updateSlide();
                        }

                        // Hàm cập nhật hiển thị của slide
                        function updateSlide() {
                            var translateValue = -100 * currentIndex + '%';
                            $('._1slide').css('transform', 'translateX(' + translateValue + ')');
                        }

                        // Thiết lập chuyển động tự động
                        var interval = setInterval(autoSlide, 2000);

                        // Sự kiện khi tương tác chuột vào slide
                        $('._1slide').on('mouseenter', function() {
                            clearInterval(interval); // Dừng chuyển động khi tương tác
                        });

                        // Sự kiện khi rời chuột khỏi slide
                        $('._1slide').on('mouseleave', function() {
                            interval = setInterval(autoSlide, 2000); // Khởi động lại chuyển động
                        });

                        // Sự kiện khi click vào nút trước
                        $('.traiicon').click(function() {
                            clearInterval(interval);
                            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                            updateSlide();
                            interval = setInterval(autoSlide, 2000);
                        });

                        // Sự kiện khi click vào nút tiếp theo
                        $('.phaiicon').click(function() {
                            clearInterval(interval);
                            currentIndex = (currentIndex + 1) % slides.length;
                            updateSlide();
                            interval = setInterval(autoSlide, 2000);
                        });
                    });
    
})


