// TODO - Dar formato a character
export const createPlayerAdapter = (character: any) => ({
  id: character.data.id,
  image: character.data.image,
  name: character.data.name,
  gender: character.data.gender,
  species: character.data.species
})
