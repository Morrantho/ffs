ffs.tag(`ffs_input`,(tag,attrs={input:{},p:{}},children=[])=>tag
({
	style:
	`
		font-size:var(--interval-2);
		font-weight:var(--wgt-900);
	`
},
[
	p
	({
		...attrs.p,
		textContent:attrs.p.text||`Label`,
	}),
	input
	({
		...attrs.input,
		placeholder:attrs.input.placeholder||`Placeholder`,
		style:
		`
			font-size:var(--interval-2);
			font-weight:var(--wgt-900);
			color:var(--col-white-1);
			background:transparent;
			padding:var(--interval-2);
			border-bottom:1px solid var(--col-blue);
		`
	})
]));