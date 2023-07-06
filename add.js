


function validacia() {
    const input1 = document.getElementById("input1");
    const input1Value = input1.value;

    const x = document.getElementById("input2");
    const input2Value = x.value;

    const y = document.getElementById("input3");
    const input3Value = y.value;

    const z = document.getElementById("input4");
    const input4Value = z.value;

    const g = document.getElementById("input5");
    const input5Value = g.value;

    if (isNaN(input1Value)) {
        // Remove non-number characters
        input1.value = input1Value.replace(/[^0-9]/g, '');
        document.getElementById("input1").style.border = "3px solid red";
        document.getElementById("inp1").innerHTML = "Woops! wrong format, numbers only.";
    } else if (input1.value == "" || input1.length == 0) {
        input1.style.border = "3px solid red";
    } else {
        document.getElementById("input1").style.border = "3px solid green";
        document.getElementById("inp1").innerHTML = "";
    }

    if (/[^a-zA-Z]/.test(input2Value)) {
        // Remove non-letter characters
        x.value = input2Value.replace(/[^a-zA-Z]/g, '');
        x.style.border = " 3px solid red";
        document.getElementById("inp2").innerHTML = "forgot name?";
    } else if (x.value == "" || x.length == 0) {
        x.style.border = "3px solid red";

    } else {
        document.getElementById("input2").style.border = "3px solid green";
        document.getElementById("inp2").innerHTML = "";
    }

    if (isNaN(input3Value)) {
        // Remove non-number characters
        y.value = input3Value.replace(/[^0-9]/g, '');
        document.getElementById("input3").style.border = "3px solid red";

    } else if (y.value == "" || y.length == 0) {
        y.style.border = "3px solid red";
    } else {
        document.getElementById("input3").style.border = "3px solid green";
    }

    if (isNaN(input4Value)) {
        // Remove non-number characters
        z.value = input4Value.replace(/[^0-9]/g, '');
        document.getElementById("input4").style.border = "3px solid red";

    } else if (z.value == "" || z.length == 0) {
        z.style.border = "3px solid red";
    } else {
        document.getElementById("input4").style.border = "3px solid green";
    }

    if (isNaN(input5Value)) {
        // Remove non-number characters
        g.value = input5Value.replace(/[^0-9]/g, '');
        document.getElementById("input5").style.border = "3px solid red";

    } else if (g.value == "" || g.length == 0) {
        g.style.border = "3px solid red";
    } else {
        document.getElementById("input5").style.border = "3px solid green";
    }



    return false;

}




