function btnclick(val) {
    document.getElementById("output-text").value += val;
}

function btnclear() {
    document.getElementById("output-text").value = "";
}

function equalclick() {
    try {
        document.getElementById("output-text").value = eval(document.getElementById("output-text").value);
    } catch (error) {
        document.getElementById("output-text").value = "Error";
    }
}
