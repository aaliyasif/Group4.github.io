let  name = prompt('Hello what is your name?');
alert(`Welcome to our page ${name}! I hope you get to learn something about us today`);
    
    function updateClock(){
        var now=new Date();
        var hours=now.getHours();
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
        
        minutes=minutes<10 ? '0'+minutes:minutes;
        seconds=seconds<10 ? '0'+seconds:seconds;
        var time=hours+':'+minutes+':'+seconds;
        document.getElementById('clock').textContent=time;
    }
    setInterval(updateClock, 1000);
    updateClock();