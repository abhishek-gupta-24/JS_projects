let clock=document.getElementById('clock');
setInterval(()=>{
    let date=new Date();
    let currDate=date.toLocaleDateString();
    let time=date.toLocaleTimeString();
    clock.innerHTML=`<div>Date is : ${currDate}</div><div>Time is: ${time}<\div`;
},1000)