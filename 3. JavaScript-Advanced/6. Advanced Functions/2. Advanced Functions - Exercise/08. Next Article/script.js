function getArticleGenerator(articles) {
	let myArticles = Array.from(articles);
	let content = document.getElementById("content");
	return () => {
		if (!myArticles.length) {
			return;
		}
		let currentArticle = myArticles.shift();
		content.innerHTML += `<article>${currentArticle}</article>`;
	};
}
