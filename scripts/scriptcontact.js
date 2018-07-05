// JavaScript Document
window.onload=function(){
    const form = document.getElementById('form01');
    form.addEventListener('submit', greetingText);
    
    // const text2 = document.getElementById('greeting');
    const clientName = document.getElementById('cname');
    const mydiv = document.getElementById('welcome');
    // const myvideo = document.getElementById('homepage-hero-module');

    // const yourage = document.getElementById('age');

    console.log(clientName.value);
    
    function greetingText(e){
        e.preventDefault();

        // mydiv.style.display="block";
        // myvideo.style.display="none";

        const fname = clientName.value;

        console.log('first name is',fname);
        const date = new Date();

        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }

        console.log("today is:",day);
        const hours = date.getHours(); 

        var mygreetingtime;

            if(hours < 12){
                mygreetingtime = 'Morning';  
            }else if(12 <= hours < 18){
                mygreetingtime = 'Afternoon';
            }else{
                mygreetingtime = 'Evening';
            };
        
        const name = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
        
        // ---------modal start-----------
        var modal = document.getElementById('myModal');
        document.getElementById("p01").innerHTML=`Good ${mygreetingtime} ${name}, Today is ${day}.
        Thanks for submit a message. comp1950's instructor will be conect with you very soon.`;
        modal.style.display = "block";

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];
                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function() { 
                            modal.style.display = "none";
                    }   
                    // <span> element that closes the modal-finished       
        // ---------modal finish-----------

           }

           //toggle student number input start
var ps = document.getElementById("Prospective-Student");

ps.onclick = function() {
    var sn = document.getElementById("snumber");
    sn.style.display = "none";
}

console.log("ps clicked");

var cs = document.getElementById("Current-Student");

cs.onclick = function() {
    var sn = document.getElementById("snumber");
    sn.style.display = "block" ;
}
console.log("cs clicked");
        //toggle student number input finished
        // console.log("Prospective-Student checked-1!");
           
        // if(document.getElementById("Prospective-Student").checked){
        //     console.log("Prospective-Student checked-2!");
        //     document.getElementById("snumber").disabled = true;
        // }else{
        //     console.log("current-Student checked!");
        //     document.getElementById("snumber").disabled = false;
        // };
}








