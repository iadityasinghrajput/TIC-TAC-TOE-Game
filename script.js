console.log("Welcome to tic tac toe game");
let music=new Audio('music.mp3');
let turn=new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let t="X";
let go=false;
let mp=false;
//To change turn
const changeTurn=()=>{
    return t==="X"?"0":"X";
}
//To check winner
const checkWin=()=>{
   let bt=document.getElementsByClassName('boxtext');
   let b=[[0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
         ]
    b.forEach(e => {
        if((bt[e[0]].innerText===bt[e[1]].innerText)&&(bt[e[1]].innerText===bt[e[2]].innerText)&&(bt[e[0]].innerText!==''))
        {
            document.querySelector(".info").innerText = bt[e[0]].innerText+" is Winner";
            go=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
            gameover.play();
            //document.querySelector(".line").style.width = "20vw";
            //document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    });
}
//Game Logic
let boxes=document.getElementsByClassName("box");

  Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
    if(boxtext.innerText==='')
    {
        boxtext.innerText = t;
        t=changeTurn();
        turn.play();
        checkWin();
        if(!go)
        document.getElementsByClassName("info")[0].innerText="Turn for "+t;
    }
    }
    )
})
//Reset button 
reset.addEventListener('click',()=>{
    let bt=document.querySelectorAll('.boxtext');
    Array.from(bt).forEach(e=>{
        e.innerText="";
    });
    t="X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + t;
    go=false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0";
    //document.querySelector(".line").style.width = "0vw";
}
)
//Music button
let pp=document.getElementById('play-pause');
pp.addEventListener('click',()=>{
   if(!mp)
   {
   music.play();
   mp=true;
   }
   else{
    music.pause();
    mp=false;
   }
})
