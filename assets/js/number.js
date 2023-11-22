let amountElement = document.getElementById('number');
let amount = amountElement.value;

let render = (amount) => {
    amountElement.value =amount
}
// Nhấn cộng sản phẩm
let handlePlus = () => {
    amount++ 
    render(amount);
}
let handleNegv = () => {
    amount-- 
    render(amount);
}

let handlePlus1 = () => {
    amount++ 
    render(amount);
}
let handleNegv1 = () => {
    amount-- 
    render(amount);
}
let handlePlus2 = () => {
    amount++ 
    render(amount);
}
let handleNegv2 = () => {
    amount-- 
    render(amount);
}
amountElement.addEventListener('input', () => {
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount) || amount == 0)?1:amount;
    render(amount);
});