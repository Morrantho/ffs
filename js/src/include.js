ffs.debug=true;

ffs.include(`./js/src/routes/home.js`)
.then(_=>ffs.include(`./js/src/routes/contact.js`))
.then(_=>ffs.include(`./js/src/routes/about.js`))
.then(_=>ffs.include(`./js/src/root.js`))
/* Comment these two if you don't need em. */
.then(_=>ffs.include(`./js/src/util/util.js`))
.then(_=>ffs.util())
.then(_=>ffs.init())
.catch(e=>console.log(e));