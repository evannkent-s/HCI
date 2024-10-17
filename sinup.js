function validateForm(){
    var username = document.getElementById("usernameTxt").value
    var password = document.getElementById("passwordTxt").value
    var confirm = document.getElementById("confirmTxt").value
    var dob = document.getElementById("dob").value
    var gender = document.getElementById("gender").value
    var terms = document.getElementById("terms").checked

    if(username == ""){
        alert("Username must be filled")
    }
    else if(username.length < 6){
        alert("Name must be more than 6 characters")
    }
    else if(password == ""){
        alert("Password must be filled")
    }
    else if(password.length < 6){
        alert("Password must be at least 6 characters")
    }
    else if(password!==confirm){
        alert("Doesn't match with the password inputted earlier")
    }
    else if(dob == ""){
        alert("date of birth must be filled")
    }
    else if(gender == ""){
        alert("Please select your gender")
    }
    else if(!terms){
        alert("Please read the tnc")
    }
}