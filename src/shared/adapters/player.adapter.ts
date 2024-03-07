// TODO - Dar formato a character
export const createPlayerAdapter = (character: any) => ({
  id: character.id,
  image: character.image,
  name: character.name,
  gender: character.gender,
  species: character.species
})
