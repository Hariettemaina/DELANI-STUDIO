$(document).ready(function(){
 $('#design').click(function(){
     $('#design-content').slideToggle()
     $('#hidden-content1').slideToggle()
 
 });

});

$(document).ready(function(){
    $('#dev').click(function(){
        $('#dev-content').slideToggle()
        $('.hidden-content2').slideToggle()
    });
});

$(document).ready(function(){
    $('#product').click(function(){
        $('#product-content').slideToggle()
        $('.hidden-content3').slideToggle()
    });
});