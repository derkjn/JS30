/**
 * Created by nick on 4/2/17.
 */

window.addEventListener("keydown", function (event) {
    const keyCode = event.keyCode;

    let elem = document.querySelector(`[data-key="${keyCode}"]`);
    if (elem) {
        elem.classList.add('pressed');
    }
});

const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key =>
    key.addEventListener('transitionend', key => {
        if(key.propertyName != 'transform') return;
        key.target.classList.remove('pressed');
    })
);
