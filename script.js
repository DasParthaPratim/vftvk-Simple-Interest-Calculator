function compute(){


     var Principal = document.getElementById("principal").value;
     var Rate = document.getElementById("rate").value;
     var Years= document.getElementById("years").value;
    
     //calling function to validate amount
    validate();
    //code block to get final amount with interest 

    interest= (Principal*Years*Rate/100);
    var final_amount=(parseInt(Principal)+parseInt(interest));

     //code to covert years to actual year
    var date=new Date();
    var present_year=date.getFullYear();
    var final_year=(parseInt(present_year)+ parseInt(Years));


    //code block to show message on submit
     var output="If you deposit "+ Principal +","+ "</br>"
            " at an interest of "+ Rate +"%."+"</br>"
            " You will receive an amount of "+ final_amount + "</br>"
            " in the year "+ final_year
        document.getElementById("result").innerHTML=output
        console.log(output)
}
    //function to check principal amount
    function validate(){
    var amount= parseInt(document.getElementById("principal").value);
        if ((amount < 0) || (amount == 0)){
            alert("Enter a Postive number");//shows aler message
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
        throw new Error('Pupose of this fuction is to abort execution,not an error');
        }