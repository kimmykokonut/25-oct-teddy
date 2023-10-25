function getResult() {
    result = [];
    for (let num = countBy; num<= countTo; num += countBy) {
        result.push(num)
    } return result
};


const countTo = parseInt(document.querySelector("input#input1").value);
const countBy = parseInt(document.querySelector("input#input2").value);

window.addEventListener("load", function() {
    const form = document.getElementById("count-form");
    form.addEventListener("submit", getResult);
});

