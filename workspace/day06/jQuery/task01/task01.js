/* 
    task01.html
*/

// globalThis.temp;
let $temp;

function confirm() {
    // const input = document.querySelector("input").value;
    const $input = $('#input').val();
    // const trs = document.querySelectorAll("tbody tr");
    const $trs = $('tbody tr');

    let check = false;

    if($temp) {
        // globalThis.temp.style.background = "#fff";
        $temp.css('background','#fff');
        // globalThis.temp.style.background = "#fff";AAasz
        // globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
       $($temp.children().first()).text($($temp.children().first()).text().replace("★", ""));
    }

    $trs.each((i, tr) => {
        // let td = tr.firstElementChild;
        // console.log(tr);
        let $td = $(tr).children().first();
        if($td.text() == $input) {
            check = true;
            $temp = $(tr);
            $(tr).css('background',"#ef5350");
            $td.text(`★${$td.text()}`);
        }
    });

    if(!check) {
        alert("다시 시도해주세요.");
    }
}