let cube = document.querySelector('.cube');
let side = document.querySelector('.side');
let side1 = document.querySelector('.side-1');
let side2 = document.querySelector('.side-2');
let side3 = document.querySelector('.side-3');
let side4 = document.querySelector('.side-4');
let side5 = document.querySelector('.side-5');
let side6 = document.querySelector('.side-6');
let buttonOn = document.querySelector('.button-on');
let buttonOff = document.querySelector('.button-off');
let buttonRoll = document.querySelector('.button-roll');

cube.addEventListener('mousedown', (event) => {

    event.preventDefault();

    cube.style.transition = '0s'
    
    // function cubeMove(pageX, pageY) {
    //     cube.style.transform = `rotateX(-${pageY*0.3}deg) rotateY(${pageX*0.3}deg)`
    // }

    function onMouseMove(event) {
        // cubeMove(event.pageX, event.pageY);
        cube.style.transform = `rotateX(-${event.pageY*0.3}deg) rotateY(${event.pageX*0.3}deg)`;
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    }

});


let randomColor = function() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

let randomMoveX = function() {
    let x = Math.floor(Math.random() * 8900).toString();
    return x;
}

let randomMoveY = function() {
    let y = Math.floor(Math.random() * 5400).toString();;
    return y;
}

side1.addEventListener('click', (event) => {
    event.stopPropagation();
    side1.style.backgroundColor = randomColor();
});

side2.addEventListener('click', (event) => {
    event.stopPropagation();
    side2.style.backgroundColor = randomColor();
});

side3.addEventListener('click', (event) => {
    event.stopPropagation();
    side3.style.backgroundColor = randomColor();
});

side4.addEventListener('click', (event) => {
    event.stopPropagation();
    side4.style.backgroundColor = randomColor();
});

side5.addEventListener('click', (event) => {
    event.stopPropagation();
    side5.style.backgroundColor = randomColor();
});

side6.addEventListener('click', (event) => {
    event.stopPropagation();
    side6.style.backgroundColor = randomColor();
});

buttonOn.addEventListener('click', (event) => {
    event.stopPropagation();
    
    side2.style.transform = 'rotateY(0deg) rotateX(0deg)';
    side2.style.left = '321px';
    side3.style.transform = 'rotateY(0deg) rotateX(0deg)';
    side3.style.right = '301px';
    side4.style.transform = 'rotateY(0deg) rotateX(0deg)';
    side4.style.top = '321px';
    side5.style.transform = 'rotateY(0deg) rotateX(0deg)';
    side5.style.top = '321px';
    side5.style.left = '321px';
    side6.style.transform = 'rotateY(0deg) rotateX(0deg)';
    side6.style.top = '321px';
    side6.style.right = '301px';
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
    
    
        cube.style.transition = '8s';
        let x = randomMoveX();
        let y = randomMoveY();
        cube.style.transform = `rotateX(-${y}deg) rotateY(${x}deg)`;

});
