'use client'
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { SubStat } from "../types/api-types";
import { getArtifactSubStats } from "../methods/api-routes";

const Artifacts = () => {
    const [subStats, setSubStats] = useState<SubStat[]>();

    const getSubStats = async () => {
        const data = await fetch(getArtifactSubStats());
        const json = await data.json();
        setSubStats(json);
    }

    useEffect(() => {
        getSubStats();
    }, [])

    return (
        <div className="min-h-screen p-4 bg-indigo-950">
            <NavBar />
            <div className="p-4 bg-indigo-950">
                <div className="w-full flex text-white bg-indigo-900 p-6 rounded-lg">
                    <div className="w-1/3">
                        <h1 className="font-bold text-xl">Artifact substat rolls</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras vitae accumsan enim, at commodo orci. Nunc porta nulla ornare, feugiat leo eget, cursus eros.
                            Integer ultricies facilisis ante a porttitor. Cras consequat arcu et maximus mattis.
                            Nullam aliquet lectus quis diam gravida, in viverra nisi hendrerit.
                            Maecenas eget augue ut.
                        </p>3
                    </div>
                    <div className="w-2/3">
                        <div className="bg-indigo-800 rounded-lg">
                            <table className="table-auto text-center w-full">
                                <thead className="border-b border-indigo-500">
                                    <tr>
                                        <th className="p-2">Substat</th>
                                        <th className="p-2">Values</th>
                                        <th className="p-2">Max roll</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(subStats) && subStats.map((subStat, index) => (
                                        <tr key={index} className="odd:bg-indigo-700 even:bg-indigo-800">
                                            <td className="border-r border-indigo-500 p-2">{subStat.name}</td>
                                            <td className="border-r border-indigo-500 p-2">{subStat.roll_values.join(" / ")}</td>
                                            <td className="p-2">{subStat.max_roll}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artifacts;