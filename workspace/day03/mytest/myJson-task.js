// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let product = [
    new Product("apple" , 500, 4),
    new Product("banana", 1300, 5),
    new Product("grape", 700, 17)
];

let productsJSON = JSON.stringify(product);



// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.

function total(productJSON, callback){
    let products = JSON.parse(productJSON);
    let totals = products.map(product => product.price * product.stock);
    console.log(totals);
    if(callback){
        callback(totals);
    }
}

total(productsJSON , totals => {totals.forEach(total => console.log(total))});