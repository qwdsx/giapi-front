
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCharacters = () => {
    return baseUrl + "/characters";
}

export const getCharacterById = (id: string) => {
    return baseUrl + "/characters?id=" + id;
}

export const getCharacter = (id: string) => {
    return baseUrl + "/characters" + `/${id}`;
}

export const getArtifactSubStats = () => {
    return baseUrl + "/artifacts/substats";
}