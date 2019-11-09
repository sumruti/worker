import axios from "axios";
import $ from "jquery";
import config from "../config.json";


export function register(email,pass) {
	console.log(email,"--",pass);
	return axios.post(config.ApiUrl+'register',{email:email,pass:pass});
};

