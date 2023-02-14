// document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});
// $("#change").on("click",function(){getResult(changeToHangle)});
$("#change").click(e => getResult(changeToHangle));

function changeToHangle(number) {
    // const numbering = document.querySelector("div#round");
    const $numbering = $("div#round");
    // const resultTag = document.querySelector("#result");
    const $resultTag = $("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "", temp = "", check = false;

    if(isNaN(number) || number.charAt(0) == '.'){
        // resultTag.innerHTML = "숫자만 입력해주세요.";
        $resultTag.text("숫자만 입력해주세요.");
        // numbering.innerHTML = "4";
        $numbering.text("4");
        return;
    }

    if(number < 1) {
        result = "영";
    }

    for(let i in number) {
        temp = hangle[number.charAt(i)];

        if(i == 0 && result == "영"){
            continue;
        }

        if(!temp) {
            check = true;
            result += "점";
            continue;
        }

        result += temp;

        $numbering.text("3");
        
        if(check){
            $numbering.text("2");
        }
    }
    $resultTag.text(`${result}`);
}

function getResult(callback){
    // const input = document.querySelector("input[name='input']").value;
    const $input = $("input[name='input']").val();
    if(callback){
        callback($input);
    }
}