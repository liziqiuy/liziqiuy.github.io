//时间的JavaScript

window.onload=function(){
	function showTime(){
		let dt=new Date()//获取当前时间的系统对象
		let year=dt.getFullYear();
		let month=dt.getMonth()+1;
		let day=dt.getDate();
		let hour=dt.getHours();
		let minute=dt.getMinutes();
		let secound=dt.getSeconds();
		let str='Current Time：'+year+'Year'+month+'Month'+day+'Date'+hour+'Hour'+minute+'Minute'+secound+'Second';
		let st=document.getElementsByClassName('showTime')[0];
		st.innerHTML=str;
	}
	
	setInterval(showTime,1000);
}