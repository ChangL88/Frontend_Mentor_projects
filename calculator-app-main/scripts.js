const slider = document.getElementById("slider");
const body = document.body;
const theme_count = document.querySelector(".theme_count");
const result = document.querySelector(".result");
const keypad = document.querySelector(".keypad");
const h2 = document.querySelector('h2');

// Theme slider tracker
function track_slider() {
    if (body.classList.contains("theme2")){
        slider.value = 2;
    }
    else if (body.classList.contains("theme3")){
        slider.value = 3;
    }
}

// Theme Color Changer
slider.oninput = () => {
    let slider_val = slider.value;
    
    slider.classList.remove("theme2");
    slider.classList.remove("theme3");
    body.classList.remove("theme2");
    body.classList.remove("theme3");
    theme_count.classList.remove("theme2");
    theme_count.classList.remove("theme3");
    result.classList.remove("theme2");
    result.classList.remove("theme3");
    keypad.classList.remove("theme2");
    keypad.classList.remove("theme3");
    if (slider_val == 2){
        slider.classList.add("theme2");
        body.classList.add("theme2");
        theme_count.classList.add("theme2");
        result.classList.add("theme2");
        keypad.classList.add("theme2");
    }
    else if(slider_val == 3){
        slider.classList.add("theme3");
        body.classList.add("theme3");
        theme_count.classList.add("theme3");
        result.classList.add("theme3");
        keypad.classList.add("theme3");
    }
}

// Reset Button
reset.onclick = () => {h2.innerHTML = 0}

// Delete Button
del.onclick = () => {
    if (h2.innerHTML.length >= 2) {
        h2.innerHTML = h2.innerHTML.slice(0, -1);
    }
    else{
        h2.innerHTML = 0;
    }
}


// Calculator results
edit_h2 = (val) => {
    if (h2.innerHTML == 0){
        h2.innerHTML = val
    }else {
        h2.innerHTML = h2.innerHTML + val;
    }
    
    calc.onclick = () => h2.innerHTML = eval(h2.innerHTML)
}


// Keyboard shortcut
window.addEventListener('keydown', e => {
    switch(e.key){
        case '1':
            edit_h2(1);
            break;
        case '2':
            edit_h2(2);
            break;
        case '3':
            edit_h2(3);
            break;
        case '4':
            edit_h2(4);
            break;
        case '5':
            edit_h2(5);
            break;
        case '6':
            edit_h2(6);
            break;
        case '7':
            edit_h2(7);
            break;
        case '8':
            edit_h2(8);
            break;
        case '9':
            edit_h2(9);
            break;
        case '0':
            edit_h2(0);
            break;
        case 'Enter':
            h2.innerHTML = eval(h2.innerHTML)
            break;
        case 'Backspace':
        case 'Delete':
            if (h2.innerHTML.length >= 2) {
                h2.innerHTML = h2.innerHTML.slice(0, -1);
            }
            else{
                h2.innerHTML = 0;
            }
            break;
        case '+':
            edit_h2('+');
            break;
        case '-':
            edit_h2('-');
            break;
        case '*':
            edit_h2('*');
            break;
        case '/':
            e.preventDefault();
            edit_h2('/');
            break;
        case 'Escape':
            h2.innerHTML = 0
            break;
    }
})