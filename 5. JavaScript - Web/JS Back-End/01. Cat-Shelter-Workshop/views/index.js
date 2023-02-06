const cats = require("../cats.json");

module.exports = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/site.css">
    <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico" />
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>
        <section class="cats">
            <ul>
			${cats.map(x => `
			<li>
				<img src="${x.imageUrl}" alt="${x.name}">
				<h3>${x.name}</h3>
				<p><span>Breed: </span>${x.breed}</p>
				<p><span>Description: </span>${x.description}</p>
				<ul class="buttons">
					<li class="btn edit"><a href="/cats/${x.id}/edit">Change Info</a></li>
					<li class="btn delete"><a href="">New Home</a></li>
				</ul>
			</li>
			`)
			.join('')}
            </ul>
        </section>
    </main>

</body>

</html>
`;
