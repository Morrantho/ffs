ffe={};
ffe.tokens=[];

ffe.init=src=>
{
	ffe.src=src;
	ffe.i=-1;
	ffe.a=0;
	ffe.c=``;
	ffe.next();
	ffe.run();
}

ffe.next=(buf=``)=>
{
	buf+=ffe.c;
	ffe.i++;
	ffe.a=ffe.src.charCodeAt(ffe.i);
	ffe.c=ffe.src[ffe.i];
	return buf;
}

ffe.undo=i=>{ffe.i=i-1;ffe.next();}
ffe.peekop=i=>ffe.ops[ffe.src.charCodeAt(ffe.i+i)];
ffe.isop=fn=>ffe.ops[ffe.a]==fn;
ffe.eof=_=>ffe.i>=ffe.src.length;
ffe.nop=_=>ffe.next();

ffe.keyword=_=>
{
	ffe.next();
}

ffe.letter=_=>
{
	let buf=ffe.c;
	ffe.next();
	while(ffe.isop(ffe.letter)||ffe.isop(ffe.digit))
	{
		buf=ffe.next(buf);
	}
	ffe.tokens.push({type:`id`,value:buf});
}

ffe.digit=_=>
{
	let buf=``;
	while(ffe.isop(ffe.digit))buf=ffe.next(buf);
	if(ffe.c==`.`&&ffe.peekop(1)==ffe.digit)
	{
		buf=ffe.next(buf);
		while(ffe.isop(ffe.digit))buf=ffe.next(buf);
	}
	ffe.tokens.push({type:`number`,value:buf});
}

ffe.op_oper=_=>
{
	ffe.next();
}

ffe.str=_=>
{
	let c=ffe.c;/*match on this so we can reuse it for all string types.*/
	let buf=ffe.next(``);
	let i=ffe.i;
	while(ffe.c!=c)
	{
		if(ffe.eof()) return ffe.undo(i);
		buf=ffe.next(buf);
	}
	buf=ffe.next(buf);
	ffe.tokens.push({type:`string`,value:buf});
}

ffe.ops=[];
ffe.ops[0]=ffe.nop;
ffe.ops[1]=ffe.nop;
ffe.ops[2]=ffe.nop;
ffe.ops[3]=ffe.nop;
ffe.ops[4]=ffe.nop;
ffe.ops[5]=ffe.nop;
ffe.ops[6]=ffe.nop;
ffe.ops[7]=ffe.nop;
ffe.ops[8]=ffe.nop;
ffe.ops[9]=ffe.nop;
ffe.ops[10]=ffe.nop;
ffe.ops[11]=ffe.nop;
ffe.ops[12]=ffe.nop;
ffe.ops[13]=ffe.nop;
ffe.ops[14]=ffe.nop;
ffe.ops[15]=ffe.nop;
ffe.ops[16]=ffe.nop;
ffe.ops[17]=ffe.nop;
ffe.ops[18]=ffe.nop;
ffe.ops[19]=ffe.nop;
ffe.ops[20]=ffe.nop;
ffe.ops[21]=ffe.nop;
ffe.ops[22]=ffe.nop;
ffe.ops[23]=ffe.nop;
ffe.ops[24]=ffe.nop;
ffe.ops[25]=ffe.nop;
ffe.ops[26]=ffe.nop;
ffe.ops[27]=ffe.nop;
ffe.ops[28]=ffe.nop;
ffe.ops[29]=ffe.nop;
ffe.ops[30]=ffe.nop;
ffe.ops[31]=ffe.nop;
ffe.ops[32]=ffe.nop;
ffe.ops[33]=ffe.nop;
ffe.ops[34]=ffe.str; /* " */
ffe.ops[35]=ffe.nop;
ffe.ops[36]=ffe.nop;
ffe.ops[37]=ffe.nop;
ffe.ops[38]=ffe.nop;
ffe.ops[39]=ffe.str; /* ' */
ffe.ops[40]=ffe.nop;
ffe.ops[41]=ffe.nop;
ffe.ops[42]=ffe.nop;
ffe.ops[43]=ffe.nop;
ffe.ops[44]=ffe.nop;
ffe.ops[45]=ffe.nop;
ffe.ops[46]=ffe.nop;
ffe.ops[47]=ffe.nop;
ffe.ops[48]=ffe.digit;
ffe.ops[49]=ffe.digit;
ffe.ops[50]=ffe.digit;
ffe.ops[51]=ffe.digit;
ffe.ops[52]=ffe.digit;
ffe.ops[53]=ffe.digit;
ffe.ops[54]=ffe.digit;
ffe.ops[55]=ffe.digit;
ffe.ops[56]=ffe.digit;
ffe.ops[57]=ffe.digit;
ffe.ops[58]=ffe.nop;
ffe.ops[59]=ffe.nop;
ffe.ops[60]=ffe.nop;
ffe.ops[61]=ffe.nop;
ffe.ops[62]=ffe.nop;
ffe.ops[63]=ffe.nop;
ffe.ops[64]=ffe.nop;
ffe.ops[65]=ffe.letter;
ffe.ops[66]=ffe.letter;
ffe.ops[67]=ffe.letter;
ffe.ops[68]=ffe.letter;
ffe.ops[69]=ffe.letter;
ffe.ops[70]=ffe.letter;
ffe.ops[71]=ffe.letter;
ffe.ops[72]=ffe.letter;
ffe.ops[73]=ffe.letter;
ffe.ops[74]=ffe.letter;
ffe.ops[75]=ffe.letter;
ffe.ops[76]=ffe.letter;
ffe.ops[77]=ffe.letter;
ffe.ops[78]=ffe.letter;
ffe.ops[79]=ffe.letter;
ffe.ops[80]=ffe.letter;
ffe.ops[81]=ffe.letter;
ffe.ops[82]=ffe.letter;
ffe.ops[83]=ffe.letter;
ffe.ops[84]=ffe.letter;
ffe.ops[85]=ffe.letter;
ffe.ops[86]=ffe.letter;
ffe.ops[87]=ffe.letter;
ffe.ops[88]=ffe.letter;
ffe.ops[89]=ffe.letter;
ffe.ops[90]=ffe.letter;
ffe.ops[91]=ffe.nop;
ffe.ops[92]=ffe.nop;
ffe.ops[93]=ffe.nop;
ffe.ops[94]=ffe.nop;
ffe.ops[95]=ffe.letter; /* _ */
ffe.ops[96]=ffe.str; /* ` */
ffe.ops[97]=ffe.letter;
ffe.ops[98]=ffe.letter;
ffe.ops[99]=ffe.letter;
ffe.ops[100]=ffe.letter;
ffe.ops[101]=ffe.letter;
ffe.ops[102]=ffe.letter;
ffe.ops[103]=ffe.letter;
ffe.ops[104]=ffe.letter;
ffe.ops[105]=ffe.letter;
ffe.ops[106]=ffe.letter;
ffe.ops[107]=ffe.letter;
ffe.ops[108]=ffe.letter;
ffe.ops[109]=ffe.letter;
ffe.ops[110]=ffe.letter;
ffe.ops[111]=ffe.letter;
ffe.ops[112]=ffe.letter;
ffe.ops[113]=ffe.letter;
ffe.ops[114]=ffe.letter;
ffe.ops[115]=ffe.letter;
ffe.ops[116]=ffe.letter;
ffe.ops[117]=ffe.letter;
ffe.ops[118]=ffe.letter;
ffe.ops[119]=ffe.letter;
ffe.ops[120]=ffe.letter;
ffe.ops[121]=ffe.letter;
ffe.ops[122]=ffe.letter;
ffe.ops[123]=ffe.nop;
ffe.ops[124]=ffe.nop;
ffe.ops[125]=ffe.nop;
ffe.ops[126]=ffe.nop;
ffe.ops[127]=ffe.nop;

ffe.run=_=>
{
	for(;!ffe.eof();) ffe.ops[ffe.a]();
}

onload=_=>
{
	ffe.init(`123.432 console.log("Hello World"); 234234. But can it parse \`backticks?\``);
	console.log(ffe.tokens);
};