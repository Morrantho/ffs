ffs.util=async()=>
{
	return ffs.include(`./js/src/util/container.js`)
	.then(_=>ffs.include(`./js/src/util/cardhead.js`))
	.then(_=>ffs.include(`./js/src/util/cardbody.js`))
	.then(_=>ffs.include(`./js/src/util/card.js`))
	.then(_=>ffs.include(`./js/src/util/link.js`))
	.then(_=>ffs.include(`./js/src/util/ffs_h1.js`))
	.then(_=>ffs.include(`./js/src/util/ffs_p.js`))
	.then(_=>ffs.include(`./js/src/util/ffs_input.js`))
	.then(_=>ffs.include(`./js/src/util/ffs_nav.js`))
	.then(_=>ffs.include(`./js/src/util/ffs_footer.js`))
	.then(_=>ffs.include(`./js/src/util/editor.js`))
	.catch(e=>console.log(e));
}