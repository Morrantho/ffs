ffs(d=>
`
	<form
		onsubmit="${d.on(async(e)=>
		{
			for(let i of e.target.elements) d[i.name]=i.value;
			let res=await ffs_req(d.url(),d.method(),d);
			if(d.submit)d.submit(res);
			console.log
			return res;
		})}"
		class="grid gap-4"
	>
		${h1({html:d.title})}
		${d.inputs(d)} ${/* Kind've important */``}
		${submit({value:d.title})}
	</form>
`,`form`);