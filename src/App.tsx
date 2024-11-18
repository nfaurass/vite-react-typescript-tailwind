import vite from "../public/vite.svg";
import react from "./assets/react.svg";

function App() {
    return (
        <div className="h-full min-h-screen w-full bg-zinc-800 flex gap-5 justify-center items-center">
            <img src={vite} alt="react" className="w-10 h-10"/>
            <img src={react} alt="react" className="w-10 h-10"/>
            <h1 className="text-3xl text-zinc-100">Template</h1>
        </div>
    )
}

export default App
