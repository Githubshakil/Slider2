document.addEventListener('DOMContentLoaded', function(){
    let slides = document.querySelector('.slides')
    let slide = document.querySelectorAll('.slide')
    let prevButton = document.querySelector('.prev')
    let nextButton = document.querySelector('.next')
    let dotsContainer = document.querySelector('.dots')


console.log(slide.length);

let currentSlide = 0;

for(let i = 0; i < slide.length; i++){
   let creatDot = document.createElement('div');
   if(i===0){
    creatDot.classList.add('active');
   }
   creatDot.classList.add('dot')
   creatDot.setAttribute("data-index",i)
   dotsContainer.appendChild(creatDot)
   
}

function updateSlider(index){
    if(index >= slide.length){
        currentSlide = 0;
    }else if(index < 0){
        currentSlide = slide.length - 1;
    }
}

nextButton.addEventListener('click',function(){

})


})

42:55 secs