export default function queryBackend(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open("GET", url);
		req.onload = () => {
			if (req.status === 200) {
				resolve(req.response);
			} else {
				reject(new Error("Status code: " + req.status));
			}
		};
		req.onerror = () => {
			reject(new Error("Req to " + url + " failed"));
		};
		req.responseType = "json";
		req.setRequestHeader("Accept", "application/json");

		req.send();
	});
}