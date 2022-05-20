ffs.tag(`home`,(self,attrs,children)=>self
({
	style:`color:var(--col-white-1);`
},
[
	ffs_h1({text:`Home`})
]));
ffs.route(``,home);