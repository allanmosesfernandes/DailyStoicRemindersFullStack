import DailyQuote from "@/components/dailyQuote.jsx";
import Navbar from "@/components/header";


const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-center text-center lg:mt-8 mt-6 h-lvh">
                <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 lg:mt-20 mt-0 mb-10 p-4">Daily Stoic Reminders</h1>
                <p className="lg:text-3xl text-xl font-playfair lg:w-9/12 w-11/12 m-auto">Embark on a daily ritual that connects you with the wisdom of the ancients. <br />Each quote serves as a gentle nudge towards introspection, helping you cultivate a balanced and mindful existence.</p>
            </div>
            <DailyQuote />
        </>
    )
}


export default HomePage;