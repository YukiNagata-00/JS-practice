
let arry = ["../../images/torannpu-spade1.png", "../../images/torannpu-spade2.png","../../images/torannpu-spade3.png","../../images/torannpu-spade4.png","../../images/torannpu-spade5.png",
"../../images/torannpu-spade6.png","../../images/torannpu-spade7.png","../../images/torannpu-spade8.png","../../images/torannpu-spade9.png","../../images/torannpu-spade10.png","../../images/torannpu-spade11.png","../../images/torannpu-spade12.png","../../images/torannpu-spade13.png",
"../../images/torannpu-dia1.png", "../../images/torannpu-dia2.png","../../images/torannpu-dia3.png","../../images/torannpu-dia4.png","../../images/torannpu-dia5.png", 
"../../images/torannpu-dia6.png","../../images/torannpu-dia7.png","../../images/torannpu-dia8.png","../../images/torannpu-dia9.png","../../images/torannpu-dia10.png","../../images/torannpu-dia11.png","../../images/torannpu-dia12.png","../../images/torannpu-dia13.png",
"../../images/torannpu-clova1.png","../../images/torannpu-clova2.png","../../images/torannpu-clova3.png","../../images/torannpu-clova4.png","../../images/torannpu-clova5.png",
"../../images/torannpu-clova6.png","../../images/torannpu-clova7.png","../../images/torannpu-clova8.png","../../images/torannpu-clova9.png","../../images/torannpu-clova10.png","../../images/torannpu-clova11.png","../../images/torannpu-clova12.png","../../images/torannpu-clova13.png",
"../../images/torannpu-heart1.png","../../images/torannpu-heart2.png","../../images/torannpu-heart3.png","../../images/torannpu-heart4.png","../../images/torannpu-heart5.png",
"../../images/torannpu-heart6.png","../../images/torannpu-heart7.png","../../images/torannpu-heart8.png","../../images/torannpu-heart9.png","../../images/torannpu-heart10.png","../../images/torannpu-heart11.png","../../images/torannpu-heart12.png","../../images/torannpu-heart13.png",]



let cards = document.querySelectorAll(".cards");

//シャッフル関数に使う変数
let newArray = [];//シャッフルされた画像が入った配列
let k;
let c = 20;//枚数によって変化

let side = false;//表or裏

let picknmb1;
let picknmb2;
let count = 0;
let index = 0;
let str;
let card1;
let card2;
let itsnumber1;
let itsnumber2;




//シャッフル
for(let i = 0; i < 20;i++){
    k = Math.floor( Math.random() * c); 
    newArray.push(arry.splice(k,1)[0]); 
    c--;
}
console.log(newArray);

//クラス名を取得するカード
function afterClicked(ele){
            let gotClass = parseInt(ele.classList.item(0));//最初のクラス名を読み取る
            // console.log(gotClass);
            ele.src = newArray[gotClass];
            itsnumber = ele.classList.item(1);//２番目のクラス名を読み取る
            // console.log(itsnumber);
    return itsnumber;
}
//２枚のカードがあってるか判定する関数
function check(val1, val2, item1, item2){
    if(val1 === val2){//あってたら
        setTimeout(()=>{//カードを消したい
            item1.remove();
            item2.remove();
        }, 1000)
    }else{//違ったら裏返す
        setTimeout(()=>{
            item1.src = "../../images/card_back.png";
            item2.src = "../images/card_back.png";
        }, 1000);
        
    }
}
cards.forEach((el)=> {
    let elem = document.createElement('img'); // img要素を作る
    elem.src = newArray[index]; // シャッフルされた画像を順にパスにする
    // console.log(elem.outerHTML);
    let gap = document.createElement("div");//div要素を作る

    str = elem.outerHTML;//作った要素のHTMLを文字列に変換
    picknmb1 = str.replace(/[^0-9]/g, "");//数値をを取り出す
    picknmb2 = "its" + picknmb1;
    // console.log(picknmb2);

    //クラスに追加
    elem.classList.add(index);
    elem.classList.add(picknmb2);
    
    el.appendChild(elem);//子要素にする
    el.appendChild(gap);
    index++;
    //カードを裏側にする
    elem.src = "../images/card_back.png";

    elem.addEventListener("click", ()=>{//カードをクリックしたら
        count++;
        if(count === 1){ //一枚目
            card1 = elem;
            // console.log(card1);
            itsnumber1 = afterClicked(card1);
            
        }else{//２枚目
            card2 = elem;
            // console.log(card2);
            if(card2 === card1){
                alert("違うカードを選択してください");//同じカードを選択したらアラート
            }else{
                itsnumber2 = afterClicked(card2);
                check(itsnumber1, itsnumber2, card1, card2);
                count = 0;
            }
            
        }
        
    })
}
)
