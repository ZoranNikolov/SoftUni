function requestValidator(obj) {
	let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT']

	if (!validMethod.includes(obj.method)) {
		throw new Error('Invalid request header: Invalid Method')
	}
}
requestValidator({
	method: "GET",
	uri: "svn.public.catalog",
	version: "HTTP/1.1",
	message: "",
});
