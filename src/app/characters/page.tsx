import NavBar from "../components/NavBar";
import CharacterSelection from "./CharacterSelection";


const Characters = () => {
    return (
        <div className="min-h-screen p-4 bg-indigo-950">
            <NavBar />
            <CharacterSelection />
        </div>
    )
}

export default Characters;