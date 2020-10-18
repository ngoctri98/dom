// ===Bài 6: 

var btnBlue = document.querySelector("#background-change-color .btn-blue")
var btnRed = document.getElementsByClassName("btn-red")[0]
console.log(btnBlue, btnRed)
btnBlue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
})
btnRed.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
})

// ====bai 10
var btnShow = document.getElementById("btn-show")
var content = document.getElementById("content")
var textContent = content.textContent
var lengthContent = textContent.length
var text = textContent.slice(0,95) + '...';
if ( lengthContent>100){
    btnShow.style.display='block';
}
else{
    btnShow.style.display='none';
}
console.log(btnShow,content,lengthContent)
btnShow.addEventListener("click", function () {
   if(btnShow.innerText == 'Show More') {
       btnShow.innerText = 'Show Less';
       content.innerText = textContent;
   }
   else{
        btnShow.innerText = 'Show More';
        content.innerText = text;
   }
})
// Bài 13: Làm một chiếc đồng hồ bấm giờ

var minutes = 0
var seconds = 0
var miliSeconds = 0

var watch = document.getElementById("watch")
var btnStart = document.getElementsByClassName("js-btn-start")[0]
var btnStop = document.getElementsByClassName("js-btn-stop")[0]
var btnReset = document.querySelector(".js-btn-reset")
console.log(watch, btnStop)
var Interval
watch.style.height = "120px"
 watch.style.width = "200px"
watch.style.textAlign = "center"
watch.style.backgroundColor = "white"
watch.style.borderRadius = "15px"
watch.style.border = "5px solid black"

btnStart.addEventListener("click", function () {
    clearInterval(Interval)
    Interval = setInterval(startTime, 10)
})

btnStop.addEventListener("click", function () {
    clearInterval(Interval)
})

btnReset.addEventListener("click", function () {
    clearInterval(Interval)
    minutes = "00"
    seconds = "00"
    miliSeconds = "00"
    changeMiliSecond.innerHTML = miliSeconds
    changeSecond.innerHTML = seconds
    changeMinute.innerHTML = minutes
})

var changeMinute = document.getElementById("minute")
var changeSecond = document.getElementById("second")
var changeMiliSecond = document.getElementById("miliSecond")
var changeMinute = document.getElementById("minute")
var changeSecond = document.getElementById("second")
var changeMiliSecond = document.getElementById("miliSecond")

function startTime() {
    miliSeconds++
    if (miliSeconds < 9) {
        changeMiliSecond.innerHTML = "0" + miliSeconds
    }
    if (miliSeconds > 9) {
        changeMiliSecond.innerHTML = miliSeconds
    }
    if (miliSeconds > 99) {
        seconds++
        changeSecond.innerHTML = "0" + seconds
        miliSeconds = 0
        changeMiliSecond.innerHTML = "0" + 0
    }
    if (seconds > 9) {
        changeSecond.innerHTML = seconds
    }
    if (seconds > 59) {
        minutes++
        changeMinute.innerHTML = "0" + minutes
        seconds = 0
        changeSecond.innerHTML = "0" + 0
    }
}
