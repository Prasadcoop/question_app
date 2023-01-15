
function Add_option(){
    var li =document.createElement('li');
    
    var input=document.createElement('input');
    input.setAttribute('id','opt')
    li.appendChild(input);
    input.type='radio';
    var Option=document.getElementById("option").value;
    var tnode=document.createTextNode(Option);
    li.appendChild(tnode);
    if (Option==''){
        // alert('Pls Write Something!');
        document.getElementById('option-list').appendChild(li);
        
    }
    else{
        document.getElementById('option-list').appendChild(li);
    }
    document.getElementById('option').value='';
    var mynode=document.getElementsByTagName('INPUT');
    
}

//add new div question-bank
var count = 1; 
function NewQuestion(){
    

    let divs = document.getElementsByClassName('question-bank');
    
    
    var i=divs.length ;
    
    var newdiv = document.createElement('div');
    
    newdiv.class= 'question1';

    document.getElementById('block1').appendChild(newdiv);


    var h2=document.createElement('h2');
    var input1=document.createElement('input');
    var add=document.createElement('input');
    var remove =document.createElement('input');
    input1.type='text';
    add.type='submit';
    remove.type='submit';
    newdiv.appendChild(h2);
    newdiv.appendChild(input1);
    newdiv.appendChild(add);
    newdiv.appendChild(remove);

    newdiv.setAttribute('class','questionbank');
    newdiv.setAttribute('id','questionbank');
    input1.setAttribute('id','question');
    add.setAttribute('class','btn');
    add.setAttribute('onclick','NewQuestion()');
    add.setAttribute('value','Add');
    remove.setAttribute('class','btn');
    remove.setAttribute('onclick','RemoveQuestion()');
    remove.setAttribute('value','Remove');
    h2.setAttribute('id','count'+i);
    h2.setAttribute('class','count');
    

    const element = document.getElementById("count"+i);
    element.innerHTML=i;
    
    //show option
    var ol=document.createElement('ol');
    ol.setAttribute('id','option-list');
    ol.type='A';


    // Add Option
    var div_opt=document.createElement('div');
    


    var input_opt=document.createElement('div');
    var user_input=document.createElement('input');
    var add_opt=document.createElement('input');
    var rmv_opt=document.createElement('input');

    newdiv.appendChild(div_opt);
    div_opt.appendChild(ol);
    div_opt.appendChild(input_opt);
    
    input_opt.appendChild(user_input);
    input_opt.appendChild(add_opt);
    input_opt.appendChild(rmv_opt);

    user_input.type='text';
    add_opt.type='submit';
    rmv_opt.type='submit';
    
    div_opt.setAttribute('class','option');
    user_input.setAttribute('id','option');
    add_opt.setAttribute('class','btn');
    add_opt.setAttribute('onclick','Add_option()');
    add_opt.setAttribute('value','Add');
    rmv_opt.setAttribute('class','btn');
    rmv_opt.setAttribute('onclick','RemoveQuestion(this)');
    rmv_opt.setAttribute('value','Remove');
    
   

}
function RemoveQuestion(){
    // var rmv_divs = document.getElementById("question-bank1");
    
    // var parent = rmv_divs.parentNode;
    
    // // parent.removeChild(rmv_divs);
    
    var rmvs=document.getElementsByClassName('btn');
    for (var i = 0; i < rmvs.length; i++) {
        rmvs[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('div.questionbank').remove();
        
      });
     }
    
}
