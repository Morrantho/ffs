ffs.tag(`ffs_nav`,(self,attrs,children)=>self
({
	style:
	`
		display:flex;
		padding:var(--interval-2);
		gap:var(--interval-2);
		background-color:var(--col-primary-2);
		border-bottom:1px solid var(--col-primary-3);
	`
},
[
	link({to:`/#`,text:`Home`}),
	link({to:`/#about`,text:`About`}),
	link({to:`/#contact`,text:`Contact`})
]));