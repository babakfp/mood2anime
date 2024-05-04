import { getMoodGenresById } from "$lib/utilities/getMoodGenresById.js"
import { fetchAnimeByGenres } from "./lib"

export const actions = {
    default: async ({ request, params }) => {
        const formData = await request.formData()

        const current_page = formData.get("current_page")

        const genres = getMoodGenresById(Number(params.id))

        const data = await fetchAnimeByGenres(
            fetch,
            genres.map((g) => g.mal_id),
            Number(current_page) + 1,
        )

        return data
    },
}
