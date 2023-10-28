import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'


function Home() {

	function handleSubmit(){
		Router.push('/thankyou?name=nonlnwza&amount=100');
	}

	return (
		<>
			<div className="hero min-h-screen">
				<div className="hero-content text-center glass rounded-2xl w-full">
					<div className="w-full my-5">
						<h1 className="text-3xl font-bold mb-2">🧧 Give Me Aungpao. NOW!!! 🧧</h1>
						<p className='text-lg mb-1'>🤑 Have you ever felt like you didn't know what to do with your money?  🤑</p>
						<p className='text-sm mb-5'>Just bring it to me. LOL</p>
						<input type="text" placeholder="Paste Your Money Here" className="input input-bordered input-error text-center w-full max-w-lg mr-2" />
						<button className="btn bg-orange-600 btn-error text-white font-normal normal-case mt-3 w-96 md:w-auto" onClick={(event) => handleSubmit(event)} >ByeBye <i className="fa-solid fa-chevron-right"></i></button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;