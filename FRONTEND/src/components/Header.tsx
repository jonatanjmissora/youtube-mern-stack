import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <nav>
        <span className="">Notes</span>
        <Link to={"/createNote"}>New Note</Link>
      </nav>
    </>
  )
}