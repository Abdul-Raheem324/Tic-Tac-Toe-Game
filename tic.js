
const boxes = document.querySelectorAll('.box')
let turnX = true;
const winner = document.querySelector('.win-span')

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

function playerX(){
    
    boxes.forEach(box =>{
        box.addEventListener('click', () =>{
            if(turnX){
                box.innerText = "X";
                box.disabled = true;
                turnX = false;
            }
            else{
                box.innerText = "0";
                box.disabled = true;
                turnX = true;
            }
            checkWinner();
        })
    })
}
playerX()

function checkWinner(){
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                winner.innerHTML = `Player${pos1} Wins!!`
                winner.style.color = 'green'
                disableBoxes();
                return true;
            }
            if (Array.from(boxes).every(box => box.innerText)) {
                winner.innerHTML = "Match Tied!!"
                winner.style.color = 'orange'
                
            // for (let i = 0; i < boxes.length; i++) {
            //     if (boxes[i].innerText === "") {
            //       return; 
            //     }
            // }
            // winner.innerHTML = "Match Tied!!";
            disableBoxes();
              
        }
    }
    }
}

function disableBoxes() {
    for(box of boxes){
        box.disabled = true;    
        box.style.pointerEvents = "none"
    }
}
function enableBoxes() {
   for(box of boxes){
    box.disabled = false;
    box.innerHTML = ""
    box.style.pointerEvents = "auto"
   }
}

const reset = document.querySelector('.resetBtn').addEventListener("click",() =>{
    winner.innerHTML = ""
    enableBoxes()
   turnX = true
    


})
