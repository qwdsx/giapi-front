'use client'
import { useEffect, useState } from "react";
import { calculateCritValue, calculateRollValue } from "../methods/calc";
import { getArtifactSubStats } from "../methods/api-routes";
import { SubStat, SubStatRollTotal } from "../types/api-types";

const CritValueAndRollValue = () => {
    const [subStats, setSubStats] = useState<SubStat[]>();
    const [critValue, setCritValue] = useState<number>();
    const [rollValue, setRollValue] = useState<number>();

    const calculateCritValueAndRollValue = (formData: FormData) => {
        const atk = formData.get("atk")!.toString();
        const atk_per = formData.get("atk_per")!.toString();
        const def = formData.get("def")!.toString();
        const def_per = formData.get("def_per")!.toString();
        const hp = formData.get("hp")!.toString();
        const hp_per = formData.get("hp_per")!.toString();
        const em = formData.get("em")!.toString();
        const er = formData.get("er")!.toString();
        const cr = formData.get("cr")!.toString();
        const cd = formData.get("cd")!.toString();

        const subStatRolls: SubStatRollTotal[] = [
            {
                "id": "atk",
                "value": atk
            },
            {
                "id": "atk_per",
                "value": atk_per
            },
            {
                "id": "def",
                "value": def
            },
            {
                "id": "def_per",
                "value": def_per
            },
            {
                "id": "hp",
                "value": hp
            },
            {
                "id": "hp_per",
                "value": hp_per
            },
            {
                "id": "em",
                "value": em
            },
            {
                "id": "er",
                "value": er
            },
            {
                "id": "cr",
                "value": cr
            },
            {
                "id": "cd",
                "value": cd
            }
        ];

        const critValue = calculateCritValue(parseFloat(cr), parseFloat(cd));
        setCritValue(undefined);
        setCritValue(critValue);

        const rollValue = calculateRollValue(subStats!, subStatRolls);
        setRollValue(undefined);
        setRollValue(rollValue);
    }

    const getSubStats = async () => {
        const data = await fetch(getArtifactSubStats());
        const json = await data.json();
        setSubStats(json);
    }

    useEffect(() => {
        getSubStats();
    }, [])

    return (
        <div className="p-4 bg-indigo-950">
            <div className="w-full flex text-white bg-indigo-900 p-6 rounded-lg">
                <div className="w-1/3 items-center border-r border-indigo-500">
                    <h1 className="font-bold text-xl">Enter your artifact substats</h1>
                    <div className="mt-5">
                        <form id="artifact-substats-form" action={calculateCritValueAndRollValue}>
                            {(subStats) && subStats.map((subStat: SubStat, index: number) => (
                                <div className="flex p-1" key={index}>
                                    <input className="bg-indigo-950 rounded pl-2 p-1" name={subStat.id} placeholder={subStat.name} />
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-2/3 pl-5">
                    <div className="flex gap-1 items-center">
                        <h1 className="text-xl">CV:</h1>
                        <div className="flex items-center justify-end bg-indigo-950 p-5 w-full rounded-lg">
                            <p className="text-2xl">{(critValue) ? +critValue.toFixed(2) : "0"}</p>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                    <h1 className="text-xl">RV:</h1>
                        <div className="flex items-center justify-end bg-indigo-950 p-5 w-full rounded-lg">
                            <p className="text-2xl overflow-hidden">{(rollValue) ? +rollValue.toFixed(2) : "0"}</p>
                        </div>
                    </div>
                    <div>
                        <button className="p-2 border float-right border-indigo-600 bg-indigo-700 rounded-xl hover:border-indigo-700 hover:bg-indigo-800" form="artifact-substats-form" type="submit">
                            Calculate Crit Value / Roll Value
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CritValueAndRollValue;