function btnclick(val1){
document.getElementById("output-text").value=document.getElementById("output-text").value+val1;

}
function btnclear(){
    document.getElementById("output-text").value="";
}

   

function equalclick(){
    var text=document.getElementById("output-text").value
    var result=eval(text);
    document.getElementById('output-text').value=result;
 }

