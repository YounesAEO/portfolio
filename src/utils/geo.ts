import axios from 'axios';

export function getLocationFromIp() {
	// return axios.get(
	// 	`http://api.ipstack.com/1.32.239.255?access_key=${process.env.REACT_APP_IPSTACK_API_KEY}&fields=country_code,region_code,city`
	// );
	return axios.get(`https://www.cloudflare.com/cdn-cgi/trace`);
}
