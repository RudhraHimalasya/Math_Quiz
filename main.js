function adduser() {
    var name1=document.getElementById("input1").value;
    var name2=document.getElementById("input2").value;
    
    if (name1 != "" && name2 != ""){

        localStorage.setItem("player1" , name1);
        localStorage.setItem("player2" , name2);
    
        window.location="game.html";

        var nn1 = localStorage.getItem(name1);
        document.getElementById("p1name").innerHTML  = nn1;
 
    }
    else if(name1 == "" && name2 == ""){
        console.log("it is working");
        document.getElementsByClassName("hh")[0].innerHTML="TYPE THE USERNAME PLEASE";
        document.getElementsByClassName("hh")[1].innerHTML="TYPE THE USERNAME PLEASE";
    }

}
var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");

document.getElementById("number1").innerHTML=player1_name + " : ";
document.getElementById("number2").innerHTML=player2_name + " : ";
    
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>" ; 

    input_box = "<br> ANSWER : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> CHECK </button>";

    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML= row;
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    console.log(row);
}
function send1() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) + parseInt(number2);
    question_number = "<h4>" + number1 + " + " + number2 + "</h4>" ; 

    input_box = "<br> ANSWER : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> CHECK </button>";

    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML= row;
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    console.log(row);
}
function send2() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) - parseInt(number2);
    question_number = "<h4>" + number1 + " - " + number2 + "</h4>" ; 

    input_box = "<br> ANSWER : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> CHECK </button>";

    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML= row;
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    console.log(row);
}
function send3() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>" ; 

    input_box = "<br> ANSWER : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> CHECK </button>";

    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML= row;
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    console.log(row);
}
function send4() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) / parseInt(number2);
    question_number = "<h4>" + number1 + " &#x2A38; " + number2 + "</h4>" ; 

    input_box = "<br> ANSWER : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> CHECK </button>";

    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML= row;
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    console.log(row);
}

var player1_score = 0;
var player2_score = 0;

var question_turn = "player1";
var answer_turn = "player2";



function check() {
    get_answer = document.getElementById("input_check_box").value;
    console.log(get_answer);
    if (get_answer == "player1"){
        if(answer_turn == "player1"){
            update_player1_score = player1_score +2;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else {
            update_player2_score = player2_score +2;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    } 
        if (question_turn == "player1")
        {
            question_turn == "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_score ;
        }
        else{
            question_turn == "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_score ;
        }
        if (question_turn == "player2")
        {
            question_turn == "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_score ;
        }
        else{
            question_turn == "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_score ;
        }

}