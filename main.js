let cube = document.querySelector('.cube');
let buttonOn = document.querySelector('.button-on');
let buttonOff = document.querySelector('.button-off');
let buttonRoll = document.querySelector('.button-roll');
// let side1 = document.querySelector('.side-1');
// let side2 = document.querySelector('.side-2');
// let side3 = document.querySelector('.side-3');
// let side4 = document.querySelector('.side-4');
// let side5 = document.querySelector('.side-5');
// let side6 = document.querySelector('.side-6');
let side = document.querySelectorAll('.side');


buttonOn.addEventListener('click', (event) => {
    event.stopPropagation();
    
    document.querySelectorAll('.side').forEach((item) => {
    item.style.transform = 'rotateY(0deg) rotateX(0deg)';
    item.style.left = '321px';
    item.style.transform = 'rotateY(0deg) rotateX(0deg)';
    item.style.right = '301px';
    item.style.transform = 'rotateY(0deg) rotateX(0deg)';
    item.style.top = '321px';
    item.style.transform = 'rotateY(0deg) rotateX(0deg)';
    item.style.top = '321px';
    item.style.left = '321px';
    item.style.transform = 'rotateY(0deg) rotateX(0deg)';
    item.style.top = '321px';
    item.style.right = '301px';
    })

});

    buttonOff.addEventListener('click', (event) => {
    event.stopPropagation();
    
    side2.style.transform = 'rotateY(90deg)';
    side2.style.left = '0px';
    side3.style.transform = 'rotateY(-90deg)';
    side3.style.right = '-10px';
    side4.style.transform = 'rotateX(90deg)';
    side4.style.top = '0px';
    side5.style.transform = 'rotateX(-90deg)';
    side5.style.top = '0px';
    side5.style.left = '0px';
    side6.style.transform = 'rotateY(180deg)';
    side6.style.top = '0px';
    side6.style.right = '-15px';
});

buttonRoll.addEventListener('click', (event) => {
    
    let randomMoveX = function() {
        let x = Math.floor(Math.random() * 8900).toString();
        return x;
    }

let randomMoveY = function() {
    let y = Math.floor(Math.random() * 5400).toString();;
    return y;
}
    
        cube.style.transition = '8s';
        let x = randomMoveX();
        let y = randomMoveY();
        cube.style.transform = `rotateX(-${y}deg) rotateY(${x}deg)`;

});
