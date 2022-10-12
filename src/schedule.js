let Schedule = (() =>{
    let elem = '';

    function isEmpty(){
        return true;
    }

    function init(){

        let schedule = localStorage.getItem("todo");
        elem = new DOMParser().parseFromString(schedule, "text/html").getElementById('schedule');

        if(elem == null){
            elem = document.createElement('div');

        }
        elem.id = 'schedule';

    }

    function getElem(){
        return elem;
    }

    return{init, getElem, isEmpty};
})();

export default Schedule;