let container=document.querySelector(".container")

let alert1=document.querySelector(".alert1")
let alert2=document.querySelector(".alert2")
let age=document.querySelector("#age")
let calculate=document.querySelector("#calculate")
let Reset=document.querySelector("#Reset")
let result=document.querySelector("#result")
let refresh=document.querySelector(".refresh")

let mytimer;
let ages;

calculate.addEventListener("click", function(){
    ages=age.value.trim();
    if(ages== ""){

        clearInterval(mytimer);
    let alert1=document.querySelector(".alert1")

    alert1.classList.add("active")

    mytimer=setInterval(function(){
        alert1.classList.remove("active");
    }, 3000)
    }

    else if(isNaN(ages)==true){
        clearInterval(mytimer);
        alert2.classList.add("active")

        mytimer=setInterval(function(){
            alert2.classList.remove("active")
        }, 3000)
    }
    else{
        let answer=document.querySelector(".answer")
        answer.classList.add("active")

        let remaining_days=90-ages;
        let remaining_weeks=remaining_days*52;
        result.innerHTML=numberWithCommas(remaining_weeks);
        age.value="";    }

})
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Reset.addEventListener("click",function(){
    refresh.click()
})