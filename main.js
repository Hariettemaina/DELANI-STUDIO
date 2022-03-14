$(document).ready(function(){
 $('#design').click(function(){
     $('#design-content').toggle()
     
 });

});

$(document).ready(function(){
    $('#dev').click(function(){
        $('#dev-content').toggle()
        
    });
});

$(document).ready(function(){
    $('#product').click(function(){
        $('#product-content').toggle()
       
    });
});

$(document).ready(function(){
    $('#overlay4').mouseenter(function(){
        $('.portfolio-text').filter('#wrk4').show('slow')
    }).mouseleave(function() {   
    $('#wrk4').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay3').mouseenter(function(){
        $('.portfolio-text').filter('#wrk3').show('slow')
    }).mouseleave(function() {   
    $('#wrk3').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay2').mouseenter(function(){
        $('.portfolio-text').filter('#wrk2').show('slow')
    }).mouseleave(function() {   
    $('#wrk2').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay1').mouseenter(function(){
        $('.portfolio-text').filter('#wrk1').show('slow')
    }).mouseleave(function() {   
    $('#wrk1').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay5').mouseenter(function(){
        $('.portfolio-text').filter('#wrk5').show('slow')
    }).mouseleave(function() {   
    $('#wrk5').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay6').mouseenter(function(){
        $('.portfolio-text').filter('#wrk6').show('slow')
    }).mouseleave(function() {   
    $('#wrk6').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay7').mouseenter(function(){
        $('.portfolio-text').filter('#wrk7').show('slow')
    }).mouseleave(function() {   
    $('#wrk7').hide('slow');
   
       
    });
})

$(document).ready(function(){
    $('#overlay8').mouseenter(function(){
        $('.portfolio-text').filter('#wrk8').show('slow')
    }).mouseleave(function() {   
    $('#wrk8').hide('slow');
   
       
    });
})

$("#submit").click(function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name == ""){
      alert("enter your name")
    } 
    else if(email == ""){
      alert("enter your email")
    }
    else if(message == ""){
      alert("write a message")
    }
    else {
     alert(name + " " + "we have received your message. Thank you for reaching out to us.")
    }
  })



