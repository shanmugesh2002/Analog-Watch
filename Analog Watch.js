const background=document.querySelector('body');
const seconds=document.querySelector('.second');
const miniutes=document.querySelector('.miniute');
const hours=document.querySelector('.hour');
const darkMode=document.querySelector('.switch-mode');


background.addEventListener('click',()=>{
    background.classList.toggle("active");
    const isDarkMode=background.classList.contains("active");
    darkMode.textContent=isDarkMode?"Light Mode":"Dark Mode";
})

const updateTime=()=>{
    let date=new Date();
    secToDeg=(date.getSeconds()/60)*360;
    minToDeg=(date.getMinutes()/60)*360;
    hourToDeg=(date.getHours()/12)*360;
    seconds.style.transform=`rotate(${secToDeg}deg)`;
    miniutes.style.transform=`rotate(${minToDeg}deg)`;
    hours.style.transform=`rotate(${hourToDeg}deg)`;
}
setInterval(updateTime,1000);


