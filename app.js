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

const depositeBtn = document.getElementById("depositeBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

depositeBtn.addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite_input').value;
    const AmountOfDeposite = parseFloat(depositeInput);
    const CurrentDeposite = document.getElementById('dipositeAmount').innerText;
    const AmountOfCurrentDeposite = parseFloat(CurrentDeposite);
    const totalDeposite = AmountOfCurrentDeposite + AmountOfDeposite
    
    document.getElementById('dipositeAmount').innerHTML = totalDeposite;
    document.getElementById('deposite_input').value = "";

})

withdrawBtn.addEventListener('click', function(){

})

