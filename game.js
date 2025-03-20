let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg_box");
let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = ()=>{
   turnO = true;
   enableBoxs();
   msg.classList.add("hide");
}

const enableBoxs = () =>{
   for (const box of boxs) {
      box.disabled = false;
      box.innerText = "";
   }
}

const disableBoxs = ()=>{
   for(const box of boxs){
      box.disabled = true;
   }
}

reset.addEventListener("click",()=>{
   resetGame();
})


boxs.forEach((box)=>{
    box.addEventListener("click", ()=>{
       console.log("Box was clicked");
     if(turnO === true){
        box.innerText = "O";
        turnO = false;
     }
     else{
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true;

     checkWin();

    })
});

const showWinner = (player)=>{
msg.innerText = `WINNER is Player${player}`;
msg.classList.remove("hide");
}

const checkWin = () =>{
   for (const pattern of winPatterns) {
      let posVal1 = boxs[pattern[0]].innerText;
      let posVal2 = boxs[pattern[1]].innerText;
      let posVal3 = boxs[pattern[2]].innerText;
     
     if(posVal1 != ""&& posVal2 != "" && posVal3 != ""){
      if(posVal1 == posVal2 && posVal2 == posVal3){
         console.log("Winner",posVal1);
         showWinner(posVal1);
      }
     }
   }
}