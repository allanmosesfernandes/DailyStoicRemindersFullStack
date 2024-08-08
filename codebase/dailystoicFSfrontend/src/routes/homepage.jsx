import DailyQuote from "@/components/dailyQuote.jsx";


const HomePage = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-center text-center mt-8 h-lvh">
                <h1 className="font-gothic text-8xl border-t-2 border-slate-400 border-b-2 mt-20 mb-10 p-4">Daily Stoic Reminders</h1>
                <p className="text-3xl font-playfair w-9/12 m-auto">Embark on a daily ritual that connects you with the wisdom of the ancients. <br />Each quote serves as a gentle nudge towards introspection, helping you cultivate a balanced and mindful existence.</p>
            </div>
            <DailyQuote />
        </>
    )
}


export default HomePage;