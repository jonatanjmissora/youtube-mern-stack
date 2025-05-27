import { Plus } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Header() {

  const location = useLocation()


  return (
    <header className="w-full p-6">
      <nav className="flex justify-between">
        <span className="text-xl">Notas</span>
        {
          location.pathname === "/" &&
          <Link to={"/createNote"} className="flex gap-1 items-center group">
            <span className="text-blue-600 group-hover:text-blue-400 duration-200">Nueva</span>
            <Plus className="size-6 pt-1 text-blue-600 group-hover:text-blue-400 duration-200" />
          </Link>
        }
      </nav>
    </header>
  )
}