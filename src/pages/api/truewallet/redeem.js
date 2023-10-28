import axios from "axios";
import { config } from '../../../config/config';

async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(404).send();
	} 

	const { url } = req.body ?? {};

	if(!url){
		return res.json({
			status: "FAIL",
			error: "You have to provided voucher url",
		});
	}

	await redeemVoucher(config.api.truewallet.phoneNumber, url);

	async function redeemVoucher(phoneNumber = "", voucherUrl = ""){
		if(!(phoneNumber = (phoneNumber + "").trim()).length || phoneNumber.match(/\D/)){ 
			return res.json({
				status: "FAIL",
				error: "INVAILD_PHONENUMBER"	
			});
		}
		let r = (voucherUrl += "").split("v=");
		if(18 != (voucherUrl = (r[1] || r[0]).match(/[0-9A-Za-z]+/)[0]).length){ 
			return res.json({
				status: "FAIL",
				error: "INVAILD_VOUCHER"	
			});
		}

		axios.post(`https://gift.truemoney.com/campaign/vouchers/${voucherUrl}/redeem`, {
			mobile: phoneNumber,
			voucher_hash: voucherUrl,
		}, {
			headers: {
			 	'Content-Type': 'application/json'
			}
		}).then(response => {
			console.log(response.status);
			if(response.status.code == "SUCCESS"){
				return res.json({
					status: "SUCCESS",
					error: null,
					data: {
						amount: Number(response.data.my_ticket.amount_baht.replace(/,/g, '')),
						voucherOwner: response.data.owner_profile.full_name, 
						voucherUrl: voucherUrl,
					}	
				});
			}
			else {
				return res.json({
					status: "FAIL",
					error: response.status.code
				});
			}
		}).catch(e => {});
	}
}



export default handler;