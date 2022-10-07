import priority_selector from './priority.html';
import todo from './schedule.js';

import todo_elem from "./todo.html";
import {delay} from "lodash";


let Nav = (() => {
    let elem = '';
    let form = '';


    function init(){

        elem = document.createElement('div');
        elem.id = 'nav-bar';

        form = document.createElement('form');
        form.id = 'todo-form';

        let button = document.createElement('input');
        button.value = "submit";
        button.type = 'submit';

        let what = document.createElement('input');
        let when = document.createElement('input');
        let priority = document.createElement('ul');

        what.type = 'text';
        what.id = 'what';

        when.type = 'date';
        when.id = 'when';

        priority = new DOMParser().parseFromString(priority_selector, "text/html").getElementById('priority');

        form.appendChild(what);
        form.appendChild(when);
        form.appendChild(priority);
        form.appendChild(button);

        form.addEventListener('submit', function (e){
            addTodo();
            e.preventDefault();
        });

        elem.appendChild(form);

    }

    function getElem(){
        return elem;
    }

    function addTodo(){
        let temp = new DOMParser().parseFromString(todo_elem, "text/html").getElementById('todo_0');

        temp.id = "todo_"+Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        console.log(temp);
        todo.getElem().appendChild(temp);

        localStorage.setItem("todo", todo.getElem().outerHTML);
        console.log(localStorage.getItem("todo"));

    }

    return {init, getElem, addTodo};
})();

export default Nav;