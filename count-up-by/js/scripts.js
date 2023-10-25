function getResult(event) {
    event.preventDefault();
    const countTo = parseInt(document.querySelector("input#input1").value);
    const countBy = parseInt(document.querySelector("input#input2").value);
    let result = [];
    for (let num = countBy; num <= countTo; num += countBy) {
        result.push(num)
    }
    const div = document.querySelector("div#answer");
    const output = document.createElement("p");
    div.append(output);
    output.innerText = "Output: " + result.join(", ");
};

window.addEventListener("load", function () {
    const form = document.getElementById("count-form");
    form.addEventListener("submit", getResult);
    });