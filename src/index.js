import navbar from './nav.js';
import schedule from './schedule.js';
import './style.scss';

function container() {

    const container = document.createElement('div');
    container.id = 'container';


    navbar.init();
    schedule.init();

    container.appendChild(navbar.getElem());
    container.appendChild(schedule.getElem());


    let clear = document.createElement('input');

    clear.type = "submit";
    clear.id = 'clr';
    clear.value = "clear\nlist";
    clear.addEventListener('click', clearList);

    container.appendChild(clear);

    return container;
}

function clearList(){
    console.log("here");
    localStorage.clear();
    window.location.reload();
}

document.body.appendChild(container());