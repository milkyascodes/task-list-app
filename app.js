
const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const show = document.querySelector('.cover');
const cancel = document.querySelector('#cancel');
const searchBar = document.querySelector('#searchInput');

// modal
window.onload = popup;
cancel.addEventListener('click', () => {
    show.style.display = 'none';
})
function popup(){
    show.style.display = 'block';
}


// add to list by clicking
btn.addEventListener('click', function(){
    if(input.value !== ''){
        build();
        input.value = '';
    }
})

// add to list on pressing Enter
input.addEventListener('keyup', function(e){
    if(e.keyCode === 13 && input.value !== ''){
        build();
        input.value = '';
    }
});

function build(){

    const ul = document.createElement("ul");

    // make an li
    const li = document.createElement("li");
    li.innerHTML = input.value;

    // // make a div to hold the icons
    const div = document.createElement("div");

    // add edit btn 
     const editBtn = document.createElement("i");
     editBtn.innerHTML = `<i class="fa fa-check"></i>`;

    // add delete btn
    const delBtn = document.createElement("i");
    delBtn.innerHTML = `<i class="fa fa-trash"></i>`;



    // delete action
    delBtn.addEventListener('click', function(){
        let temp = this.closest('li');
        temp.style.display = 'none';

        console.log(temp)
    })

    // add edit action
    editBtn.addEventListener('click', function(){
        li.classList.toggle('lineThrough');    
    })


    // append the delete and edit to the div
    div.appendChild(editBtn);
    div.appendChild(delBtn);
   

    li.appendChild(div)
    
    // append the li to ul
    ul.appendChild(li);

    // show ul
    output.appendChild(ul);

    searchBar.addEventListener('keyup', function(){
        var search = this.value.toLowerCase();
        var all = document.querySelectorAll("li");

        for(let i of all){
            let item = i.innerHTML.toLowerCase();
    
            if(item.indexOf(search) == -1){
                i.style.display = 'none';
            }
            else{
                i.style.display = 'flex';
            }
        }
    })


    

    
}




