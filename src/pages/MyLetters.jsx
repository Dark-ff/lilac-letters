import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
export default function MyLetters() {
  const letters = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)

    if (key.startsWith("lunareth-")) {
      letters.push(
        JSON.parse(localStorage.getItem(key))
      )
    }
  }

  letters.sort(
    (a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold mb-8">
          My Letters
        </h1>

      {letters.length === 0 && (
        <p className="text-zinc-500">
          No letters yet.
        </p>
      )}

      <div className="space-y-4">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className="rounded-2xl border border-zinc-800 p-6"
          >
            <h2 className="text-2xl font-semibold">
              {letter.title}
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              {new Date(
                letter.createdAt
              ).toLocaleDateString()}
            </p>

            <p className="text-zinc-400 mt-2">
              {letter.theme}
            </p>

            <Link
              to={`/letter/${letter.id}`}
              className="inline-block mt-4 border px-4 py-2 rounded-xl"
            >
              Open Letter
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem(
                  `lunareth-${letter.id}`
                )
                window.location.reload()
              }}
              className="ml-4 border border-red-500 px-4 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}