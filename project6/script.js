
let changeColor;
document.querySelector('#start').addEventListener('click',()=>{
        if(!changeColor){
            changeColor=setInterval(()=>{
                let r=Math.floor(Math.random()*256);
                let g=Math.floor(Math.random()*256);
                let b=Math.floor(Math.random()*256);
                let body=document.querySelector('body');
                body.style.backgroundColor=`rgb(${r},${g},${b})`;
            },2000)
        }
});

document.querySelector('#end').addEventListener('click',()=>{
    clearInterval(changeColor);
    changeColor=null;
});