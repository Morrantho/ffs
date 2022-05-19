ffs.tag(`categoryitem`,`categories/:category_id/products/:product_id`,(self,attrs,children)=>
{
	return self({},
	[
		p({textContent:`Category:${attrs.category_id} Product:${attrs.product_id}`})
	]);
});