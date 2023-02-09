// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product("apple", 500 , 3),
    new Product("banana", 700 , 13),
    new Product("grape", 1300 , 7)
];

let productsJSON = JSON.stringify(products);
console.log(productsJSON);

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
let file = require('fs');
// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// file.readFile('경로', '인코딩', '콜백함수')
// file.writeFile('shop.json', productsJSON , 'utf-8', function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("성공!");
//     }
// });

// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
file.readFile('shop.json', 'utf-8', function(error, content){
    if(error){
        console.log(error);
    }else{
        // console.log(content);
        let contents = JSON.parse(content);
        // console.log(contents);
        // console.log(contents[0]);
        let sum = {sumPrice: 0, sumStock: 0};
        contents.forEach(e => {sum.sumPrice += e.price; sum.sumStock += e.stock});

        file.writeFile('sum.json', JSON.stringify(sum),'utf-8', function(error){
            if(error){
                console.log(error);
            }else{
                console.log("성공!");
            }
        } )
    }
})





