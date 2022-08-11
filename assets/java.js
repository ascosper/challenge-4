function check() {
    var q1= document.quiz.question1.value;
    if (q1== "Giraffe")
        window.alert("Correct!")
    else 
        window.alert("Incorrect")
}
function check2(){
var q2= document.quiz.question2.value;
    if (q2=="Blue") 
    window.alert("Correct!")
    else 
    window.alert("Incorrect!") 
        sec-=15;
    }
function startTimer() {
    var sec = 60;
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);

    function wrong() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    
    startTimer();
}}