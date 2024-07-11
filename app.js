let btns=document.querySelectorAll("#box")
let rst=document.querySelector("#rst-btn")
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO=true;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
btns.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O"
            turnO=false;

        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        CheckWinner();
    })
})
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
const enableBoxes=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}
const disableBoxes=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const CheckWinner=()=>{
    for(let pattern of winPatterns){
        let pos1value=btns[pattern[0]].innerText
        let pos2value=btns[pattern[1]].innerText
        let pos3value=btns[pattern[2]].innerText
        if(pos1value!="" && pos2value!="" && pos3value!=""){
            if(pos1value==pos2value && pos2value==pos3value){
                showWinner(pos1value);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);