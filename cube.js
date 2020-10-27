export default class Cube {
    constructor() {
        this.wrapper = document.querySelector('.wrapper');

        this.elem = this._renderCube();
        this.cubeElement.addEventListener('pointerdown', this.cubeStartMove);
        this.cubeElement.addEventListener('click', this.cubeSideEvent());
    }

    _renderCube() {
        this.cubeElement = document.createElement('div');
        this.cubeElement.classList.add('cube');

        const cubeHTMLElement = `
            <div class="side side-1">1</div>
            <div class="side side-2">2</div>
            <div class="side side-3">3</div>
            <div class="side side-4">4</div>
            <div class="side side-5">5</div>
            <div class="side side-6">6</div>
        `;

        this.cubeElement.innerHTML = cubeHTMLElement;

        this.wrapper.append(this.cubeElement);
        
        // return cubeElement;
    }

    cubeStartMove = (event) => {
        event.preventDefault();

        this.cubeElement.style.transition = '0s';
        document.addEventListener('pointermove', this.cubeMove);
    }

    cubeMove = (event) => {
        // this.

        let onMouseMove = (event) => {
            this.cubeElement.style.transform = `rotateX(-${event.pageY*0.3}deg) rotateY(${event.pageX*0.3}deg)`;
        }

        onMouseMove(event);
        document.addEventListener('pointerup', this.cubeStop);
   }

   cubeStop = () => {
        document.removeEventListener('pointermove', this.cubeMove);
        // document.removeEventListener('pointerup', this.cubeStop);
   }

    cubeSideEvent() {
        this.sides = document.querySelectorAll('.side');    

        this.sides.forEach( (item) => {
            item.addEventListener('click', () => {
                
                item.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);;
            });
        });
    }
    
}