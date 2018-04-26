function getIt(){
  $("p").on('click',function(){
    alert('Hey!');
  });
}

function frameIt(){
  $("img").on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('form input').on('keydown', function(){
    if(key.which===71){
      alert('You have pressed the G key');
    }
  });
}

$(document).ready(function(){

// call functions here

});
