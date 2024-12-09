import { useEffect, useState } from "react";
import { Character } from "../types/api-types";
import Link from "next/link";
import { getCharacter } from "../methods/api-routes";

interface CharacterCardProps {
    id: string
}

const CharacterCard = ({ id }: CharacterCardProps) => {
	const [data, setData] = useState<Character>();
	const [rarityStyle, setRarityStyle] = useState("");

	const getData = async () => {
		const data = await fetch(getCharacter(id));
		const json: Character = await data.json();

		if (json.rarity === 5) {
			setRarityStyle("border-2 border-amber-600 bg-amber-900");
		} else if (json.rarity === 4) {
			setRarityStyle("border-2 border-violet-600 bg-violet-900");
		} else {
			setRarityStyle("border");
		}

		setData(json);
	}

	useEffect(() => {
		getData();
	}, [id])

    return (
        (data) && (
            <div>
				<Link href={`/characters/${data.id}`}>
                	<img className={`w-24 ${rarityStyle} rounded-lg`} src={data.icon_url}/>
				</Link>
            </div>
        )
    )
}

export default CharacterCard;