function extractFile(string) {
	let filenameArr = string.split("\\");
	let filenameAndExtensionArr = filenameArr.pop().split(".");
	let extension = filenameAndExtensionArr.pop();
	let fileName = filenameAndExtensionArr.join(".");
	console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
