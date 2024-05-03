import { moods } from "$lib/data/moods"
import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
    const mood = moods.find((mood) => mood.id === Number(params.id))

    if (!mood) {
        return error(404)
    }
    // console.log(mood.genres)

    const url = new URL("https://api.jikan.moe/v4/anime")
    url.searchParams.append("genres", mood.genres.join(","))
    url.searchParams.append("min_score", "6")
    url.searchParams.append("order_by", "score")
    url.searchParams.append("sort", "desc")
    // url.searchParams.append("sfw", "false")
    // url.searchParams.append("rating", "rx")

    const res = await fetch(url)
    const anime = await res.json()

    return { name: mood.name, anime: anime.data }
}
