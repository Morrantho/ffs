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