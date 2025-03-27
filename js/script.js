document.addEventListener('DOMContentLoaded', function(){
    let slides = document.querySelector('.slides')
    let slide = document.querySelectorAll('.slide')
    let prevButton = document.querySelector('.prev')
    let nextButton = document.querySelector('.next')
    let slideCount = document.querySelector('.slideCount')
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
let dots = document.querySelectorAll('.dot')

function updateSlider(index){
    if(index >= slide.length){
        currentSlide = 0;
    }else if(index < 0){
        currentSlide = slide.length - 1;
    }else{
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
    slideCount.innerHTML =`${currentSlide + 1} / ${slide.length}`;
}

nextButton.addEventListener('click',function(){
// console.log('next');
updateSlider(currentSlide + 1);

})
prevButton.addEventListener('click',function(){
    // console.log('prev');
    updateSlider(currentSlide - 1);
    
    })

    dots.forEach((dot) =>{
        dot.addEventListener('click',function(){
            // console.log(typeof +dot.getAttribute('data-index'));
            updateSlider(+dot.getAttribute('data-index'));
            
        })
    })
    setInterval(()=>{
        updateSlider(currentSlide + 1);
    },2500)
    
    })



