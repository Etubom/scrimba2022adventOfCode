//Check if the given string is the correct represenattion of the 24hr clock
function validTime(str) {
    //  write code here.
      const firstSection = parseInt(str.slice(0,2));
      const secondSection = parseInt(str.slice(3,5));
     
      
      let firstIsTrue = false;
      let secondIsTrue = false;
     
     if(firstSection > -01 && firstSection < 24){
         firstIsTrue = true;
     } 
    if(secondSection > -01 && secondSection < 60){
        secondIsTrue = true;  
    }
    
   if(firstIsTrue && secondIsTrue){
     return true;
   }else{
     return false;
   }
}