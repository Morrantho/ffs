ffs.debug=true;

ffs.include(`./js/lib/ffs/tags.js`)
/* Examples */
.then(ffs.include(`./js/src/routes/home.js`))
.then(_=>ffs.include(`./js/src/routes/contact.js`))
.then(_=>ffs.include(`./js/src/routes/about.js`))
.then(_=>ffs.include(`./js/src/routes/item.js`))
/* Comment these two if you don't need em. */
.then(_=>ffs.include(`./js/src/util/util.js`))
.then(_=>ffs.util())
/* Init after includes */
.then(_=>ffs.init())
.catch(e=>console.log(e));

ffs.tag(`root`,(self,attrs={},tag)=>self
(
	attrs,
	[
		/* Pre-Route Tags Here */
		ffs_nav(),
		/* URL Dependant */
		container({},[tag]),
		/* Post-Route Tags Here */
		ffs_footer()
	]
));