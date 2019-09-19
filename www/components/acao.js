// This is a JavaScript file
$(document).ready(function(){
  $('.climaEnsolarado').hide();
  $('.climaNublado').hide();
  $('.climaChuvoso').hide();
 
});
  
  $(document).on("click", ".Ensolarado", function(){

    $('.climaEnsolarado').show();
    $('.climaChuvoso').hide();
    $('.climaNublado').hide();

  });
    $(document).on("click", ".Nublado", function(){

    $('.climaEnsolarado').hide();
    $('.climaChuvoso').hide();
    $('.climaNublado').show();
  });
    $(document).on("click", ".Chuvoso", function(){

    $('.climaEnsolarado').hide();
    $('.climaChuvoso').show();
    $('.climaNublado').hide();
  });