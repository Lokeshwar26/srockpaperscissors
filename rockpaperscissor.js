let userscore = 0;
let compscore = 0;

const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");


const comgennum = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};

const drawgame = () => {
    console.log("Your Game was Draw");
    msg.innerText="Game is Drawn.Try Again";
    msg.style.backgroundColor="blue";
};
const showwinner =(userwin,Choiceid,comch)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win!! Your  ${Choiceid} beats ${comch} `;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose... Computer's ${comch} beats Your  ${Choiceid}`;
        msg.style.backgroundColor="red";
    }
};



const playgame = (Choiceid) => {
    const comch = comgennum();
    
    if (Choiceid == comch) {
        drawgame();
    } else {
        let userwin=true;
        if(Choiceid=="rock"){
            userwin=comch=="paper"?false:true;
        }else if(Choiceid=="paper"){
            userwin=comch=="scissors"?false:true;
        }else{
            userwin=comch=="rock"?false:true;
        }
        showwinner(userwin,Choiceid,comch);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Choiceid = choice.getAttribute("id");
        playgame(Choiceid);
    });
});
