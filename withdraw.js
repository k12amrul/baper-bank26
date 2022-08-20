//1111
document.getElementById('withdrwBtn').addEventListener('click',function(){
    // 22
    var withdrawfield=document.getElementById("withdraw-field")
    var newWithdrawAmountString=withdrawfield.value
    var newWithdrawAmount=parseFloat(newWithdrawAmountString)
    //33333333333
    var withdrawTotalelement=document.getElementById('withdraw-total')
    var previousWithdrawTotalString=withdrawTotalelement.innerText
    var previousWithdrawTotal=parseFloat(previousWithdrawTotalString)
    
    // 44444444
    var currentWithdrawTotal=previousWithdrawTotal+ newWithdrawAmount
    withdrawTotalelement.innerText=currentWithdrawTotal
    //555
    // 5555
    var blancetotalElement=document.getElementById("blance-total")
    var previousBlancetotalString=blancetotalElement.innerText
    var previousBlancetotal =parseFloat(previousBlancetotalString)

    // console.log(previousBlancetotal)
    // 66666666
    var newBlancetotal=previousBlancetotal-newWithdrawAmount
    blancetotalElement.innerText=newBlancetotal

    

    //  777
    withdrawfield.value=""
 






})