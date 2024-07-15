const id=document.getElementById("id");
const advice=document.getElementById("advice");
const dice=document.getElementById("dice");
function getresponse(){
let url= 'https://api.adviceslip.com/advice';
fetch(url)
.then(response => response.json())
.then(data=>{
id.innerHTML= data.slip.id;
advice.innerHTML= data.slip.advice;
})
}
dice.addEventListener('click',getresponse)


