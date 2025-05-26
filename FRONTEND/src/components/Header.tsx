import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full py-4">
      <nav className="flex justify-between">
        <span className="text-xl">Notes</span>
        <Link to={"/createNote"}>New Note +</Link>
      </nav>
    </header>
  )
}