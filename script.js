function compute(){


     var Principal = document.getElementById("principal").value;
     var Rate = document.getElementById("rate").value;
     var Years= document.getElementById("years").value;
    
     //calling function to validate amount
    validate();

     //code block to get interest 

    Interest= (Principal*Years*Rate/100);
    

     //code to covert years to actual year
    var date=new Date();
    var present_year=date.getFullYear();
    var final_year=(parseInt(present_year)+ parseInt(Years));

    //code block to show message on submit
     var output="<br>If you deposit "+ Principal+
            ",<br>at an interest rate of "+ Rate +"%."+
            "<br>You will receive an amount of "+ Interest +
            ",<br>in the year "+ final_year
        document.getElementById("result").innerHTML=output
        console.log(output)
}

    //function to check principal amount
    function validate(){
    var amount= parseInt(document.getElementById("principal").value);
        if ((amount < 0) || (amount == 0)||(document.getElementById("principal").value == "")){
            alert("Enter a positive number");//shows aler message
            document.getElementById("principal").focus();//after clicking OK brings the focus to element
            javascript_abort();
        }
    }
    //function to display slider value

    function showSlider() {
    var input= document.getElementById("rate").value //gets the vaue onchange
    document.getElementById('slider').innerHTML = input //displays value to span
      console.log(input)
     }

     //function to abort JS execution in case of incorrect amount
     function javascript_abort(){
        throw new Error('Purpose of this fuction is to abort execution,it is not an error');
        }	
