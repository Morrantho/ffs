_=null;
ffs={routes:{}};
ffs.include=src=>new Promise((res,rej)=>
{
	let e=document.createElement(`script`);
	e.type=`text/javascript`;
	e.src=src;
	e.onload=res;
	e.onerror=rej;
	document.head.appendChild(e);
});
ffs.create=(tag,attrs={},children=[])=>
{
	let element=document.createElement(tag);
	for(let attr in attrs) element[attr]=attrs[attr];
	for(let child of children)element.appendChild(child);
	element.style=`${attrs.style} display:grid;`;
	return element;
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
	let url_slashes=url.split(`/`);
	for(let route in ffs.routes)
	{
		let route_slashes=route.split(`/`);
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
ffs.req=(url,method,data)=>new Promise((resolve,reject)=>
{
	fetch(url,
	{	
		method:method,
		body:JSON.stringify(data),
		headers:{"Content-type":`application/json; charset=UTF-8`}
	})
	.then(response=>response.json())
	.then(response=>resolve(response))
	.catch(error=>reject(error));
});
ffs.init=()=>
{
	for(let tag of ffs.tags) window[tag]=(attrs,children)=>ffs.create(tag,attrs,children);
	location.hash=location.hash||`#`;
	ffs.goto(location.hash||`#`);
}