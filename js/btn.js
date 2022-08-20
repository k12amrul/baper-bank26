//  11111
document.getElementById('submit').addEventListener('click',function(){
    console.log("fffffff")
    //222
    var emailField=document.getElementById('useremail')
    var email=emailField.value
    console.log(email)
    //33
    var passwordFaield=document.getElementById('userpassword')
    var password=passwordFaield.value
    console.log(password)

    // 444
    if(email=== 'kamrul@gmail.com' && password=== '123'){
        window.location.href='bank.html'
    }else{
        console.log("invalid user")
    }

})