// form validation using js start

function validateForm() {
    let name = document.myform.userName.value;
    let mail = document.myform.eMail.value;
    let msg = document.myform.message.value;
  
  
    
    if (name == "") {
      document.getElementById('usernameCheck').innerHTML = ("** Name must be filled ! ");
      return false
    }
    else if ((name.length < 3) || (name.length > 20)) {
      document.getElementById('usernameCheck').innerHTML = ("** Name must be between 3 - 20 character ! ");
      return false
    }
    else if (! isNaN(name)){
      document.getElementById('usernameCheck').innerHTML = ("** Only character is allowed ! ");
      return false
    }
  
  
     else if (mail == "") {
      document.getElementById('emailCheck').innerHTML = ("** Mail must be filled ! ");
      return false
    }
  
    else if (mail.indexOf('@') <=0 ) {
      document.getElementById('emailCheck').innerHTML = ("** Please insert valid mail (@)! ");
      return false
    }
  
    else if (mail.length < 5 || mail.length > 30) {
      document.getElementById('emailCheck').innerHTML = ("** Mail should be 5 - 30 character long ! ");
      return false
    }
  
    else if((mail.charAt(mail.length-4)!='.') || (mail.charAt(mail.length-3)!='.')){
      document.getElementById('emailCheck').innerHTML='** Please enter valid mail (.)'
      return false;
    }
  
    else if (msg == "") {
      document.getElementById('messageCheck').innerHTML = ("** Please write your message ! ");
      return false
    }
  
    else if (msg.length < 10 || msg.length > 200) {
      document.getElementById('messageCheck').innerHTML = ("** Message should be 10 -100 characters long ! ");
      return false
    }
  
  }
  
  
  // form validation end
  