let btn=document.querySelector('#btn');
let main_div=document.querySelector('#main-div');
btn.addEventListener('click',(e)=>{
    let height=document.querySelector("#height")
    let weight=document.querySelector("#weight")
    if(height.value<=0&&weight.value<=0){
        alert("Enter valid Height and weight");
    }
    else if(height.value<=0){
        alert("Enter valid Height");
    }else if(weight.value<=0){
        alert("Enter valid Weight");
    }
    else{
        const val= ((weight.value)/((height.value)**2)).toFixed(2);

        let existingBMI = document.querySelector("#finalBMI");
        if (existingBMI) {
            existingBMI.remove();
        }


        let newdiv=document.createElement("div");
        newdiv.id="finalBMI";
        newdiv.className="div";
    
        let BMI=document.createElement("h2");
        let text=document.createTextNode(`Your BMI is : ${val}`);
    
        BMI.appendChild(text);
        newdiv.appendChild(BMI);
        main_div.appendChild(newdiv);
    }
})