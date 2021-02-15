
function compute()
{
     Principal = document.getElementById("principal").value;
     Rate = document.getElementById("rate").value;
     Years= document.getElementById("years").value;

     Interest= (principal*years*rate/100);

    //code to covert years to actual year
    var date=new Date();
    var present_year=date.getFullYear();
    var final_year=new Date(present_year+years);

        //code to show the text
        document.getElementById("submit").onclick=function(){
            showOutput()
        }

        function showOutput(){
            var output="If you deposit "+ Principal+
            "at an interest of "+Rate+"%"+
            "you will receive an amount of "+Interest+
            "in the year"+final_year
        document.getElementById("result").innerHTML=output
        console.log(output)
        }
        
}
   //function to check principal amount
    function validate(){
        if ((Principal < 0) || (Principal = 0)){
            alert("Enter a Postive number");
            document.getElementById("principal").focus;
        }else{
            break;
        }
    }
        
    //function to display slider value

    function showSlider() {
    var input= document.getElementById("rate").value //gets the vaue onchange
    document.getElementById('slider').innerHTML = input //displays value to span
      console.log(input)
        }