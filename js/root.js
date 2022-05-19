ffs.include(`./js/tags/categoryitem.js`);

ffs.tag(`root`,``,(self,attrs,children)=>
{
	return self({},
	[
		p({textContent:"Hello World"})
	]);
});