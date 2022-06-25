const ratingSection = document.querySelector(".rating");
const submit = document.querySelector(".submit");
const responseSection = document.querySelector(".thankYou");
const form = document.querySelector(".rating_form")
const span = document.querySelector(".span");



form.addEventListener("submit", e => {
    const rating = document.querySelector("input[name='rating']:checked");
    if (rating.checked){
        console.log(`rating checked ${rating.checked} rating value ${rating.value}`)
        e.preventDefault();
        responseSection.style.display = "initial";
        ratingSection.style.display = "none";
        span.innerHTML = ` ${rating.value} `;
    }
    else{
        alert("Please select a rating");
    }
})


document.querySelector('input[name="rating"]:checked').checked = false;


// const rating = document.querySelector("input[name=rating]:checked");
// console.log(rating)

// window.addEventListener('click', console.log(rating));

// const rating_form = document.querySelector(".rating_form")
// console.log(rating_form.rating.value)