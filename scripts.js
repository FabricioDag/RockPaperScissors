const newGameBtn =  document.querySelector('.newGameBtn')

const inputButtons =  document.querySelectorAll(".token")

const mainMenu =  document.querySelector('.mainMenu')
const scoreArea =  document.querySelector('.scoreArea')
const inputArea = document.querySelector(".inputArea")
const battleArea = document.querySelector(".battleArea")

const youPick =  document.querySelector('.youPick')
const otherPick = document.querySelector('.otherPick')

const message = document.querySelector(".message")

const scoreC = document.querySelector('.score')
const counterC = document.querySelector(".counter")

const modalStatus =  document.querySelector('.modalStatus')
const modalRules =  document.querySelector('.modalRules')

const chartWin =  document.querySelector('.chartWin')
const chartLose =  document.querySelector('.chartLose')
const chartDraw =  document.querySelector('.chartDraw')

const pcArr = ["Rock", "Paper", "Scissor"]

let counterPlayer = 0
let counterPc = 0
let counterDraw = 0


inputButtons.forEach(inputButton => {
    inputButton.addEventListener("click",()=>{

        playerPick = inputButton.value
        // alert("vc ecolheu " + playerPick)

        youPick.innerHTML=`<h2>YOU PICKED</h2>`
        otherPick.innerHTML=`<h2>THE HOUSE PICKED</h2>`

        inputArea.classList.toggle('hide')
        battleArea.classList.toggle('hide')

        let testePick = document.createElement('div')
        testePick.classList.add('token')
        testePick.classList.add(playerPick)
        testePick.innerHTML = `
            <div class="innerPart">
                    <img src="/icon-${playerPick}.svg" alt="">
            </div>`
        youPick.appendChild(testePick)    
        
        pcPick = pcArr[getRandomInt(1,3)]
        
        let testeHousePick = document.createElement('div')
        testeHousePick.classList.add('token')
        testeHousePick.classList.add(pcPick)
        testeHousePick.innerHTML = `
            <div class="innerPart">
                    <img src="/icon-${pcPick}.svg" alt="">
            </div>`
        otherPick.appendChild(testeHousePick)
   
        // alert(pcPick)
        checkWin(playerPick, pcPick)
    })
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//player escolhe qual quer

function checkWin(playerPick, pcPick){
    if(playerPick != pcPick){
        if(playerPick == "Rock" && pcPick == "Scissor" || playerPick == "Paper" && pcPick == "Rock" || playerPick == "Scissor" && pcPick == "Paper"){
        //    alert('Player Win')
           message.innerText = "YOU WIN"
           counterPlayer = counterPlayer+1

           attCounterPlayer()
           console.log(counterPlayer)

        } else{
            // alert(" PC Win")
            counterPc = counterPc+1
            message.innerText = "YOU LOSE"
        }
    }else{
        // alert('Draw')
        counterDraw = counterDraw+1
        message.innerText = "DRAW"
    }
}

function attCounterPlayer(){
    counterC.innerText=""
    
    counterC.innerText=(counterPlayer)   
}

function newGame(){
    if(mainMenu.classList != 'hide'){
        mainMenu.classList.add('hide')
    }
   
    scoreArea.classList.remove('hide')
    inputArea.classList.remove('hide')

    battleArea.classList.add('hide')
}

function showStats(){

    modalStatus.classList.toggle('hide')
    console.log(counterPlayer)
    console.log(counterPc)
    console.log(counterDraw)

    total = counterPlayer + counterPc + counterDraw

    let playerWinRate =  (counterPlayer/total)*100
    let houseWinRate = (counterPc/total)*100
    let drawRate = (counterDraw/total)*100

    chartWin.style.height = playerWinRate + '%';
    chartLose.style.height = houseWinRate + '%';
    chartDraw.style.height = drawRate + '%';
}

function toggleRulesModal(){
    modalRules.classList.toggle('hide')
}

attCounterPlayer()