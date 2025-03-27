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



// up & Down scroll sliper




document.addEventListener('DOMContentLoaded', function(){
    let slides2 = document.querySelector('.slides2')
    let slide2 = document.querySelectorAll('.slide2')
    let prevButton2 = document.querySelector('.prev2')
    let nextButton2 = document.querySelector('.next2')
    let slideCount2 = document.querySelector('.slideCount2')
    let dotsContainer2 = document.querySelector('.dots2')


// console.log(slide2.length);

let currentSlide2 = 0;

for(let i = 0; i < slide2.length; i++){
   let creatDot2 = document.createElement('div');
   if(i===0){
    creatDot2.classList.add('active2');
   }
   creatDot2.classList.add('dot2')
   creatDot2.setAttribute("data-index",i)
   dotsContainer2.appendChild(creatDot2)
   
}
let dots2 = document.querySelectorAll('.dot2')

function updateSlider2(index){
    if(index >= slide2.length){
        currentSlide2 = 0;
    }else if(index < 0){
        currentSlide2 = slide2.length - 1;
    }else{
        currentSlide2 = index;
    }
    slides2.style.transform = `translateY(${-currentSlide2 * 100}%)`;
    dots2.forEach((dot2) => dot2.classList.remove('active2'));
    dots2[currentSlide2].classList.add('active2');
    slideCount2.innerHTML =`${currentSlide2 + 1} / ${slide2.length}`;
}

nextButton2.addEventListener('click',function(){
// console.log('next');
updateSlider2(currentSlide2 + 1);

})
prevButton2.addEventListener('click',function(){
    // console.log('prev');
    updateSlider2(currentSlide2 - 1);
    
    })

    dots2.forEach((dot) =>{
        dot.addEventListener('click',function(){
            // console.log(typeof +dot.getAttribute('data-index'));
            updateSlider2(+dot.getAttribute('data-index'));
            
        })
    })
    setInterval(()=>{
        updateSlider2(currentSlide2 + 1);
    },2500)
    
    })