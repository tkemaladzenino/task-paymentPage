



function validacia() {
    var input1 = document.getElementById("input1").value;
    var pattern = /^[0-9]+$/;
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");
    var input5 = document.getElementById("input5");



    if (input1.match(pattern)) {

        document.getElementById("input1").style.border = "2px solid green";
        document.getElementById("inp1").innerHTML = "";

    } else {

        document.getElementById("inp1").innerHTML = "Woops! wrong format, numbers only.";
        document.getElementById("input1").style.border = "2px solid red";

    }


    if (input2.value == "" || input2.length == 0) {
        input2.style.border = "2px solid red";
        document.getElementById("inp2").innerHTML = "Forgot name?";
    } else {
        input2.style.border = " 2px solid green";
        document.getElementById("inp2").innerHTML = "";
    }

    if (input3.value == "" || input3.length == 0) {
        input3.style.border = "2px solid red";
    } else {
        input3.style.border = "2px solid green";
    }
    if (input4.value == "" || input4.length == 0) {
        input4.style.border = "2px solid red";

    } else {
        input4.style.border = "2px solid green";
    }
    if (input5.value == "" || input5.length == 0) {
        input5.style.border = "2px solid red";

    } else {
        input5.style.border = "2px solid green";
    }

    return false;

}




