let ms = document.getElementById('ms');
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hour = document.getElementById('hr');

let startBtn = document.querySelector('.start-btn');
let resetBtn = document.querySelector('.reset-btn');

var num = 0, clear;

// DEALS WITH TRIGGERING BUTTON ACTIONS AND CHANGING STYLES
function buttonActivityHandler() {
    function rightButtonActivityHandler() {
        // STOPWATCH VALUES SET BACK TO 0
        hour.innerHTML = '00';
        min.innerHTML = ' 00';
        sec.innerHTML = ' 00';
        ms.innerHTML = ' 00';

        // BUTTONS STYLES SET BACK TO INITIAL STATE
        clearInterval(clear);
        startBtn.innerHTML="Start";
        startBtn.classList.remove("stopBtn");
        resetBtn.classList.remove("resetBtnActivity");
    }

    function start() {
        clear = setInterval(function () {
            if(num < 99) {
                if(num < 10) 
                    ms.innerHTML = " " + "0" + num.toString();
                else 
                    ms.innerHTML = " " + num;
                num++;
            } else {
                num = 0;
                if(parseInt(sec.innerHTML) < 59) {
                    if(parseInt(sec.innerHTML) < 9) {
                        sec.innerHTML = " " + '0' + (parseInt(sec.innerHTML) + 1).toString();
                    } else {
                        sec.innerHTML = " " + (parseInt(sec.innerHTML) + 1).toString();
                    }
                } else {
                    sec.innerHTML = '00';
                    if(parseInt(min.innerHTML) < 59) {
                        if(parseInt(min.innerHTML) < 9) {
                            min.innerHTML = " " + '0' + (parseInt(min.innerHTML) + 1).toString();
                        } else {
                            min.innerHTML = " " + (parseInt(min.innerHTML) + 1).toString();
                        }
                    } else {
                        hour.innerHTML = '00';
                        if(parseInt(hour.innerHTML) < 9) {
                            hour.innerHTML = " " + '0' + (parseInt(hour.innerHTML) + 1).toString();
                        } else {
                            hour.innerHTML = " " + (parseInt(hour.innerHTML) + 1).toString();
                        }
                    }
                } 
            }
            
        }, 10);

        startBtn.innerHTML="Stop";
        startBtn.classList.add("stopBtn");
    }

    function stop() {
        clearInterval(clear);
        startBtn.innerHTML="Start";
        startBtn.classList.remove("stopBtn");
    }
    
    // CHECKS THE STATE OF BUTTON AND EXECUTE APPROPRIATE TASK
    (startBtn.innerHTML == 'Start') ? (start()) : (stop());

    // RESETS VALUE
    resetBtn.addEventListener('click', ()=>{
        rightButtonActivityHandler();
        resetBtn.classList.remove("resetBtnActivity");
    });
}

console.log(ms.innerHTML);

startBtn.addEventListener('click', ()=>{
    buttonActivityHandler();
    resetBtn.classList.add("resetBtnActivity");
});