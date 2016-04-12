export default function queryBackend(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open("GET", url);
		req.onload = successHandler;
		req.onerror = errorHandler;
		req.responseType = "json";
		req.setRequestHeader("Accept", "application/json");
		req.send();

		let successHandler = () => {
			if (req.status === 200) {
				resolve(req.responseText);
			} else {
				reject(new Error("Status code: " + req.status));
			}
		}

		let errorHandler = () => {
			reject(new Error("Req to " + url + " failed"));
		}
	});
}