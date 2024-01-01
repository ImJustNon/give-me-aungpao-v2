import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'
import axios from 'axios';

function Home() {
	const [voucherUrl, setVoucherUrl] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	
	function handleSubmit(){
		setIsLoading(true);
		axios.post("/api/truewallet/redeem", {
			url: voucherUrl,
		}).then(response =>{
			if(response.data.error){
				setErrorMessage("🤬 What did you just sended to me? I only need money. 💵");
			}
			else {
				Router.push(`/thankyou?name=${response.data.data.from}&amount=${response.data.data.amount}`);
			}
			setIsLoading(false);
		}).catch(() => {
			setErrorMessage("Request problem please try again later. na 😅");
			setIsLoading(false);
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
						<h1 className="text-3xl font-bold mb-2 text-black">🧧 Give Me Aungpao. NOW!!! 🧧</h1>
						<p className='text-lg mb-1 text-black'>🤑 Have you ever felt like you didn{"'"}t know what to do with your money?  🤑</p>
						<p className='text-sm mb-5 text-black'>Just bring it to me. LOL</p>
						<input type="text" placeholder="Paste Your Money Here" className="input input-bordered input-error text-center w-full max-w-lg mr-2 bg-white text-black placeholder:text-black placeholder:font-medium" onChange={(e) => handleInput(e)} />
						<button className="btn bg-orange-600 btn-error text-white font-normal normal-case mt-3 w-96 md:w-40" onClick={(event) => handleSubmit(event)} >
							{isLoading === true ?  
								<>
									<span className="loading loading-spinner loading-xs"></span>
									Loading
								</>
								: 
								<>
									ByeBye 
									<i className="fa-solid fa-chevron-right"></i> 
								</>
							}
							
						</button>
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