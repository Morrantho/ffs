ffs_include("./js/include.js");

ffs(_=>
`
	${nav()}
	${container
	({
		html:_=>
		`
			${form
			({
				// submit:(res)=>{console.log("APP.JS",res)},
				method:_=>"POST",
				url:_=>"http://localhost:8080/api/register",
				title:_=>"Register",
				inputs:d=> /* Kind've important */
				`
					${input({...d,name:_=>"email",value:_=>d.email,type:_=>"text",label:_=>"Email",placeholder:_=>"Enter Your Email Address"})}
					${input({...d,name:_=>"password",value:_=>d.password,type:_=>"password",label:_=>"Password",placeholder:_=>"Enter A Password"})}
					${input({...d,name:_=>"confirm",value:_=>d.confirm,type:_=>"password",label:_=>"Password Confirmation",placeholder:_=>"Confirm Your Password"})}
					${select
					({...d,name:_=>`category`,label:_=>`Category`,value:_=>d.category,
						options:d=>
						`
						`
					})}
				`
			})}
		`
	})}
`,`app`,``);