function W3docs()                                    
{ 
    var name = document.forms["RegForm"]["Nom"];
    var surname = document.forms["RegForm"]["Prenom"];       
    var email = document.forms["RegForm"]["Email"];    
    var phone = document.forms["RegForm"]["Téléphone"];  
    var message =  document.forms["RegForm"]["message"];  
    
    if (nom.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        nom.focus(); 
        return false; 
    }    
    if (prenom.value == "")                               
    { 
        alert("Prenom."); 
      prenom.focus(); 
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
    if (message.value == "")                        
    { 
        alert("Message"); 
       message.focus(); 
        return false; 
    }    
    
}




    setTimeout(function(){
        popUp.classList.add('none');
    }, 3000)
}


document.querySelector("#bouton_retour");

retour.addEventListener('click',() =>{

     window.scrollTo({
         top: 0,
         left:0,
     })

})