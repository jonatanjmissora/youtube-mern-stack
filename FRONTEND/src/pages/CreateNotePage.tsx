import { Link, useNavigate } from "react-router";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { fetchApi } from "../_lib/utils/fetch";
import type { NoteType } from "../components/NotesList";

export default function CreateNotePage() {
  return (
    <section className="h-full w-full">
      <header className="w-full py-4">
        <nav className="flex justify-between">
          <Link to={"/"} className="text-xl">Notes</Link>
        </nav>
      </header>

      <article className="w-full h-full flex flex-col">

        <Link to={"/"}>{"<"} Volver</Link>

        <div className="h-full mx-auto mt-20">
          <CreateNoteForm />
        </div>

      </article>
    </section>
  )
}
export type ResType = {
  success: boolean;
  message: string,
  data?: NoteType,
} | null

const CreateNoteForm = () => {

  const navigate = useNavigate()

  const [, formAction, isPending] = useActionState(async (_prevState: null, formData: FormData) => {
    const { title, content } = Object.fromEntries(formData.entries())
    if (!title.toString().trim() || !content.toString().trim()) {
      toast.error("Completa todos los campos")
    }
    const newNote = { title, content } as { title: string, content: string }

    const { success, message, data } = await fetchApi.createNote(newNote)
    if (!success) {
      toast.error("No se pudo crear Nota")
      console.log("Error del createform", message)
      return
    }
    toast.success(message)
    console.log("frontend nota creada", data)
    navigate("/")
    return

  }, null)

  return (
    <form action={formAction} className="flex flex-col gap-6 w-max p-8 bg-slate-400 rounded-lg">
      <p className="text-xl font-bold tracking-wider border-b">Crear una nueva nota</p>
      <div className="flex gap-2 items-center w-full">
        <label htmlFor="title" className="w-1/3">Título:</label>
        <input type="text" id="title" name="title" className="bg-white rounded-lg px-2 py-1 w-2/3 text-black" />
      </div>
      <div className="flex gap-2 items-center w-full">
        <label htmlFor="content" className="w-1/3">Contenido:</label>
        <textarea id="content" name="content" className="bg-white rounded-lg px-2 py-1 w-2/3 text-black" />
      </div>
      <button type="submit" disabled={isPending}>
        Crear
      </button>
    </form>
  )
}