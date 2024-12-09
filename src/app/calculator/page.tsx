import NavBar from "../components/NavBar";
import CritValueAndRollValue from "./CritValueAndRollValue";

const Calculator = () => {
    return (
        <div className="min-h-screen p-4 bg-indigo-950">
            <NavBar />
            <CritValueAndRollValue />
        </div>
    )
}

export default Calculator;