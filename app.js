let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#newBtn");
let windiv=document.querySelector(".win");
let win=document.querySelector("#winner");
let maingame=document.querySelector(".maingame");
let turnO=true;//For turns.
let count=0;
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        
        checkWinner();
        if(count==9){
        draw();
    }
        box.disabled=true;
    })
    
});
resetBtn.addEventListener("click",()=>{
    enable_box();
    boxes.forEach((box)=>{
        box.innerText="";
        count=0;
       
    })
});
const draw=()=>{
    maingame.classList.add("hide");
    resetBtn.classList.add("hide");
    windiv.classList.remove("hide");
    win.innerText=`The Game is Draw`
    disable_box();
    count=0;
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        if(boxes[pattern[0]].innerText!=""&& boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText ){

            maingame.classList.add("hide");
            resetBtn.classList.add("hide");
            windiv.classList.remove("hide");
            win.innerText=`Winner is ${boxes[pattern[0]].innerText}`
            disable_box();
            count =0;
        }
            
    }
};
newBtn.addEventListener("click",()=>{
    enable_box();
    boxes.forEach((box)=>{
        maingame.classList.remove("hide");
        windiv.classList.add("hide");
        resetBtn.classList.remove("hide");
        box.innerText="";
        
    })
});
const enable_box=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
const disable_box=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
};
