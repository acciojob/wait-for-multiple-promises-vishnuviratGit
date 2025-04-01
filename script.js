//your JS code here. If required.
let times=[];
let promise1=()=>{
	  const time=(Math.random()*(3-1)+1).toFixed(3);
	  times.push(time);
	 return new Promise((resolve, reject)=>{
		   setTimeout(()=>{
			   resolve({result: "Promise 1", time});
		   }, time*1000);
	 });
};
let promise2=()=>{
	 const time=(Math.random()*(3-1)+1).toFixed(3);
	times.push(time);
	 return new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve({result: "Promise 2", time});
		 }, time*1000);
	 })
};
let promise3=()=>{
	 const time=(Math.random()*(3-1)+1).toFixed(3);
	times.push(time);
	 return new Promise((resolve, reject)=>{
		 setTimeout(()=>{
			 resolve({result: "Promise 3", time});
		 }, time*1000);
	 })
};
Promise.all([promise1(), promise2(), promise3()]).then(result=>{
	let element=document.getElementById("output");
	element.innerHTML="";
	 result.forEach((item)=>{
		 const row=`
		   <tr>
		   <td>${item.result} </td>
		   <td>${Math.floor(item.time)}</td>
		   </tr>
		   `;
		 element.innerHTML+=row;
	 });
	let maxTime=times.reduce((accum, item)=>{
		 if(item>accum){
			 accum=item;
		 }
		return accum;
	});
	element.innerHTML+=`
	  <tr>
	  <td><strong>Total</strong></td>
	  <td>${maxTime}</td>
	  </tr>
	`
	
})
