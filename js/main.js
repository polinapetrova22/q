let slideIndex = 1; //текущий слайд
showSlides(slideIndex); //показываем

//функция переключения слайдов
function plusSlides(n) {
    showSlides(slideIndex += n); 
}

// основная функция отображения слайдов
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides"); //все слайды

    //зацикливание слайдов
    if(n >slides.length) {
        slideIndex = 1
    }
    if (n<1) {
        slideIndex = slides.length
    }

    //скрываем все слайды
    for(i=0; i< slides.length; i++){
         slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block"; /*показываем текущий слайд*/
}

