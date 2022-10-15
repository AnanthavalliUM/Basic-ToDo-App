let input = document.querySelector('.input-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.task');


// add btn disabled

input.addEventListener('keyup' , () => {
    if(input.value.trim() != 0 ){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})


//adding to the list
addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0 ){
        let newelement = document.createElement('div');
        newelement.classList.add('item');
        newelement.innerHTML = ` <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>

        </div>`
        tasks.appendChild(newelement);
        input.value = '';
    }
    else{
        alert('Pls enter a task');
    }
})

//deleting the list

tasks.addEventListener('click', (d) => {
 if(d.target.classList.contains('fa-trash-can')) {
  d.target.parentElement.parentElement.remove();
 }
})

//mark as deleted

tasks.addEventListener('click', (d) => {
    if(d.target.classList.contains('fa-pen-to-square')) {
     d.target.parentElement.parentElement.classList.toggle('completed')
    }
})

   
