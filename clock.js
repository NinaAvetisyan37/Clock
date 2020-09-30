const sec1=document.getElementById('sec');
const min1=document.getElementById('min');
const hour1=document.getElementById('hour');
setInterval(updateClock,1000)

function updateClock(){
	let date=new Date();
	let sec=date.getSeconds()/60;
	let min=(date.getMinutes()+sec)/60;
	let hour=(date.getHours()+min)/12;

	sec1.style.transform="rotate("+(sec*360)+"deg)";
	min1.style.transform="rotate("+(min*360)+"deg)";
	hour1.style.transform="rotate("+(hour*360)+"deg)";
}
updateClock();