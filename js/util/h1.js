ffs(d=>
`
	<h1
		class="col-white-1 wgt-900 brd-b-blue ${d.class?d.class(d):""}"
		style="${d.css?d.css(d):""}"
	>
		${d.html()}
	</h1>
`,`h1`);