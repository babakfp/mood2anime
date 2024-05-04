import { moods } from "$lib/data/moods"
import type { Anime, GetAnimeSearch } from "$lib/types.js"
import { error } from "@sveltejs/kit"

const EXCLUDED_TYPES = [
    "OVA",
    "Special",
    "CM",
    "PV",
    "TV Special",
] satisfies Anime["type"][]

export const load = async ({ params, fetch }) => {
    const mood = moods.find((mood) => mood.id === Number(params.id))

    if (!mood) {
        return error(404)
    }

    const data = await fetchAnimeByGenres(fetch, mood.genres)

    return { mood, anime: data.data }
}

async function fetchAnimeByGenres(
    fetch: typeof window.fetch,
    genreIds: number[],
    page = 1,
) {
    const paginations: any[] = []
    const items: any[] = []

    for (const id of genreIds) {
        const animeItems = await fetchAnimeByGenre(fetch, id, page)
        paginations.push(animeItems.pagination)

        for (const animeItem of animeItems.data) {
            const existingItem = items.find(
                (item) => item.mal_id === animeItem.mal_id,
            )

            if (!existingItem) {
                items.push(animeItem)
            }
        }
    }

    return { paginations, data: items }
}

async function fetchAnimeByGenre(
    fetch: typeof window.fetch,
    genreId: number,
    page = 1,
) {
    const url = new URL("https://api.jikan.moe/v4/anime")

    url.searchParams.append("genres", String(genreId))
    url.searchParams.append("limit", "25")
    url.searchParams.append("min_score", "7")
    url.searchParams.append("order_by", "score")
    url.searchParams.append("sort", "desc")
    url.searchParams.append("page", String(page))

    try {
        const res = await fetch(url)
        const data: GetAnimeSearch = await res.json()

        data.data = data.data.filter((d: any) => {
            return d.trailer.url
        })

        data.data = data.data.filter(
            (a: any) =>
                !EXCLUDED_TYPES.includes(a.type) &&
                a.rank <= 2000 &&
                a.favorites > 500,
        )

        return data
    } catch (e: any) {
        return error(e.status, e.message || e.messages.toString())
    }
}
