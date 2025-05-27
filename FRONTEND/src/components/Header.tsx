import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full py-4">
      <nav className="flex justify-between">
        <span className="text-xl">Notas</span>
        <Link to={"/createNote"}>Nueva +</Link>
      </nav>
    </header>
  )
}