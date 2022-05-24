ffs.tag(`ffs_nav`,(self,attrs,children)=>self
({
	style:
	`
		background-color:var(--col-primary-2);
		border-bottom:1px solid var(--col-red);
	`
},
[
	div
	({
		style:
		`
			width:70%;
			display:grid;
			margin:0 auto;
			padding:var(--interval-2);
			gap:var(--interval-2);
			align-items:center;
			grid-template-columns:auto 1fr auto auto;
		`
	},
	[
		div({style:`display:flex;align-items:center;gap:var(--interval-2);`},
		[
			link({to:`/#`,text:``},[img({src:`./img/ffs.png`,height:32})]),
			link({to:`/#`,text:`FFS`}),
		]),
		div(),
		link({to:`/#about`,text:`About`}),
		link({to:`/#contact`,text:`Contact`})
	]),
]));