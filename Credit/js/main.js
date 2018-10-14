function Selector(event) {
    var elem = document.querySelector(event);
    return elem;
}
var price = Selector(".price");
var tetbiqBtn = Selector(".search");
var payment = document.querySelectorAll(".firstPayment");
var options=document.querySelectorAll('[name="options"]');
var month3=Selector(".month3");
var month6=Selector(".month6");
var month9=Selector(".month9");
var month12=Selector(".month12");
var percent=1.2;
tetbiqBtn.addEventListener("click", function () {

    var money=price.value *percent;
    var firstPayment = money*0.2;
    for (var item in payment) {
        payment[item].innerText = firstPayment + " AZN"
    }
    var geriQalanBorc=money-firstPayment;
    var for3month=geriQalanBorc/3;
    month3.innerText=Math.floor(for3month)+" AZN"
    var for6month=geriQalanBorc/6;
    month6.innerText=Math.floor(for6month)+" AZN"
    var for9month=geriQalanBorc/9;
    month9.innerText=Math.floor(for9month)+" AZN"
    var for12month=geriQalanBorc/12;
    month12.innerText=Math.floor(for12month)+" AZN"
})
