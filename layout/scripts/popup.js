$(document).ready(function(){
 
  setTimeout(showmodal, 80000);
  function showmodal(){
      var already_show = sessionStorage.getItem('alreadyShow');
      if(already_show != 'alredy shown'){
          sessionStorage.setItem('alreadyShow','alredy shown');
          $("#myModal").show();}
          else{
              console.log(already_show);
          };
 };
 
 document.querySelector(".close").addEventListener("click", function(){
     document.querySelector(".modal").style.display = "none";
   });
 })
 


 