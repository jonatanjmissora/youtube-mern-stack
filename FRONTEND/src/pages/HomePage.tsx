import Header from "../components/Header";
import NotesList from "../components/NotesList";

export default function HomePage() {
  return (
    <section className="w-full h-full flex flex-col">
      <Header />
      <NotesList />
    </section>
  )
}
