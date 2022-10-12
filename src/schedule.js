import {max} from "lodash";
import todo_elem from "./todo.html";
import priority_selector from "./priority.html";

let Schedule = (() =>{
    let elem = '';

    function isEmpty(){
        return true;
    }

    function init(){
        let schedule = localStorage.getItem("todo");
        console.log(new DOMParser().parseFromString(schedule, "text/html").getElementById('schedule'));

        //if(elem.id === null){
        elem = new DOMParser().parseFromString(schedule, "text/html").getElementById('schedule');
        // }
        //console.log(elem.childNodes);
        elem.id = 'schedule';

        //console.log(new DOMParser().parseFromString(schedule, "text/html").getElementById('schedule'));

    }

    function getElem(){
        return elem;
    }

    return{init, getElem, isEmpty};
})();

export default Schedule;