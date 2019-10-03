var element = document.querySelectorAll('.todo__icon');

element.forEach(function(item)  {
    item.addEventListener('click', function() {  
        item.classList.toggle('todo__icon-active');
    });
});


// CREATE TODO
var html, newHtml, task;

document.querySelector('.todo__add').addEventListener('click', addTodo);

document.querySelector('.todo__field').addEventListener('keypress', event => {
    if (event.keyCode == 13) {
        addTodo();
    }
});



function addTodo() {

    task = document.querySelector('.todo__field').value;
    if (task !== "") {
        html = '<li class="todo__item"><input type="checkbox" class="todo__checkbox"><img class="todo__icon" src="checked.svg" ></img><p class="todo__des">%des%</p><img src="error.svg" alt="close icon" class="todo__close"></li>';
        newHtml = html.replace('%des%', task);
        document.querySelector('.todo__list').insertAdjacentHTML('afterbegin', newHtml);
        //clears the input field
        init();
    }
    
    else {
        alert('no empty tasks brother')
    }
    
}


// DOESNT WORK ON TODOS DUE TO EVENT DELEGATION
// var close;
// close = document.querySelectorAll('.todo__close');

// close.forEach(function(cur) {
//     cur.addEventListener('click', function(event) {
//         cur.parentNode.remove();
//     })
// })


// DELETE TODO
document.addEventListener('click', event => {
        if (event.target.className == "todo__close"){
            document.querySelector('.' + event.target.className).parentNode.remove();
        }
})


// function to clear the input field
function init() {
    document.querySelector('.todo__field').value = "";

}





