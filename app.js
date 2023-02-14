// *********************************** Chapter 9-11 ********************************************


// **************Question no.01**************

// var city = prompt("Please enter a city name: ");

// if(city === "karachi"){
//     document.write("Welcome to the city of lights!");
// }



// **************Question no.02**************

// var gender = prompt("Enter your Gender(M/F)");

// if(gender === "male"){
//     alert("Good Morning Sir!");
// }else if (gender === "female"){
//     alert("Good Morning Ma'am!")
// }


// **************Question no.03**************

// var signalColor = prompt("Please enter the color of the traffic signal");

// if (signalColor == "red") {
//     alert("Must Stop");
// } else if (signalColor == "yellow") {
//     alert("Ready to move");
// } else if (signalColor == "green") {
//     alert("Move now");
// } else {
//     alert("Invalid color");
// }


// **************Question no.04**************

//     var remainingFuel = prompt("Enter the remaining fuel in your car (in litres): ");

//     if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// **************Question no.05**************


    //a.
    /*
    var a =4;
    
    if (++a ===5){
    alert("given condition for variable a is true");
    }
    */

    //b.
    /*
    var b = 82;
    
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    */

    //c.
    /*
    var c =12;
    
    if (c++ ===13){
    alert("condition is true");
    }
    if (c ===13){
    alert("condition 2 is true"):
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c ===14){
    alert("condition 4 is true");
    }
    */

    //d.
    /*
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost ===laborCost + materialCost){
    alert("The cost equals");
    }
    */
    //e.
    /*
    
    if("car" < "cat"){
    alert("car is smaller than cat");
    }
    */
    //f.
    /*
    
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    */

// **************Question no.06**************

          /*
    var totalMark = prompt("enter here total mark");
    var obtainMark = prompt(" enter here obtain mark")
    var percentage = obtainMark / totalMark *100
    document.write("Mark Sheet" ,"<br>");
    document.write("total mark :" + totalMark ,"<br>");
    document.write("obtain mark :" + obtainMark ,"<br>");
    document.write("Percentage :" + percentage  +"%" ,"<br>");
    
    if (percentage >= 80) {
    document.write("Grade : A" ,"<br>");
    document.write("Remarks : Excellent","<br>");
    }
    else if (percentage >= 70) {
    document.write("Grade : B" ,"<br>");
    document.write("Remarks : Good","<br>");
    }
    else if (percentage >= 60) {
    document.write("Grade : B" ,"<br>");
    document.write("Remarks : You need to improve","<br>");
    }
    else
    {
    document.write("Grade : fail" ,"<br>");
    document.write("Remarks : Sorry","<br>");
    }   

// **************Question no.07**************



        // var secretNumber = 7;
        // var userGuess = prompt(" Guess the secret number from(1-10) ");

        // if (userGuess == secretNumber) {
        //     alert("Bingo! Correct answer");
        // } else if (userGuess == secretNumber +1) {
        //     alert("Close enough to the correct answer");
        // } else {
        //     alert("Wrong answer. Try again!");
        // }
 



// **************Question no.08**************

//          var numb = prompt("Enter your number");

//         if(numb / 3 ){
//                 alert("The number is divisible by 3")
//         }else {
//             console.log("The number is not divisible by 3");
//             }


// **************Question no.09**************

            // var number = prompt("Enter your number");

            // if(number % 2 == 0){ 
            //     document.write(number + " is an Even Number");
           
            // } else{
            //   document.write(number + " is an Odd Number")
            // }




// **************Question no.10**************

            // var temperature = prompt("Please enter the temperature");

            // if (temperature > 40) {
            //     document.write("It is too hot outside.");
            // } else if (temperature > 30) {
            //     document.write("The Weather today is Normal.");



            // } else if (temperature > 20) {
            //     document.write("Today's Weather is cool.");
            // } else if (temperature > 10) {
            //     document.write("OMG! Today’s weather is so Cool.")
            // }



// **************Question no.11**************

//             var firstNumber = prompt("Please enter the first number:");
//             var secondNumber = prompt("Please enter the second number:");
//             var operation = prompt("Please enter the operation (+, -, *, /, %):");

//             var result;
            
//             if (operation === "+") {
//                 result = firstNumber + secondNumber;
//             }else if (operation == '-') {
//                 result = firstNumber - secondNumber;
//             }
//             else if (operation == '*') {
//                 result = firstNumber * secondNumber;
//            }
//             else {
//                 result = firstNumber / secondNumber;
//               }
            
//             alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);



// *********************************** Chapter 12-13 ********************************************



// **************Question no.01**************

            // var x = prompt ("enter name");
            // var y=x.toUpperCase();
  
            // if (x==y) {
            // alert("uppercase");
            // }
            // else{
            // alert("lowercase")
            // }



// **************Question no.02**************

                // var a = +prompt("enter a integer");
                // var b = +prompt("enter a integer");
                
                // if (a > 0 && b > 0 && a > b) {
                //     document.write("The larger number is " + a );
                // } else if (a > 0 && b > 0 && a < b) {
                //     document.write("The larger number is " + b);
                // } else if (a === b && a > 0 && b > 0) {
                //     document.write("Both numbers are equal!")
                // } else {
                //     document.write("Please add an integer!");
                // }



// **************Question no.03**************

                // var num = +prompt("enter a number");
                
                // if (num > 0) {
                // alert("the number is positive");
                // }
                // else if (num < 0) {
                // alert(`the number is negative`);
                // } 
                // else {
                // alert(`the number is zero`);
                // }


// **************Question no.04**************

                // var vowel = prompt("enter an alphabet");
                
                // if (vowel == "a" || vowel == "e" || vowel == "i"|| vowel == "o" || vowel == "u") {
                // alert("True");
                // }
                // else {
                // alert(`false`);
                // }


// **************Question no.05**************

                // var passWord = prompt("enter a password");
                // var passWord2 = prompt("enter a password again");
                
                // if (passWord == passWord2) {
                // alert(`correct`);
                // }
                // else{
                // alert(`incorrect`);
                // }


// **************Question no.06**************

                // var greeting;
                // var hour= 13;

                // if (hour < 18) {
                // greeting = "Good day";
                // }
                // else{
                // greeting = "Good evening";
                // }
                // document.write(greeting);


// **************Question no.07**************

                // var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm)");

                // if (time >= 0000 && time < 1200) {
                // document.write("Good morning!");
                // } else if (time >= 1200 && time < 1700) {
                // document.write("Good afternoon!");
                // } else if (time >= 1700 && time < 2100) {
                // document.write("Good evening!");
                // } else if (time >= 2100 && time <= 2359) {
                // document.write("Good night!");
                // } else {
                // document.write("Invalid time entered.");
                // }



