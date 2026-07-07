// let hr=document.getElementById('hour');
// let min=document.getElementById('min');
// let sec=document.getElementById('sec');


// function displayTime(){
//     let date= new Date();
  
//     // getting hour min and sec

//    let hh= date.getHours();
//    let mm= date.getMinutes();
//    let ss= date.getSeconds();

// //    roation
//      let hrRotaion=30*hh+mm/2;
//      let mRoation=6*mm;
//      let sRoation=6*ss;

//      hr.style.transform=`rotate(${hRoation}deg)`;
//      mm.style.transform=`rotate(${mrRoation}deg)`;
//      ss.style.transform=`rotate(${sRoation}deg)`;
     

// }
// setInterval (displayTime,1000);
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Rotation
    let hrRotation = 30 * hh + mm / 2;
    let minRotation = 6 * mm;
    let secRotation = 6 * ss;

    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}

displayTime(); // page load hote hi time set ho jayega
setInterval(displayTime, 1000);