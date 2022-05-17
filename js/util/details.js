ffs(d=>
`
	<details
		class="flex col-white-1 ${d.dclass()}"
	>
		<p class="">${d.title()}</p>
		<summary
			class=" ${d.sclass()}"
		>
			${d.html()}
		</summary>
	</details>
`,`details`);