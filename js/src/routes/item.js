ffs.tag(`item`,(item,attrs,children)=>
{
	console.log(attrs);

	return item({},
	[
		ffs_p({text:`Category ${attrs.categoryId} Product ${attrs.productId}`})
	]);
});
ffs.route(`categories/:categoryId/products/:productId`,item);