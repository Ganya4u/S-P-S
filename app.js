let userScore=0
let compScore=0

const choices = document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

 const genCompChoice=()=>{
   const options=["rock","paper","scissors"]
  const randidx = Math.floor(Math.random()*3)
  return options[randidx]
 }

 const drawGame=()=>{
    // console.log("game drawn")
    msg.innerText="game draw"
    msg.style.backgroundColor="green"
 }

 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userscorepara.innerText=userScore
        console.log("you won")
        msg.innerText=`You Won ! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="purple"
    }else{
        compScore++
        compscorepara.innerText=compScore
        console.log("you lost")
        msg.innerText=`You Lost ! ${compChoice} beats  Your ${userChoice}`
        msg.style.backgroundColor="red"
    }


 }

const playGame = (userChoice)=>{
// console.log("user choice =",userChoice)
//Generate comp choice
const compChoice=genCompChoice()
// console.log("comp choice =",compChoice)

if(userChoice===compChoice){
    //draw game
    drawGame()
}else{
    let userWin=true
    if(userChoice==="rock"){
        //paper ,scissors
        userWin=compChoice==="paper"?false:true
    }else if (userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true
    }else{
        userWin=compChoice==="rock"?false:true
    }
    showWinner(userWin,userChoice,compChoice)

    
}
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
        playGame(userChoice)
    })
})