// Setting Up Varibales
let theInput = document.querySelector('.add-task input'),
    theAddButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    noTaskMsg = document.querySelector('.no-tasks-message'),
    noTaskMsg2 = noTaskMsg,
    taskCount = document.querySelector('.tasks-count span'),
    taskCompleted = document.querySelector('.tasks-completed span');
  
    

// focus on input field
window.onload = function(){
  theInput.focus();  
};

// Adding The Task
theAddButton.onclick = function(){
 

    if(theInput.value === ''){
    console.log('no');
     }
    else
    {
        noTaskMsg.remove();
        // Create Span Element
        let mainSpan = document.createElement('span');
        
        //Create Delete Button
        let deleteElement = document.createElement('span');
        
        //Create The Span Text 
        let text = document.createTextNode(theInput.value);
        
        //Create The Delete Button Text 
        let deleteText = document.createTextNode('delete');
        
        //Add Text To Span
        mainSpan.appendChild(text);
        
        //Add Class To Span
        mainSpan.className = 'task-box';
        
        //Add Delete To Span
        deleteElement.appendChild(deleteText);
        
        //Add Class To Delete
        deleteElement.className = 'delete';
        
        //Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);
   
        
        //add task to main container
        tasksContainer.appendChild(mainSpan);
        
        
        // Empty The Empty Value
        theInput.value='';
        
        // Focus In Input again
        theInput.focus();
   
         calculate();
      
    }
};
document.addEventListener('click',function(e){
   
    //Delete Task
    if(e.target.className=='delete')
    {
        e.target.parentNode.remove(); 
        theInput.focus();
           calculate();
    }
  
    // toggle Finshed Class
   if(e.target.classList.contains('task-box'))
    {
        e.target.classList.toggle('finshed'); 
           calculate();
    }
  
    if(document.querySelector('.task-box'))
        {
            return true;
        }
    else{
            tasksContainer.appendChild(noTaskMsg2);
    }
  
});

let deleteAll = document.querySelector('.delAll'),
    FinshAll = document.querySelector('.finAll');

deleteAll.onclick = function()
{       
        while(true)
        {
            
            if(document.querySelector('.task-box'))
            {
                    document.querySelector('.task-box').remove();  
            }
            else
            {
                break;
            }
        }   
     tasksContainer.appendChild(noTaskMsg2);
       calculate();
}

// function To Calculate Tasks
function calculate()
{
    taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
 
        
    taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finshed').length;
}






















