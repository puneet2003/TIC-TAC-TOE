const boxes = Array.from(document.getElementsByClassName('square'));
const reset = document.getElementById('reset');
reset.addEventListener('click',resetFunc);
const headerText = document.getElementById('win');
const p1 = document.getElementById('one');
const p2 = document.getElementById('two');
const areas = [null,null,null,null,null,null,null,null,null];

const o_text = "O";
const x_text = "X";
let currentPlayer = o_text; 
let winBoxId = [];
p1.style.background = 'red';

function clickEvent(){
  boxes.forEach(square =>{
      square.addEventListener('click',handleBox);
  })
}
clickEvent();

function handleBox(e){
  if(winBoxId.length > 0){
    resetFunc();
        return;
      }
  const id = e.target.id;
  console.log(document.getElementById(id).textContent)
if(document.getElementById(id).textContent==""){

  if(currentPlayer === o_text)
  {
    p2.style.background = 'red';
    p1.style.background = '';
  }
  if(currentPlayer === x_text)
  {
    p1.style.background = 'red';
    p2.style.background = '';

  }
  if(!areas[id]){
    areas[id] = currentPlayer;
    e.target.innerHTML = currentPlayer;
    
    
    if(winnerPlayer(currentPlayer)){
      p1.style.background = '';
      p2.style.background = '';
      headerText.innerHTML = `${currentPlayer} has won!...`;
      headerText.style.background = 'red';
      changeWin();
      return;
    }
    currentPlayer = (currentPlayer === o_text)?x_text:o_text;
  }

}

  
}

function winnerPlayer(c)
{
  if(areas[0]===c){
      if((areas[1] === c) && (areas[2] === c)){
        winBoxId = [0,1,2];
        return true;
      }
      if((areas[3] === c) && (areas[6] === c)){
        winBoxId = [0,3,6];
        return true;
      }
      if((areas[4] === c) && (areas[8] === c)){
        winBoxId = [0,4,8];
        return true;
      }
  }
  if(areas[4] ===c){
      if((areas[2] === c) && (c=== areas[6])){
        winBoxId = [2,4,6];
        return true;
      }
      if((areas[3] === c) && (c === areas[5])){
          winBoxId = [3,4,5];
          return true;
      }
      if((areas[1] === c) && (c === areas[7])){
        winBoxId = [1,4,7];
        return true;
      }
  }
  if(areas[8] === c){
      if((areas[6] === c) && (areas[7] === c)){
        winBoxId = [6,7,8];
        return true;
      }
      if((areas[2] === c) && (areas[5] === c)){
        winBoxId = [2,5,8];
        return true;
      }
  }  
}

  function changeWin(){
    winBoxId.forEach(id=>{
      boxes[id].style.background = 'red';
    })
    boxes.forEach(box=>{
      box.style.cursor = 'not-allowed';
      
    })
  }

function resetFunc(e){
 winBoxId = [];
 areas.forEach((val,index)=>{
  areas[index] = null;
 })
 boxes.forEach(box=>{
  box.innerHTML = '';
  box.style.background = '';
  box.style.cursor = 'pointer';
 })
 headerText.innerHTML = "Let's Play....";
 headerText.style.background = '';
 currentPlayer = o_text;
 p1.style.background = 'red';
 p2.style.background = '';

}
