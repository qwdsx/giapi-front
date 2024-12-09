'use client'
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { getCharacterById } from "../methods/api-routes";
import { replaceSpacesWithUnderscores } from "../methods/helpers";

const CharacterSelection = () => {
	const [data, setData] = useState<string[]>();
	const [search, setSearch] = useState<string>("");

	const getData = async () => {
		const data = await fetch(getCharacterById(search));
		const json = await data.json();
		console.log(json)
		setData(json);
	}

	useEffect(() => {
		getData();
	}, [search])

    return (
        <div className="w-full bg-indigo-950 p-4">
			<div className="p-6 flex flex-col gap-6 bg-indigo-900 rounded-lg">
				<div className="w-full flex items-center gap-2">
					<input
						className="pl-4 p-2 bg-indigo-950 text-white rounded-lg"
						onChange={(e) => setSearch(replaceSpacesWithUnderscores(e.target.value))}
						placeholder="Search.."
					/>
					<svg className="size-10 fill-indigo-400 text-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
						<path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/>
					</svg>
				</div>
				<div className="grid grid-flow-row grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-12 gap-6 overflow-y-auto overflow-x-hidden">
					{(data) && data.map((id, index) => (
						<CharacterCard id={id} key={index} />
					))}
				</div>
			</div>
        </div>
    )
}

export default CharacterSelection;