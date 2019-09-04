import {debounce, throttle} from 'lodash';

const debouncedInput = document.querySelector('#debounced-input');
const throttledInput = document.querySelector('#throttled-input');
const output = document.querySelector('#output ul');

const printInputText = text => {
    if (text.length > 0) {
        output.innerHTML += `<li>${text}</li>`;
    } else {
        output.innerHTML = '';
    }
};

const printInputTextDebounced = debounce(printInputText, 500);
const printInputTextThrottled = throttle(printInputText, 500);

debouncedInput.addEventListener('keyup', e => {
    printInputTextDebounced(e.target.value);
});

throttledInput.addEventListener('keyup', e => {
    printInputTextThrottled(e.target.value);
});
