// let arry = ["../images/torannpu-spade1.png", "../images/torannpu-spade2.png","../images/torannpu-spade3.png","../images/torannpu-spade4.png","../images/torannpu-spade5.png",
// "../images/torannpu-spade6.png","../images/torannpu-spade7.png","../images/torannpu-spade8.png","../images/torannpu-spade9.png","../images/torannpu-spade10.png","../images/torannpu-spade10j.png","../images/torannpu-spade10q.png","../images/torannpu-spade10k.png",
// "../images/torannpu-dia1.png", "../images/torannpu-dia2.png","../images/torannpu-dia3.png","../images/torannpu-dia4.png","../images/torannpu-dia5.png", 
// "../images/torannpu-dia6.png","../images/torannpu-dia7.png","../images/torannpu-dia8.png","../images/torannpu-dia9.png","../images/torannpu-dia10.png","../images/torannpu-dia10j.png","../images/torannpu-dia10q.png","../images/torannpu-dia10k.png",
// "../images/torannpu-clova1.png","../images/torannpu-clova2.png","../images/torannpu-clova3.png","../images/torannpu-clova4.png","../images/torannpu-clova5.png",
// "../images/torannpu-clova6.png","../images/torannpu-clova7.png","../images/torannpu-clova8.png","../images/torannpu-clova9.png","../images/torannpu-clova10.png","../images/torannpu-clova10j.png","../images/torannpu-clova10q.png","../images/torannpu-clova10k.png",
// "../images/torannpu-heart1.png","../images/torannpu-heart2.png","../images/torannpu-heart3.png","../images/torannpu-heart4.png","../images/torannpu-heart5.png",
// "../images/torannpu-heart6.png","../images/torannpu-heart7.png","../images/torannpu-heart8.png","../images/torannpu-heart9.png","../images/torannpu-heart10.png","../images/torannpu-heart10j.png","../images/torannpu-heart10q.png","../images/torannpu-heart10k.png"]

let arry1 = new Array();
for(let i = 0, n = 1; i < 10; i++, n++){
    arry1[i] = "../images/torannpu-spade"+n+".png";
    
}
let arry2 = new Array();
for(let i = 0, n = 1; i < 10; i++, n++){
    arry2[i] = "../images/torannpu-dia"+n+".png";
}
let arry3 = new Array();
for(let i = 0, n = 1; i < 10; i++, n++){
    arry3[i] = "../images/torannpu-clova"+n+".png";
}
let arry4 = new Array();
for(let i = 0, n = 1; i < 10; i++, n++){
    arry4[i] = "../images/torannpu-heart"+n+".png";
}
let arry5 =["../images/torannpu-spade10j.png","../images/torannpu-spade10q.png","../images/torannpu-spade10k.png","../images/torannpu-dia10j.png","../images/torannpu-dia10q.png","../images/torannpu-dia10k.png",
"../images/torannpu-clova10j.png","../images/torannpu-clova10q.png","../images/torannpu-clova10k.png","../images/torannpu-heart10j.png","../images/torannpu-heart10q.png","../images/torannpu-heart10k.png"];
let arry =[];
arry = arry1.concat( arry2 ,arry3 ,arry4, arry5);
console.log(arry);
console.log(arry.length);

let start = document.getElementById("start");
let onemore= document.getElementById("onemore");
let stand = document.getElementById("stand");
let hit = document.getElementById("hit");
let player_card = document.querySelector(".player-card-area");
let dealer_card = document.querySelector(".dealer-card-area");
let result = document.getElementById("result-display");
let dealer_sum_display = document.querySelector(".dealer-sum");
let player_sum_display = document.querySelector(".player-sum");

//シャッフル関数に使う変数
let newArray = [];//シャッフルされた画像が入った配列
let k;
let c = 52;//枚数によって変化

let dealerArray =[];
let redealerArray = [];
let playerArray = [];
let replayerArray = [];
let v;
let i;
let index = 0;
let index2 = 0

let player_sum = 0;
let player_sum2 = 0;
let dealer_sum = 0;
let dealer_sum2 = 0;


let addcard;
let player_f;
let dealer_f;

onemore.classList.add("chosen");
stand.classList.add("chosen");
hit.classList.add("chosen");
//配列から数値だけを取り出して新しい配列を作る関数
function NmfromArray (array){
        let reArry = [];
        array.forEach(e => {
        let el = e.replace(/[^0-9]/g, "");
        let parsedNm = parseInt(el);
        reArry.push(parsedNm);
    })
    return reArry;
}
//プレイヤーのカードにエースがある時、1または１１として数える関数
function player_oneOrElev( ){
    if(replayerArray[index2] === 1){
        player_sum += replayerArray[index2];
        player_sum2 += 11;
        index2++;
    }else{
        player_sum += replayerArray[index2];
        player_sum2 += replayerArray[index2];
        index2++;
    }
}
//ディーラーのカードにエースがある時、1または１１として数える関数
function dealer_oneOrElev(){
    if(redealerArray[index2] === 1){
        dealer_sum += redealerArray[index2];
        dealer_sum2 += 11;
        index2++;
        
    }else{
        dealer_sum += redealerArray[index2];
        dealer_sum2 += redealerArray[index2];
        index2++;
    }
}
//合計数の表示に関する関数
function sumdisplay(sumdis, sum1, sum2) {
    if(sum1 === sum2){
        sumdis.innerText = sum1;
    }else{
        sumdis.innerText = sum1 + "or" + sum2;
    }
}
//勝敗を判定する関数
function winOrLose (){
    if(dealer_f > player_f){
        result.innerText = "YOU LOSE";
        onemore.classList.remove("chosen");
    }else if(dealer_f < player_f){
        result.innerText = "YOU WIN";
        onemore.classList.remove("chosen");
    }else if(dealer_f === player_f){
        result.innerText = "DRAW";
        onemore.classList.remove("chosen");
    }
}

////スタートボタン-------------------------------------------------
start.addEventListener("click", ()=>{//スタートボタンをおす
    start.classList.add("chosen");//スタートボタンが消える
    stand.classList.remove("chosen");//スタンドボタンとヒットボタンが表示
    hit.classList.remove("chosen");
    
    for(let i = 0; i < 52;i++){//シャッフルして新しい配列に入れる
        k = Math.floor( Math.random() * c); 
        newArray.push(arry.splice(k,1)[0]); 
        c--;
    }
    //配列を二つに分ける
    dealerArray = newArray.filter((v,i) => {
    return i % 2 === 0;
    });
    
    playerArray = newArray.filter((v, i) => {
        return i % 2 === 1;
    });

    redealerArray = NmfromArray(dealerArray);//それぞれの配列から数値だけを抽出し、新しい配列をつくる
    console.log(redealerArray);

    replayerArray = NmfromArray(playerArray);
    console.log(replayerArray);


    for (let i = 0; i < 2; i++){//最初のカード２枚のための子要素を作成
        let player_firstcard = document.createElement("img");
        player_firstcard.className = "player_firstcard";
        player_card.appendChild(player_firstcard);
    }
    for (let i = 0; i < 2; i++){
        let dealer_firstcard = document.createElement("img");
        dealer_firstcard.className = "dealer_firstcard";
        dealer_card.appendChild(dealer_firstcard);
    }


    document.querySelectorAll(".player_firstcard").forEach(element => {//プレイヤーの最初２枚
        element.src = playerArray[index]; 
        index ++;
        player_oneOrElev();
        sumdisplay(player_sum_display, player_sum, player_sum2,);
        player_f = player_sum2;
    });

    let dealer_firstcard = document.querySelectorAll(".dealer_firstcard");
    dealer_card.lastElementChild.src = "../images/card_back.png";//ディーラーの２枚目のカード
    let first = dealer_card.firstElementChild;
    first.src = dealerArray[index];  //画像 
    index++;
    
    dealer_oneOrElev();
    sumdisplay(dealer_sum_display, dealer_sum, dealer_sum2);
    console.log(dealer_sum, dealer_sum2);
    
})


////スタンドボタン-----------------------------------------------------------
stand.addEventListener("click", ()=> {
    stand.classList.add("chosen");
    hit.classList.add("chosen");
    dealer_card.lastElementChild.src = dealerArray[index];//２枚目を裏返す
    index++;

    dealer_oneOrElev();
    sumdisplay(dealer_sum_display, dealer_sum, dealer_sum2);

    if(dealer_sum > 21){
        result.innerText = "YOU WIN";
        onemore.classList.remove("chosen");
    }else if(dealer_sum2 > 21){
        dealer_f = dealer_sum;
        dealer_sum2 = dealer_sum;
    }else if(dealer_sum2 <= 21){
        if(dealer_sum2 >= 17){
            dealer_f = dealer_sum2;
            dealer_sum = dealer_sum2;
        }else{
            let timer = setInterval(() => {//和が17を越えるまで追加
                    addcard = document.createElement("img");
                    addcard.src = dealerArray[index];
                    index++;
                    dealer_oneOrElev();
                    dealer_card.appendChild(addcard);
                    sumdisplay(dealer_sum_display, dealer_sum, dealer_sum2);
                    if(dealer_sum >= 17){clearInterval(timer);
                        if(dealer_sum > 21){
                            result.innerText = "YOU WIN";
                            onemore.classList.remove("chosen");
                            dealer_sum2 = dealer_sum;
                        }else if(dealer_sum <= 21){
                            dealer_f = dealer_sum;
                            dealer_sum2 = dealer_sum;
                        }else if(dealer_sum2 <= 21){
                            dealer_f = dealer_sum2;
                            dealer_sum = dealer_sum2;
                        }
                        sumdisplay(dealer_sum_display, dealer_sum, dealer_sum2);
                        //勝ち負け判定
                            winOrLose();
                        }
                    }, 1000);
        }
    }
    sumdisplay(dealer_sum_display, dealer_sum, dealer_sum2);
    //勝ち負け判定
    winOrLose();
    
    
    
})
//hitボタン---------------------------------------------------------------------
hit.addEventListener("click", () => {
    let player_addcard = document.createElement("img");
    player_card.appendChild(player_addcard);
    player_addcard.src = playerArray[index];
    index++;
    player_oneOrElev();

    if(player_sum > 21){
        result.innerText = "YOU LOSE";
        onemore.classList.remove("chosen");
        stand.classList.add("chosen");
        hit.classList.add("chosen");
    }else if(player_sum2 > 21){
        player_f = player_sum;
        player_sum2 = player_sum;
    }else if(player_sum2 <= 21){
        player_f = player_sum2;
        player_sum = player_sum2;
    }
    sumdisplay(player_sum_display, player_sum, player_sum2);
})

//onemoreボタン---------------------------------------------------------------
onemore.addEventListener("click", ()=>{
    document.location.reload();
    setTimeout(() => {
        start.click();//機能しない
    }, 1000);
    
})

