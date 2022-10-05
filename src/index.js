import _ from 'lodash';
import navbar from './nav.js';
import todo from './schedule.js';
import todo_elem from './todo.html';
import './style.scss';

function container() {

    const container = document.createElement('div');
    container.id = 'container';


    navbar.init();
    todo.init();

    container.appendChild(navbar.getElem());

    todo.getElem().appendChild(new DOMParser().parseFromString(todo_elem, "text/html").getElementById('todo'));
    container.appendChild(todo.getElem());

    return container;
}

document.body.appendChild(container());