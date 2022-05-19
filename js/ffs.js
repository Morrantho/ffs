ffs={routes:{}}
ffs.vanilla=["p","h1","h2","h3","div","img","a","span","input","select","option","details","summary","button","form"];
ffs.include=async src=>
{
	let e=document.createElement("script");
	e.type="text/javascript";
	e.src=src;
	e.async=true;
	document.head.appendChild(e);
}
ffs.create=(t,attrs={},children=[])=>
{
	let e=document.createElement(t);
	for(let attr in attrs) e[attr]=attrs[attr];
	for(let child of children)e.appendChild(child);
	return e;
}
ffs.tag=(name,route,fn)=>
{
	window[name]=(attrs,children)=>fn((_attrs,_children)=>ffs.create(name,_attrs,_children),attrs,children);
	ffs.routes[`#${route}`]=window[name];
}
ffs.goto=route=>document.body.replaceChildren(ffs.parseroute(route));
addEventListener(`hashchange`,_=>ffs.goto(location.hash||`#`));
ffs.parseroute=(url)=>
{
	if(ffs.routes[url])return ffs.routes[url]();
	let url_slashes=url.split("/");
	for(let route in ffs.routes)
	{
		let route_slashes=route.split("/");
		if(url_slashes.length!=route_slashes.length)continue;
		let params={};
		let matches=0;
		for(let i=0;i<url_slashes.length;i++)
		{
			let param=route_slashes[i].split(`:`)[1];
			if((route_slashes[i]!=url_slashes[i])&&!param)break;
			if(param)params[param]=url_slashes[i];
			matches++;
		}
		if(matches==route_slashes.length)return ffs.routes[route](params);
		matches=0;
	}
}
ffs.req=async(url,method,data)=>
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
onload=()=>
{
	for(let i of ffs.vanilla) window[i]=(attrs,children)=>ffs.create(i,attrs,children);
	location.hash=location.hash||`#`;
	ffs.goto(location.hash||`#`);
}