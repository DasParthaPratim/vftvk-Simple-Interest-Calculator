function compute()
{
    var Principal = document.getElementById("principal").value;
    var Rate = document.getElementById("rate").value;
    var Years= document.getElementById("years").value;

    //function to check principal amount

    if(Principal < 0){
        alert("Enter a positive number")
        focus.principal;
    }else{
        
    }

    var Interest= (principal*years*rate/100);

    //code to covert years to actual year

    var date=new Date();
    var present_year=date.getFullYear();
    var final_year=new Date(present_year+years);

    //function to display slider value

    document.getElementById("rate").onchange = function() {
    showSlider()
    };

    function showSlider() {
      var input= document.getElementById("rate").value //gets the vaue onchange
    document.getElementById('slider').innerHTML = input //displays value to span
      console.log(input)
        }


        //code to show the text
        document.getElementById("submit").onclick=function(){
            showOutput()
        }

        function showOutput(){
            var output="If you deposit "+principal+
            "at an interest of "+Rate+"%"+
            "you will receive an amount of "+Interest+
            "in the year"+final_year
        document.getElementById("result").innerHTML=output
        console.log(output)
        }
        
        

    
}
        