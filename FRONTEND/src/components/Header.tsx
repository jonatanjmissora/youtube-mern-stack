import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <nav>
        <span className="title2">Notes</span>
        <Link to={"/createNote"}>New Note</Link>
      </nav>
    </>
  )
}