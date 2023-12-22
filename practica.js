const h1= document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn=document.querySelector('#btcalcular');
const p=document.querySelector('#resultado')
const form=document.querySelector('#form');

form.addEventListener('submit',sumarValores);// no se debe de poner parentesis de la funcion 
const toggle = () => btn.classList.toggle("red");
//btn.addEventListener('click',colorBtn);
btn.addEventListener("click", toggle);

function sumarValores(event){
    event.preventDefault();// permite que le quite al formulario el estado por defecto
    const result =parseInt(input1.value) + parseInt(input2.value);
     p.innerHTML="resultado "+ result;
        
 } 

 function colorBtn(){
    btn.classList.toggle('red');
 }