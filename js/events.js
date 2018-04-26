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
    if(e.which)
  });
}

$(document).ready(function(){

// call functions here

});
