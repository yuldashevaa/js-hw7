const box = document.querySelectorAll('.box')
const blue = document.querySelector('.blue')
const orange = document.querySelector('.orange')
const pink = document.querySelector('.pink')
const dark__blue = document.querySelector('.dark__blue')
const ocean = document.querySelector('.ocean')
const purple = document.querySelector('.purple')
const body = document.body

console.log(box);
console.log(blue);
console.log(orange);
console.log(pink);
console.log(dark__blue);
console.log(ocean);
console.log(purple);






blue.addEventListener('click', () => {
    box.forEach((el) => {
        if(el.style.background === 'rgb(121, 121, 186)'){
            el.style.background = ''
        }else{
            el.style.background = 'rgb(121, 121, 186)'
        }
    })
})



orange.addEventListener('click', () => {
    box.forEach((el) => {
        if(el.style.background === 'rgb(224, 184, 110)'){
            el.style.background = ''
        }else{
            el.style.background = 'rgb(224, 184, 110)'
        }
    })
  
})



pink.addEventListener('click', () => {   
    box.forEach((el) => {
        if(el.style.background === 'rgb(213, 170, 196)'){
            el.style.background = ''
        }else{
            el.style.background = 'rgb(213, 170, 196)'
        }
    })


})


dark__blue.addEventListener('click',() =>{
    body.classList.toggle('dark__blue')
    body.classList.remove('ocean','purple')
})


ocean.addEventListener('click',() => {
    body.classList.toggle('ocean')
    body.classList.remove('dark__blue','purple')
})

purple.addEventListener('click',() =>{
    body.classList.toggle('purple')
    body.classList.remove('dark__blue','ocean')
})








                                                          










