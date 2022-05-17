ffs(d=>
`
	<button
		onclick="${d.on(d.click)}"
		class="wgt-900 pad-2 bg-primary-3 bg-h-primary-2 pointer col-white-3 f-sz-16"
	>
		${d.html()}
	</button>
`,`button`);