//   1111

document.getElementById('depositBtn').addEventListener('click',function(){ 
// 2222222 
var depositfield= document.getElementById('deposit-field')
var newdepositAmountString=depositfield.value 
var newdepositAmount=parseFloat(newdepositAmountString)

//   333333
var depositTotalElemant=document.getElementById('Deposit-total')
var previousdepositTotalString=depositTotalElemant.innerText
var previousdepositTotal=parseFloat(previousdepositTotalString)
// console.log(typeof previousdepositTotal)
// 444444444
var  currentDepositTotal=previousdepositTotal +newdepositAmount

depositTotalElemant.innerText=currentDepositTotal
// console.log(depositTotal)
// 55555
var blancetotalElement=document.getElementById('blance-total')
var previousBlancetotalString=blancetotalElement.innerText
var previousBlancetotal=parseFloat(previousBlancetotalString)

// 66666666666
var currentBlanceTotal=previousBlancetotal +  newdepositAmount
  blancetotalElement.innerText=currentBlanceTotal


//77777777
depositfield.value=""


})
