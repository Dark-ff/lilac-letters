export default function CreateLetter() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8a2ff]">
          Create Letter
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Write something meaningful.
        </h1>

        <p className="mb-12 text-lg text-[#d6ccff]">
          Some words deserve more care than a text message.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-[#b8a2ff]/10 bg-white/5 p-8">

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8a2ff]">
                Choose a Letter Theme
              </p>

              <div className="mb-10 flex flex-wrap gap-4">

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Birthday
                </button>

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Friendship
                </button>

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Farewell
                </button>

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Confession
                </button>

              </div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8a2ff]">
                Choose a Visual Style
              </p>

              <div className="flex flex-wrap gap-4">

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Old Paper
                </button>

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Dark Aesthetic
                </button>

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Moonlit
                </button>

                <button className="rounded-full border border-[#b8a2ff]/30 px-5 py-3 transition hover:bg-white hover:text-black">
                  Minimal
                </button>

              </div>

              <p className="mt-6 text-sm text-[#d6ccff]">
                Themes shape the feeling of your letter. Visual styles shape how it is experienced.
              </p>

            </div>

            <input
              type="text"
              placeholder="Letter title"
              className="w-full rounded-2xl border border-[#b8a2ff]/10 bg-white/5 p-5 outline-none placeholder:text-zinc-500"
            />

            <div className="space-y-5">

              <textarea
                placeholder="Who is this letter for?"
                className="h-28 w-full rounded-3xl border border-[#b8a2ff]/10 bg-white/5 p-6 outline-none placeholder:text-zinc-500"
              />

              <textarea
                placeholder="What have you been wanting to say?"
                className="h-48 w-full rounded-3xl border border-[#b8a2ff]/10 bg-white/5 p-6 outline-none placeholder:text-zinc-500"
              />

              <textarea
                placeholder="What memory still stays with you?"
                className="h-40 w-full rounded-3xl border border-[#b8a2ff]/10 bg-white/5 p-6 outline-none placeholder:text-zinc-500"
              />

              <textarea
                placeholder="What do you hope they feel after reading this?"
                className="h-32 w-full rounded-3xl border border-[#b8a2ff]/10 bg-white/5 p-6 outline-none placeholder:text-zinc-500"
              />

            </div>

            <input
              type="password"
              placeholder="Set a password"
              className="w-full rounded-2xl border border-[#b8a2ff]/10 bg-white/5 p-5 outline-none placeholder:text-zinc-500"
            />

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-[#b8a2ff]/10 bg-white/5 p-8">

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8a2ff]">
                Live Preview
              </p>

              <div className="rounded-3xl border border-[#b8a2ff]/10 bg-[#111] p-10">

                <h2 className="mb-4 text-3xl font-semibold">
                  To Someone I Never Said Enough To
                </h2>

                <p className="leading-relaxed text-[#d6ccff]">
                  Some feelings stay quiet for too long. Maybe this letter is my way of finally letting them breathe.
                </p>

                <div className="mt-10 border-t border-[#b8a2ff]/10 pt-6">

                  <p className="text-sm text-[#b8a2ff]">
                    Protected with a private password
                  </p>

                  <p className="mt-2 text-sm text-[#888]">
                    Only the person with the link and password can open this letter.
                  </p>

                </div>

              </div>

            </div>

            <button className="rounded-full border border-[#b8a2ff]/30 px-8 py-4 transition hover:bg-white hover:text-black">
              Save Letter
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}