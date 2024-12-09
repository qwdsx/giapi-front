import NavBar from "@/app/components/NavBar";
import { getCharacter } from "@/app/methods/api-routes";
import { Character } from "@/app/types/api-types";

const CharacterRoute = async ({
    params
}: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id;
    
    const getCharInfo = async (id: string): Promise<Character> => {
        const data = await fetch(getCharacter(id));
		const json = await data.json();
        return json;
    }

    const characterInfo = await getCharInfo(id);

    return (
        <div className="min-h-screen p-4 bg-indigo-950">
            <NavBar />
            <div className="w-full bg-indigo-950 p-4">
                <div className="p-6 flex flex-col bg-indigo-900 rounded-lg">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col bg-indigo-950 rounded-lg p-6">
                            <div className="bg-indigo-900 border-indigo-500 border-b mb-4">
                                <img className="w-auto" src={characterInfo.icon_url} />
                            </div>
                            <div className="text-neutral-100 flex flex-col gap-1">
                                <div className="flex flex-row gap-1 items-center text-xl">
                                    <p>Name:</p>
                                    <p>{characterInfo.name}</p>
                                </div>
                                <div className="flex flex-row gap-1 items-center text-xl">
                                    <p>Vision:</p>
                                    <p>{characterInfo.vision}</p>
                                </div>
                                <div className="flex flex-row gap-1 items-center text-xl">
                                    <p>Weapon:</p>
                                    <p>{characterInfo.weapon}</p>
                                </div>
                                <div className="flex flex-row gap-1 items-center text-xl">
                                    <p>Rarity:</p>
                                    <p>{characterInfo.rarity}-Star</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CharacterRoute;
