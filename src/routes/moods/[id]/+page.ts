import { error } from "@sveltejs/kit"
import { fetchAnimeByGenres } from "./lib"
import { getMoodById } from "$lib/utilities/getMoodById"

export const load = async ({ params, fetch }) => {
    const mood = getMoodById(Number(params.id))

    if (!mood) {
        return error(404)
    }

    const data = await fetchAnimeByGenres(fetch, mood.genres)

    return { mood, data }
}
