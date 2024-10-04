const Disclaimer = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-center text-center lg:my-20 mb-8">
                <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 mb-10 p-4">
                    Disclaimer
                </h1>
                <div className="leading-relaxed">
                    <p className="lg:text-2xl sm:text-xl text-md font-playfair lg:w-9/12 w-11/12 m-auto leading-10">
                        Please be advised that all of the quotes featured on this website are
                        sourced from the book{' '}
                        <a href="https://ryanholiday.net/ryan-holiday-books/" target="_blank" className="underline">
                            The Daily Stoic{' '}
                        </a>
                        by Ryan Holiday. <br /> We do not own any of the content on this section and intend
                        no copyright infringement. Our website is simply a tool to spread the
                        teachings of stoicism.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
