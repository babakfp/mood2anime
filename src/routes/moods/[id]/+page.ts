import { moods } from "$lib/data/moods"
import { error } from "@sveltejs/kit"

const EXCLUDED_TYPES = ["OVA", "Special", "CM", "PV", "TV Special"]

export const load = async ({ params, fetch }) => {
    const mood = moods.find((mood) => mood.id === Number(params.id))

    if (!mood) {
        return error(404)
    }

    const genresRes = await fetch("https://api.jikan.moe/v4/genres/anime")
    const genresResult = await genresRes.json()
    const genreIds = genresResult.data.map((g: any) => g.mal_id)
    const excludedGenreIds = genreIds.filter(
        (g: any) => !mood.genres.includes(g),
    )

    const url = new URL("https://api.jikan.moe/v4/anime")

    url.searchParams.append("genres_exclude", excludedGenreIds.join(","))
    url.searchParams.append("limit", "25")
    url.searchParams.append("min_score", "7")
    url.searchParams.append("order_by", "score")
    url.searchParams.append("sort", "desc")
    url.searchParams.append("page", "1")
    // url.searchParams.append("sfw", "true")
    // url.searchParams.append("rating", "rx")
    // url.searchParams.append("end_date", "2018-01-01")

    const res = await fetch(url)
    const result = await res.json()

    result.data = result.data.filter(
        (a: any) => EXCLUDED_TYPES.includes(a.type) === false,
    )

    return { mood, anime: result.data }
}
