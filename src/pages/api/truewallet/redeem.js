import axios from "axios";
import { config } from '../../../config/config';

async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(404).send();
	} 

	const { url } = req.body ?? {};

	axios.post("https://giveme.nonlnwza.xyz/api/redeem", {
		url: url,
		number: config.api.truewallet.phoneNumber,
	}).then(response =>{
		return res.json(response);
	}).catch(e => {
		return res.json({
			status: "FAIL",
			error: e,
		});
	});
}



export default handler;