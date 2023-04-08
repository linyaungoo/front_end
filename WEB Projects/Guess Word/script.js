const input = document.getElementById("input_num");
var random_num = Math.floor(Math.random()*10);

const element = document.getElementById('check');
    element.addEventListener("click",()=>{
        const inputData = input.value;
        console.log(inputData);
        if(random_num < inputData){
            document.getElementById("show_data").innerHTML = "Unknown number is less than "+inputData;
        }else if(random_num > inputData){
            document.getElementById("show_data").innerHTML = "Unknown number is greater than "+inputData;
        }else if(random_num==inputData){
            document.getElementById("show_data").innerHTML = " You Win!";
        }console.log(random_num);
    })




