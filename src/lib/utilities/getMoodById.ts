import { moods } from "$lib/data/moods"

export const getMoodById = (id: number) => {
    return moods.find((mood) => mood.id === id)
}
