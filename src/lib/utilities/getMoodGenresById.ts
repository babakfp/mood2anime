import { moods } from "$lib/data/moods"
import { genres } from "$lib/data/genres"

export const getMoodGenresById = (moodId: number) => {
    const mood = moods.find((mood) => mood.id === moodId)

    if (!mood) {
        throw new Error("Mood not found")
    }

    return genres.filter((genre) => mood.genres.includes(genre.mal_id))
}
