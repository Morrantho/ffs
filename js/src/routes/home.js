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
	ffs_h1({text:`Fairly Fast Script`}),
	ffs_p({text:`Welcome Home, FFS.`}),
	editor()
]));
ffs.route(``,home);