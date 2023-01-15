
    
function newevent(){
    var li =document.createElement('li');
    var inputVal=document.getElementById('inputval').value;
    var t=document.createTextNode(inputVal);
    li.appendChild(t);
    if (inputVal==''){
        alert('Pls Write Something!');
    }
    else{
        document.getElementById('makelist').appendChild(li);
    }
    document.getElementById("inputval").value = "";
    var mynode = document.getElementsByTagName("LI");
    // var span=document.createElement('SPAN');
    // var txt=document.createTextNode('\u00D7');
    // span.appendChild(txt);
    // li.appendChild(span);
    function addquestion(){
        $('.quediv').clone().appendTo('#more');
    }
}