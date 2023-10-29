import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'
import axios from 'axios';

function Home() {
	const [voucherUrl, setVoucherUrl] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function handleSubmit(){
		axios.post("/api/truewallet/redeem", {
			url: voucherUrl,
		}).then(response =>{
			if(response.data.error){
				setErrorMessage("🤬 What did you just sended to me? I only need money. 💵");
			}
			else {
				Router.push(`/thankyou?name=${response.data.data.from}&amount=${response.data.data.amount}`);
			}
		}).catch(() => {
			setErrorMessage("Request problem please try again later. na 😅");
		});
	}
	function handleInput(event){
		setVoucherUrl(event.target.value);
		setErrorMessage("");
	}

	return (
		<>
			<div className="hero min-h-screen">
				<div className="hero-content text-center glass rounded-2xl w-full">
					<div className="w-full my-5">
						<h1 className="text-3xl font-bold mb-2">🧧 Give Me Aungpao. NOW!!! 🧧</h1>
						<p className='text-lg mb-1'>🤑 Have you ever felt like you didn{"'"}t know what to do with your money?  🤑</p>
						<p className='text-sm mb-5'>Just bring it to me. LOL</p>
						<input type="text" placeholder="Paste Your Money Here" className="input input-bordered input-error text-center w-full max-w-lg mr-2" onChange={(e) => handleInput(e)} />
						<button className="btn bg-orange-600 btn-error text-white font-normal normal-case mt-3 w-96 md:w-auto" onClick={(event) => handleSubmit(event)} >ByeBye <i className="fa-solid fa-chevron-right"></i></button>
						{errorMessage ? 
							<p className='text-error text-sm mt-3'>{errorMessage}</p> 
							: 
							<></>
						}
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;