// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array 객체에 담은 후 짝수만 출력
// let number = new Array(10).fill(0).map((number, i) => i+1);
// number.filter(number => number %2 ==0).forEach(number => console.log(number));


//  한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input ="삼공이사".split("");
// let result= input.map(input => hangle.indexOf(input)).join("");

// console.log(result);

//  정수를 한글로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "057".split("");
// let result = input.map(input => hangle[input]).join("");
// console.log(result);


// 1~100까지 합 출력
let number = new Array(100).fill(0).map((number, i)=> i+1);
let sum = number.reduce((accumulator,currentNumber) => accumulator + currentNumber);
console.log('sum: ' + sum);