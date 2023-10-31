
let arrow = document.querySelector('.arrow');

arrow.onclick = ()=>{
    arrow.classList.toggle('rotate-180');
    let list = arrow.parentNode.nextElementSibling;
    if(list.style.maxHeight){ list.style.maxHeight = null; }
    else{ list.style.maxHeight = list.scrollHeight + 'px'; }
}