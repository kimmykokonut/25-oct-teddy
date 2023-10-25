function getResult(event) {
    event.preventDefault();
    const countTo = parseInt(document.querySelector("input#input1").value);
    const countBy = parseInt(document.querySelector("input#input2").value);
    const div = document.querySelector("div#answer");
    const output = document.createElement("p");
    div.append(output);
    
    if (countBy < 0 || countTo < 0) {
        output.innerText = "Error, no negging allowed";
    } else if (countTo < countBy) {
        output.innerText = "Error, can't do that!!";
    } else if (document.querySelector("input#input2").value === "" || document.querySelector("input#input1").value === "") {
        output.innerText = "You didn't enter any values!";
    } else {
        let result = [];
        for (let num = countBy; num <= countTo; num += countBy) {
            result.push(num)
        }
        output.innerText = "Output: " + result.join(", ");
        }   
    };

window.addEventListener("load", function () {
    const form = document.getElementById("count-form");
    form.addEventListener("submit", getResult);
    });