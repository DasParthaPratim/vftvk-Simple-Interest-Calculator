function compute(){


     var Principal = document.getElementById("principal").value;
     var Rate = document.getElementById("rate").value;
     var Years= document.getElementById("years").value;

    Interest= (Principal*Years*Rate/100);

     //code to covert years to actual year
    var date=new Date();
    var present_year=date.getFullYear();
    var final_year=(parseInt(present_year)+ parseInt(Years));

     var output="If you deposit "+ Principal +
            " at an interest of "+ Rate +"%"+
            " you will receive an amount of "+ Interest +
            " in the year "+ final_year
        document.getElementById("result").innerHTML=output
        console.log(output)
}

    //function to check principal amount
    function validate(){
        var amount= document.getElementById("principal");
        if ((amount < 0) || (amount = 0)){
            alert("Enter a Postive number");
            document.getElementById("principal").focus;
        }
    }

    //function to display slider value

    function showSlider() {
    var input= document.getElementById("rate").value //gets the vaue onchange
    document.getElementById('slider').innerHTML = input //displays value to span
      console.log(input)
     }