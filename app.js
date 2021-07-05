const LogIn = document.getElementById("log_in_btn");

LogIn.addEventListener('click', function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const TransectionForm = document.getElementById('TransectionForm');
    const LoginArea = document.getElementById("Login_Area");

    if(email == "" || password == ""){
        alert("Give your Email And Password");
        LoginArea.style.display = "block";
        TransectionForm.style.display = "none";
    }else{
        LoginArea.style.display = "None";
        TransectionForm.style.display = "block";
    }
})


// Deposite Button Handler 
const depositeBtn = document.getElementById("depositeBtn");

depositeBtn.addEventListener('click', function(){
    const AmountOfDeposite = GetInputNumber('deposite_input')

    UpdateSpantext("dipositeAmount", AmountOfDeposite)
    UpdateSpantext("TotalAmount", AmountOfDeposite)

    document.getElementById('deposite_input').value = "";

})
// WithDraw button handler 
const withdrawBtn = document.getElementById("withdrawBtn");

withdrawBtn.addEventListener('click', function(){
    const AmountOfWithdraw = GetInputNumber("withdraw_input")
    UpdateSpantext('WithdrawAmount', AmountOfWithdraw);

    
})

// Common funtion for deposite and withdraw 
function UpdateSpantext(id, Amount) {
    const CurrentAmount = document.getElementById(id).innerText;
    const CurrentBalance = parseFloat(CurrentAmount);
    const TotalBalance = Amount + CurrentBalance;
    document.getElementById(id).innerHTML = TotalBalance;
}

function GetInputNumber(id) {
    const Input = document.getElementById(id).value;
    const number = parseFloat(Input);

    return number;
}


