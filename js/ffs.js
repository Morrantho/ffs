ffs_routes={};
ffs_id=0;
ffs_load=()=>
{
	ffs.root=document.getElementById(`ffs`);
	ffs_goto(location.hash);
}
onload=ffs_load;
ffs_hashchange=e=>ffs_goto(e.newURL.split(`#`).pop());
addEventListener(`hashchange`,ffs_hashchange);
ffs_include=src=>
{
	let e=document.createElement(`script`);
	e.src=src;
	e.type=`text/javascript`;
	e.async=false;
	document.head.appendChild(e);
}
ffs_goto=route=>{ffs_id=0;ffs.root.innerHTML=window[ffs_routes[route]]();}
ffs=(fn,name,route)=>
{
	window[name]=(data)=>
	{
		data={...data,ffs_id:ffs_id++};
		data.on=(_fn)=>
		{
			window[`${name}${data.ffs_id}`]=async(e)=>
			{
				e.preventDefault();
				let res=await _fn(e);
				data={...data,...res};
				document.getElementById(data.ffs_id).innerHTML=fn(data);
			}
			return `${name}${data.ffs_id}(event)`;
		}
		return `<div id=${data.ffs_id} type=${name} class="grid">${fn(data)}</div>`;
	}
	ffs_routes[route]=name;
}
ffs_req=async(url,method,data)=>
{
	try
	{
		let res=await fetch(url,
		{
			method:method,
			body:JSON.stringify(data),
			headers:{"Content-type":"application/json; charset=UTF-8"}
		});
		try
		{
			return await res.json();
		}catch(e){console.log(e);}
	}catch(e){console.log(e);}
}