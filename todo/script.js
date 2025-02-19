const task = document.querySelector(".task")
const task_ul = document.querySelector('.taskul')

function addTask(){
    let value = task.value
    let new_li = document.createElement('li')
    let delete_btn = document.createElement('button')
    let complete_btn = document.createElement('button')
    delete_btn.innerHTML = 'Delete'
    complete_btn.innerHTML ='Complete'
    delete_btn.style.margin = '5px'
    complete_btn.style.margin = '5px'
    delete_btn.addEventListener('click', removeTask)
    complete_btn.addEventListener('click', complete)
    
    new_li.innerHTML = value;
    
    task_ul.append(new_li)
    new_li.append(delete_btn)
    new_li.append(complete_btn)
  

}
function removeTask(event){
    const task = event.target.parentElement;
    task_ul.removeChild(task)
}
function complete(event){
    const task = event.target.parentElement;
    if (!task.querySelector('completed')){
        
        
        const completed = document.createElement('span')
        completed.innerHTML = '[COMPLETED]'
        task.classList.add('completed')
        task.append(completed)
        
    }
   

}
