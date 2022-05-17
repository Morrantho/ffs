ffs(d=>
`
	<input
		class="wgt-900 pad-2 bg-primary-3 bg-h-blue pointer col-white-3 f-sz-16 ${d.class?d.class(d):``}"
		type="submit"
		value="${d.value(d)}"
	/>
`,`submit`);