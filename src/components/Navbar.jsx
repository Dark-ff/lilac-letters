import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black border-b border-zinc-800 px-8 py-4 text-white">
      <h1 className="text-xl font-semibold">
        Lunareth Letters
      </h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create Letter</Link>
        <Link to="/my-letters">My Letters</Link>
      </div>
    </nav>
  )
}