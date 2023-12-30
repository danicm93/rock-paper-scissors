// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createPlayerAdapter = (character: any) => ({
  id: character.data.id,
  image: character.data.image,
  name: character.data.name,
  gender: character.data.gender,
  species: character.data.species
})
