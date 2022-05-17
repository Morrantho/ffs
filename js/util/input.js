ffs(d=>
{
	if(!d.errors) d.errors={};
	let err=d.errors[d.name()];
	return`
		<p class="col-white-1 wgt-900 f-sz-24">${d.label()}${err?`: ${err}`:``}</p>

		<input
			class=
			"
				${err?"brd-b-red brd-t-h-red":"brd-b-blue brd-t-h-blue"}
				pad-2 bg-none bg-h-primary-3 col-white-1 f-sz-16 wgt-900
			"
			value="${d.value()||""}"
			name="${d.name()}"
			type="${d.type()}"
			placeholder="${d.placeholder()}"
		/>
	`;
},`input`);