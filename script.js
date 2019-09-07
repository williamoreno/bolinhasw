$(document).ready(function(){
    
    $('.red').click(function(){
         $(this).fadeOut();           
       });            
    
    
    $('.green').click(function(){
         $('.blue').hide();           
       });            
    
   $('.yellow').click(function(){
         $('.blue').slideToggle('slow');          
         $('.green').hide(); 
   });            
     
    $('.blue').click(function(){
         $('.blue, .green ,.red,.yellow ').slideToggle('show')();          
        
   });            
    
    
});
            
