const li = document.querySelectorAll("li");
const amount = document.getElementsByClassName("amount");


fetch("./data.json")
.then(response => {
    return response.json();
})
.then(data => {
    let highest = Math.max(...data.map(o => o.amount));
    
    for( let i = 0; i < data.length ; i++ ){
        let height = data[i].amount / highest * 100;
        

        li[i].innerHTML += `<span class="day">${data[i].day}</span>`;
        li[i].style.height = `${height}%`
        amount[i].innerHTML = `$${data[i].amount}`;


        if (data[i].amount == highest){
            li[i].style.backgroundColor = "#76b5bc";
        }
    }
})



li.forEach((item, i) =>{
    item.addEventListener('mouseover', () => {
        amount[i].style.display = "block";
    })
    item.addEventListener('mouseout', () => {
        amount[i].style.display = "none";
    })
})
