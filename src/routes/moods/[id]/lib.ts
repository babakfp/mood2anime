import { error } from "@sveltejs/kit"
import type { Anime, GetAnimeSearch } from "$lib/types.js"

const EXCLUDED_TYPES = [
    "OVA",
    "Special",
    "CM",
    "PV",
    "TV Special",
] satisfies Anime["type"][]

const fetchAnimeByGenre = async (
    fetch: typeof window.fetch,
    genreId: number,
    page = 1,
) => {
    const url = new URL("https://api.jikan.moe/v4/anime")

    url.searchParams.append("genres", String(genreId))
    url.searchParams.append("limit", "25")
    url.searchParams.append("min_score", "7")
    url.searchParams.append("order_by", "score")
    url.searchParams.append("sort", "desc")
    url.searchParams.append("page", String(page))

    const res = await fetch(url)
    const data: GetAnimeSearch = await res.json()

    console.log("//////////////")

    // @ts-expect-error
    if (data.type) {
        // @ts-expect-error
        return error(data.status, data.message)
    }

    console.dir(data, { depth: 1 })

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
}

export const fetchAnimeByGenres = async (
    fetch: typeof window.fetch,
    genreIds: number[],
    page = 1,
) => {
    const data: {
        paginations: GetAnimeSearch["pagination"][]
        items: GetAnimeSearch["data"]
    } = {
        paginations: [],
        items: [],
    }

    for (const id of genreIds) {
        const animeItems = await fetchAnimeByGenre(fetch, id, page)
        data.paginations.push(animeItems.pagination)

        for (const animeItem of animeItems.data) {
            const existingItem = data.items.find(
                (item) => item.mal_id === animeItem.mal_id,
            )

            if (!existingItem) {
                data.items.push(animeItem)
            }
        }
    }

    return data
}
