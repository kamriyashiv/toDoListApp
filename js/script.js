var ToDoData=document.getElementById("ToDoData");
function showData(Ival){
    if(Ival==""){
        alert("Please Enter Somethng Here..");
    }
    else{
        ToDoData.innerHTML+=`
        <li id="Li">${Ival}
            <i class="fa fa-close" onclick="close1(Li)"></i>
       </li>
   `;
    }
   
   
}
function close1(T){
    T.remove();
}