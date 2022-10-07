import {max} from "lodash";
import todo_elem from "./todo.html";

let Schedule = (() =>{
    let elem = '';

    function isEmpty(){
        return true;
    }

    function init(){
        //elem = localStorage.getItem("todo");
        //if(elem.id === null){
        elem = document.createElement('div');
        // }
        //console.log(elem.childNodes);
        elem.id = 'schedule'+Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);



    }

    function getElem(){
        return elem;
    }

    return{init, getElem, isEmpty};
})();

export default Schedule;