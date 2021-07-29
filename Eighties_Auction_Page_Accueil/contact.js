function W3docs()                                    
{ 
    var name = document.forms["RegForm"]["Nom"];
    var name = document.forms["RegForm"]["Prenom"];       
    var email = document.forms["RegForm"]["Email"];    
    var phone = document.forms["RegForm"]["Téléphone"];  
    var what =  document.forms["RegForm"]["message"];  
    
    if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }    
    if (address.value == "")                               
    { 
        alert("Prenom"); 
        address.focus(); 
        return false; 
    }        
     
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (phone.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        phone.focus(); 
        return false; 
    }    
    if (password.value == "")                        
    { 
        alert("Message"); 
        password.focus(); 
        return false; 
    }    
    
}