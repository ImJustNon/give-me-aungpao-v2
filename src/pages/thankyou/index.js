import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function Thankyou(){
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const searchParams = useSearchParams();

	useEffect(() =>{
		const getName = searchParams.get('name');
		const getAmount = searchParams.get('amount');
		setName(getName);
		setAmount(getAmount);
	}, [searchParams]);

    return (
        <>
            <div className="hero min-h-screen">
				<div className="hero-content text-center glass rounded-2xl w-full">
					<div className="w-full my-5">
						<h1 className="text-2xl font-bold mb-2 text-black">😍 Thank you <span className="font-bold text-4xl text-error">{name}</span> for being scammed <span className="font-bold text-4xl text-error">{amount}</span> Baht. 💸</h1>
						<p className="text-lg mb-1 text-black">🤔 Still can{"'"}t figure out what to do with the money? 🤔</p>
						<p className="text-sm mb-5 text-black">Just click the button below. LOL</p>
						<Link className="btn bg-orange-600 btn-error text-white font-normal normal-case mt-3 w-96 md:w-auto" href="/" ><i className="fa-solid fa-chevron-left"></i> Go ByeBye Again</Link>
					</div>
				</div>
			</div>
        </>
    );
}

export default Thankyou;