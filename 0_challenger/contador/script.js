
  const ADD = document.getElementsByName('adicionar')[0];
  const REMOVE = document.getElementsByName('subtrair')[0];
  const CURRENTNUMBER = document.getElementById('currentNumber')
  let cont = 0;
  
  ADD.addEventListener("click", increment);
  REMOVE.addEventListener("click", decrement);

function increment(){
  REMOVE.disabled=false
  CURRENTNUMBER.style.color='black'

  cont++
  CURRENTNUMBER.innerHTML=cont;

  if(cont === 5) ADD.disabled=true
}

function decrement(){
  ADD.disabled=false
  CURRENTNUMBER.style.color='black'

  cont--
  CURRENTNUMBER.innerHTML=cont
  
  if(cont === -1){
    REMOVE.disabled=true
    CURRENTNUMBER.style.color='red'
  }
}