import { genres } from "$lib/data/genres"
import { getMoodById } from "./getMoodById"

export const getMoodGenresById = (moodId: number) => {
    const mood = getMoodById(moodId)

    if (!mood) {
        throw new Error("Mood not found")
    }

    return genres.filter((genre) => mood.genres.includes(genre.mal_id))
}
