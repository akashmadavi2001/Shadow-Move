let text = document.querySelector('.text');
let light = document.querySelector('.light');

document.addEventListener('mousemove', function (e) {
    let lightX = e.clientX;
    let lightY = e.clientY;

    light.style.top = lightY + "px";
    light.style.left = lightX + "px";

    let distanceX = lightX - text.offsetLeft - text.offsetWidth / 2;
    let distanceY = lightY - text.offsetTop - text.offsetHeight / 2;

    let newShadow = '';
    for (let i = 0; i < 200; i++) {
        let shadowX = -distanceX * (i / 200);
        let shadowY = -distanceY * (i / 200);
        let opacity = 1 - (i / 200);

        newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0px  rgb(51, 51, 51,' + opacity + ')';

        text.style.textShadow = newShadow;
    }
});
