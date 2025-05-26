import { Link } from "react-router";

export default function CreateNotePage() {
  return (
    <div>
      <header className="w-full py-4">
      <nav className="flex justify-between">
        <span className="text-xl">Notes</span>
      </nav>
    </header>
      <Link to={"/"}>{"<"} Volver</Link>
      CreateNotePage
    </div>
  )
}
