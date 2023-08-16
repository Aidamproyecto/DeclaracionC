const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click', function(){

    alert('SABIA QUE ME QUERIAS')
    alert('ME HACES FELIZ')
})


const noBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover', function(){

    const randomX = parseInt(Math.random()*100)
    const randomY = parseInt(Math.random()*100)

    noBtn.style.setProperty('top', randomX+'%')
    noBtn.style.setProperty('left', randomY+'%')

    noBtn.style.setProperty('transform', 'translate(-${randomX}%, -${randomY}% )');
    
} )