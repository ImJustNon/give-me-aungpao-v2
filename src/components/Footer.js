function Footer(){
    return (
        <footer className='container'>
            <div className='fixed w-full bottom-6 text-center'>
                <p className='font-medium'>Copyright © {new Date().getFullYear()} - <a href="https://me.nonlnwza.xyz" target="_blank" className="font-bold">Nonlnwza.xyz</a></p>
            </div>
        </footer>
    );
}

export default Footer;