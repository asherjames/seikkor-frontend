import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Layout from "./pages/Layout";
import Photos from "./pages/Photos";

const app = document.getElementById('app');

function run() {
	ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<Route path="photos" component={Photos}></Route>
				<Route path="about" component={About}></Route>
			</Route>
		</Router>, 
	app);
}

if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', run);
} else {
	window.attachEvent('onload', run);
}