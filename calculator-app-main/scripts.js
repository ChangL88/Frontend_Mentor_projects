const slider = document.getElementById("slider");
const body = document.body;
const theme_count = document.querySelector(".theme_count");
const result = document.querySelector(".result");
const keypad = document.querySelector(".keypad");
const h2 = document.querySelector('h2');
// const del = document.getElementById("del");

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
    let current_value = h2.innerHTML;
    current_value = (current_value.slice(0, -1));
    h2.innerHTML = current_value;
}


// calculator = (val) => {
    
//     let current_expression = "";
//     // console.log("current expression = " + current_expression);

//     if(typeof val === "number"){
//         if(current_expression == 0){
//             h2.innerHTML = val;
//             return current_expression = h2.innerHTML;
//         }
//         else{
//             h2.innerHTML = current_expression + val;
//             return current_expression = h2.innerHTML;
//         }
//     }
//     else if(typeof val === "string"){
//         if(val === "+"){
//             if(h2.innerHTML.includes("+")){
//                 h2.innerHTML = eval(current_expression)
//             }else{
//                 h2.innerHTML = current_expression + val;
//             }
//         }
//         else if(val === "-"){

//         }
//         else if(val === "x"){

//         }
//         else if(val === "/"){

//         }
//         else if(val === "."){

//         }
//     }
//     calc.onclick = () => {
//         h2.innerHTML = eval(current_expression);
//     }
// }

edit_h2 = (val) => {
    if (h2.innerHTML == 0){
        h2.innerHTML = val
    }else {
        h2.innerHTML = h2.innerHTML + val;
    }
    calc.onclick = () => h2.innerHTML = eval(h2.innerHTML)
}



// switch(input.value){
//     case 1:
//         console.log(input.value);
//         break;
//     case 2:
//         console.log(input.value);
//         break;
//     case 3:
//         console.log(input.value);
//         break;
// }