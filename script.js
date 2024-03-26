function validation(){
    if(document.Formfill.नाव.value=="") {
      document.getElementById("result").innerHTML="Enter नाव*"; 
      return false; 
    } 
    else if(document.Formfill.नाव.value.length<6) {
        document.getElementById("result").innerHTML="At least six letter*"; 
        return false; 
      } 
    else if(document.Formfill.ईमेल.value=="") {
        document.getElementById("result").innerHTML="Enter your ईमेल*"; 
        return false;
      } 
      
    else if(document.Formfill.पासवर्ड.value=="") {
        document.getElementById("result").innerHTML="Enter your पासवर्ड*"; 
        return false; 
      } 
    else if(document.Formfill.पासवर्ड.value.length<6) {
        document.getElementById("result").innerHTML="पासवर्ड must be 6-digits*"; 
        return false; 
      } 
    else if(document.Formfill.पुष्टीकरा.value=="") {
        document.getElementById("result").innerHTML="पासवर्ड पुष्टी करा*"; 
        return false; 
      } 
    else if(document.Formfill.पुष्टकरा.value !== document.Formfill.पासवर्ड.values) {
        document.getElementById("result").innerHTML="password does not match*"; 
        return false; 
      } 

}


