ffs.tag(`home`,(self,attrs,children)=>self
({
	style:
	`
		color:var(--col-white-1);
		gap:var(--interval-2);
	`
},
[
	img({src:`./img/ffs.png`,style:`margin:0 auto;`}),
	ffs_h1({text:`FFS`}),
	ffs_p({text:`Welcome Home, FFS.`})
]));
ffs.route(``,home);