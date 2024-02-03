
let userScore=0;
let compScore=0;

let userRock=document.querySelector("#rock");
let userPaper=document.querySelector("#paper");
let userSci=document.querySelector("#scissor")
let res=document.getElementById("result");
let resBox=document.querySelector(".message");
let usc=document.querySelector("#user-score");
let csc=document.querySelector("#comp-score");

const compChoice=()=>{
    let options=["rock.","paper.","scissor."];
    let choice=(Math.random())*3;
    choice=Math.floor(choice)+1;
    console.log("Computer choses "+options[choice-1]);
    return choice;
}

userRock.addEventListener("click",()=>{
    console.log("Rock is chosen by user.");
    let choice=compChoice();
    if(choice===3){
        res.innerText="You Won! your rock beats scissor";
        resBox.style.backgroundColor="green"; 
        usc.innerText=++userScore;
        console.log("You Won!");
    }
    else if(choice===1){
        res.innerText="It was a draw";
        resBox.style.backgroundColor="yellow"; 
        res.style.color="black";
        console.log("Draw!");
    }
    else{
        res.innerText="You Lost!paper beats your rock";
        resBox.style.backgroundColor="red";
        csc.innerText= ++compScore;
        console.log("You Lost!") 
    }
    
})
userPaper.addEventListener("click",()=>{
    console.log("Paper is chosen by user.");
    let choice=compChoice();
    if(choice===1){
        res.innerText="You Won!your paper beats rock";
        resBox.style.backgroundColor="green"; 
        usc.innerText=++userScore;
        console.log("You Won!");
    }
    else if(choice===2){
        res.innerText="It was a draw";
        resBox.style.backgroundColor="yellow";
        res.style.color="black"; 
        console.log("Draw!")
    }
    else{
        res.innerText="You Lost! scissor beats your paper";
        resBox.style.backgroundColor="red";
        csc.innerText= ++compScore; 
        console.log("You Lost!")
    }
    
})
userSci.addEventListener("click",()=>{
    console.log("Scissor is chosen by user.");
    let choice=compChoice();
    if(choice===2){
        res.innerText="You Won! your scissor beats paper";
        resBox.style.backgroundColor="green"; 
        usc.innerText=++userScore;
        console.log("You Won!");
    }
    else if(choice===3){
        res.innerText="It was a draw";
        resBox.style.backgroundColor="yellow"; 
        res.style.color="black";
        console.log("Draw!")
    }
    else{
        res.innerText="You Lost! rock beats your scissor";
        resBox.style.backgroundColor="red";
        csc.innerText= ++compScore; 
        console.log("You Lost!")
    }
    
})