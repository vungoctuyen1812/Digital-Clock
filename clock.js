
function startTime(){
	let today = new Date()
	let hour = today.getHours()
	let minutes = today.getMinutes()
	let seconds = today.getSeconds()
	let clock = document.getElementById('clock')
	
	hour < 10 ? hour = '0' + hour  : hour
	minutes < 10 ? minutes = '0' + minutes : minutes
	seconds < 10 ? seconds = '0' + seconds : seconds
	
	clock.innerHTML = `${hour} : ${minutes} : ${seconds}`
	let t = setInterval(startTime, 500)
}

startTime();
