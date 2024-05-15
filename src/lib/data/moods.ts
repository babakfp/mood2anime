import type { Genre } from "./genres"

export type Mood = {
    id: number
    name: string
    emoji: string
    genres: Genre["mal_id"][]
}

export const moods: Mood[] = [
    {
        id: 1,
        name: "Eager for Action",
        emoji: "💥",
        genres: [1, 17, 18],
        // TODO: REMOVE
        // genres: [1],
    },
    {
        id: 2,
        name: "Adventurous Spirit",
        emoji: "⛰️",
        genres: [2, 21, 29],
    },
    {
        id: 3,
        name: "Racing Heartbeat",
        emoji: "🏎️",
        genres: [3, 54],
    },
    {
        id: 4,
        name: "Laughing Out Loud",
        emoji: "😂",
        genres: [4, 20, 57],
    },
    {
        id: 5,
        name: "Avant-Garde Wonder",
        emoji: "🎨",
        genres: [5, 40],
    },
    {
        id: 6,
        name: "Mythical Whispers",
        emoji: "🔮",
        genres: [6, 10, 66],
    },
    {
        id: 7,
        name: "Puzzled Curiosity",
        emoji: "🧩",
        genres: [7, 39],
    },
    {
        id: 8,
        name: "Emotionally Engaged",
        emoji: "😢",
        genres: [8, 37, 40],
    },
    {
        id: 9,
        name: "Ecchi Desires",
        emoji: "🐣🚫",
        genres: [9],
    },
    {
        id: 21,
        name: "Horny Desires",
        emoji: "🔞💦",
        genres: [12, 49],
    },
    {
        id: 10,
        name: "Dreaming of Fantasia",
        emoji: "🌌",
        genres: [10, 22],
    },
    {
        id: 11,
        name: "Strategizing Brilliance",
        emoji: "🧠",
        genres: [11, 39, 78],
    },
    {
        id: 12,
        name: "Exploring History",
        emoji: "📜",
        genres: [13, 63],
    },
    {
        id: 13,
        name: "Screaming in Terror",
        emoji: "😱",
        genres: [14, 56, 68],
    },
    {
        id: 14,
        name: "Cute Kids",
        emoji: "😻",
        genres: [53],
    },
    {
        id: 15,
        name: "Marveling at the Martial",
        emoji: "🥋",
        genres: [17, 54],
    },
    {
        id: 16,
        name: "Mechanical Wonders",
        emoji: "🤖",
        genres: [18, 28],
    },
    {
        id: 17,
        name: "Musical Reverie",
        emoji: "🎵",
        genres: [19, 70],
    },
    {
        id: 19,
        name: "Honoring Samurai Spirit",
        emoji: "⚔️",
        genres: [21, 42],
    },
]
