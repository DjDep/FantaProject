import  db  from '../main.js';

let search_bx2 = document.getElementByClassName('search-bx2')[0];

window.addEventListener('load', () =>{
  footballers.forEach(element => {
    const {img, name, team, url} = element ;

    let card = document.createElement('a');
    card.href= url;

    card.innerHTML = ` <img src="${img}" alt=""> 
    <div class="content2"> 
    <h6> ${name} </h6> 
    <p> ${team} </p> </div> ` ; 
    search_bx2.appendChild(card);


});
})