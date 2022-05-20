ffs.tag(`about`,(self,attrs,children)=>self
({
	style:`color:var(--col-white-1);`
},
[
	ffs_h1({text:`About`})
]));
ffs.route(`about`,about);