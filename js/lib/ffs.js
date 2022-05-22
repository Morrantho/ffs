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
	if(ffs.debug) console.log(`%cFFS | Create | ${tag}`,`color:rgb(46, 204, 113)`);
	let element=document.createElement(tag);
	for(let attr in attrs) element[attr]=attrs[attr];
	for(let child of children)element.appendChild(child);
	element.style=attrs.style?"display:grid; "+attrs.style:"display: grid;";
	return element;
}
ffs.tag=(name,fn)=>
{
	if(ffs.debug) console.log(`%cFFS | Tag | ${name}`,`color:rgb(52, 152, 219)`);
	window[name]=(attrs,children)=>fn((_attrs,_children)=>ffs.create(name,_attrs,_children),attrs,children);
}
ffs.route=(route,fn)=>
{
	if(ffs.debug) console.log(`%cFFS | Route | "${route}"`,`color:rgb(155, 89, 182);`);
	ffs.routes[`#${route}`]=fn;
}
ffs.goto=route=>document.body.replaceChildren(root({},ffs.parseroute(route)));
addEventListener(`hashchange`,_=>ffs.goto(location.hash||`#`));
ffs.parseroute=(url)=>
{
	if(ffs.debug) console.log(`%cFFS | ParseRoute | "${url}"`,`color:rgb(155, 89, 182);`);
	if(ffs.routes[url]) return ffs.routes[url]({},[]);
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
		if(matches==route_slashes.length) return ffs.routes[route](params,[]);
		matches=0;
	}
}
ffs.req=(url,method,data)=>new Promise((resolve,reject)=>
{
	if(ffs.debug) console.log(`%cFFS | Request | "${url}" "${method}"`,`color:rgb(230, 126, 34);`);
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
ffs.init=_=>
{
	if(ffs.debug) console.log(`FFS | Init`);
	for(let tag of ffs.tags) window[tag]=(attrs,children)=>ffs.create(tag,attrs,children);
	location.hash=location.hash||`#`;
	ffs.goto(location.hash||`#`);
}