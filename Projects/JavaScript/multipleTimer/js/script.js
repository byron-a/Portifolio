////THE TIMER WEB APP.

let timerSet = [{id:'Timer 1', time: 20, status:'stop', originalSet: 20}]

function loadTime(){
    let addTimer=''; //strings can be stacked up without putting in an array form?
    for(let x = 0; x<timerSet.length; x++){
        addTimer += `<div class="timer">  
        <div class="timerContainer">
        <h4>Timer ${x+1}</h4>
        <span id="timer${x}"></span>
        <span id="${x}"></span>
        </div>
       
        <div>
        <button class="timerButton" onClick="startTime(${x})">Start</button>
        <button class="timerButton" onClick="pauseTime(${x})">Pause</button>
        <button class="timerButton" onClick="resetTime(${x})">Reset</button>
        </div>
        </div>`
       
    }
    let contain = document.getElementsByClassName('containTime')[0]
        contain.innerHTML = addTimer;
    
    timeRun();   
}
loadTime();

let newestTimer = function(newTime) { 
    if (newTime > 86400 ){
        alert("We have 24hrs in a day only!")
    }else{
        timerSet.push({id:'Timer'+(timerSet.length+1), time:newTime, status:'stop',originalSet:newTime })
        loadTime();
    } 
}

//button listeners
function startTime(x){
    timerSet[x].status = 'running';
    let pause =document.getElementById(`${x}`)
    pause.style.fontSize= "10px"
    pause.innerHTML= ''
}
function pauseTime(x){
    timerSet[x].status = 'stop';
    let pause =document.getElementById(`${x}`)
    pause.style.fontSize= "10px"
    pause.innerHTML= 'pause'
}
function resetTime(x){
    timerSet[x].status = 'stop';
    timerSet[x].time = timerSet[x].originalSet;
    let pause =document.getElementById(`${x}`)
    pause.style.fontSize= "10px"
    pause.innerHTML= ''
}

let iD = setInterval(()=>{
    timeRun()
    },1000)

function timeRun(){
    for(let x = 0;x<timerSet.length; x++){
        if(timerSet[x].status === 'running' && timerSet[x].time == 0){
            timerSet[x].status = 'stop'
            alert(`Timer ${x+1} countdown is done!` )
        }
        if(timerSet[x].status === 'running'){
            timerSet[x].time -= 1;
            
        }else if(timerSet[x].status === 'stop'){
            timerSet[x].status = 'stop'
           
        }


/// VISIBLE TIME
        let seconds = timerSet[x].time%60; //using modulo 
        let minutes = Math.floor(timerSet[x].time/60);
        let hours = Math.floor(timerSet[x].time/3600);
        let minutesCheck = minutes%60

        if(minutes<10){
            minutes = "0"+ minutes;
        }
        if(seconds<10){
            seconds = "0"+ seconds;
        }
        if(hours<10){
            hours = "0" + hours;
        }
        if(hours>0){
            if(minutes >= 60){
                  minutes = (minutes >60)? (hours>1 && minutesCheck == 0 ? ("0"+minutes%60):minutes%60): ("0"+minutes%60);
                } 
                document.getElementById(`timer${x}`).innerHTML = hours +":"+minutes+":"+seconds;
            }else{
                document.getElementById(`timer${x}`).innerHTML = minutes+":"+seconds;
            }
       
       
        
    }    
    
}

    // let a = 60
    // let b = 59

    // console.log(b%a)




    // var time_list = [
//     {id: "timer-1", time: 10, status:"stop", original: 10},
//   ];
   
//   function loadSite (){  
//     let text = "";
//     //console.log(text)
//     for (var i = 0; i < time_list.length; i++){
//       text += `
//       <div class="timer">
//         <div class="innerContainer">
//           <h4>Timer ${i+1}</h4>
//           <div class="timer-display">
//             <span id="timer-${i+1}"></span>
//           </div>
//         </div>
//         <div class="timer-controls">
//           <button class="timerButton" onclick="startButton(${i})" id="start-${i+1}">Start</button>
//           <button class="timerButton" onclick="pauseButton(${i})" id="pause-${i+1}">Pause</button>
//           <button class="timerButton" onclick="stopButton(${i})" id="reset-${i+1}">Reset</button>
//         </div>
//       </div>
//       `
//     }
//     document.getElementById('timerContainer').innerHTML = text;
//   }

//   //Button click listeners
//   function startButton(i){
//     time_list[i].status = "running";
//   }
   
//   function pauseButton(i){
//     time_list[i].status = "stop";
//   }
   
//   function stopButton(i){
//     time_list[i].status = "stop";
//     time_list[i].time = time_list[i].original;
//   }
   
//   function newTimer(time){
//     time_list.push({id: "timer-" + (time_list.length + 1), time: time, status:"stop", original:time});
//     loadSite();
//   }


//   let timer_main = setInterval(function() {
//     for (let i = 0; i<time_list.length; i++){
//       if (time_list[i].status == "running"){
//         time_list[i].time -= 1;
         
//       }
//       if (time_list[i].time == 0 && time_list[i].status == "running"){
//         time_list[i].status = "stop";
//         alert(`Timer ${i+1} is done!`);
//       }
       
//       // document.getElementById(time_list[i].id).innerHTML = time_list[i].time;
//       // display time in mm:ss format
//       let minutes = Math.floor(time_list[i].time/60); //0
//       //console.log(minutes)
//       let seconds = time_list[i].time%60;//10
//       // console.log(seconds)
//       if (seconds < 10){
//         seconds = "0" + seconds;
//       }
//       if (minutes < 10){
//         minutes = "0" + minutes;
//       }
//       try{
//         document.getElementById(time_list[i].id).innerHTML = minutes + ":" + seconds;
//       }catch(err){
//         console.log(err);
//       }
       
   
//     }
//   }, 1000);
