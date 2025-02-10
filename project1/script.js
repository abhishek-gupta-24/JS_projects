let buttons=document.querySelectorAll('.button');

let body=document.querySelector('body');
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let id=e.target.id;
        body.style.backgroundColor=id;
    })
})
