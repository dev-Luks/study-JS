//변수선언

//아이디
const id = document.querySelector('#id');  

//비밀번호
const pw1 = document.querySelector('#pswd1');
const pwMsg = document.querySelector('#password-lock');
const pwImg1 = document.querySelector('#pswd1_img1');

//에러 변수
const errorId = document.querySelector('#id-warning');
const errorPassword = document.querySelector('#password-warning');
const errorphoneNumber = document.querySelector('#phone-warning');

//핸드폰 번호변수
const mobile = document.querySelector('#input-phone-number');

// 이벤트
id.addEventListener("keyup", checkId);
pw1.addEventListener("keyup", checkPw);
mobile.addEventListener("keyup", checkPhoneNum);


//아이디 검사
function checkId() { 
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    errorId.style.color = "red";

    if(id.value.length < 1) {
        errorId.innerHTML = "필수 정보입니다.";
        errorId.style.display = "block";
    } else if(!idPattern.test(id.value)) {
        errorId.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        errorId.style.display = "block";
    } else {
        errorId.innerHTML = "멋진 아이디네요!";
        errorId.style.color = "#08A600";
        errorId.style.display = "block";
    }
}

//비밀번호

function checkPw() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if(pw1.value.length <1) {
        errorPassword.innerHTML = "필수 정보입니다.";
        pwMsg.style.display = "block";
        // pwMsgArea.style.paddingRight = "40px";
        // pwImg1.src = "m_icon_pass.png";
        errorPassword.style.display = "block";
    } else if(!pwPattern.test(pw1.value)) {
        errorPassword.innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        pwMsg.innerHTML = "사용불가";
        // pwMsgArea.style.paddingRight = "40px";
        errorPassword.style.display = "block";
        pwMsg.style.color = "red";
        pwMsg.style.display = "block";
        // pwImg1.src = "m_icon_not_use.png";
    } else {
        errorPassword.style.display = "none";
        pwMsg.innerHTML = "안전";
        // pwMsgArea.style.paddingRight = "40px";
        pwMsg.style.color = "#03c75a";
        pwMsg.style.display = "block";
        // pwImg1.src = "m_icon_safe.png";
    }
}


//핸드폰번호 함수

function checkPhoneNum() {
    var isPhoneNum = /([01]{2,})([01679]{1,})([0-9]{3,4})([0-9]{4})/;

    if(mobile.value.length < 1) {
        errorphoneNumber.innerHTML = "필수 정보입니다.";
        errorphoneNumber.style.display = "block";
    } else if(!isPhoneNum.test(mobile.value)) {
        errorphoneNumber.innerHTML = "형식에 맞지 않는 번호입니다.";
        errorphoneNumber.style.display = "block";
    } else {
        errorphoneNumber.style.display = "none";
    }   
}