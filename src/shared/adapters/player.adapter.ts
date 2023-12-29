// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createPlayerAdapter = (character: any) => ({
  name: character.data.name,
  gender: character.data.gender,
  status: character.data.status
})
