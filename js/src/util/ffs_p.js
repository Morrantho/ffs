ffs.tag(`ffs_p`,(self,attrs,children)=>p
({
	style:
	`
		font-weight:var(--wgt-900);
		color:var(--col-white-1);
	`,
	textContent:attrs.text,
},
children));