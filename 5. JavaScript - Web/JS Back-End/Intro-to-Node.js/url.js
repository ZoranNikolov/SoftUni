const myUrl = new URL(
	"https://softuni.bg/trainings/resources/video/79027/video-09-january-2023-ivaylo-papazov-js-back-end-january-2023/3972"
);

for (let key in myUrl) {
	console.log(key,'->', myUrl[key]);
}