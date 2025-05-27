import { useActionState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import type { NoteType } from "../components/NotesList";
import { useGetNote } from "../_lib/hooks/getNote";
import { fetchApi } from "../_lib/utils/fetch";

export default function DetailNotePage() {

  const {id} = useParams()

  const { success, loading, note } = useGetNote(id ?? "0")
  console.log(success, loading, note)

  return (
    <section className="h-full w-full">
      <header className="w-full py-4">
        <nav className="flex justify-between">
          <Link to={"/"} className="text-xl">Notas</Link>
        </nav>
      </header>
      
      <article className="w-full h-full flex flex-col">

        <Link to={"/"}>{"<"} Volver</Link>

        <div className="h-full mx-auto mt-20">
          {
            loading
              ? <span>Loading...</span> 
              : success ? <UpdateNoteForm note={note} /> : <span>⚠ Error de carga</span>
          }
          
        </div>

      </article>

    </section>
  )
}

const UpdateNoteForm = ({note}:{note: NoteType | undefined}) => {

  const navigate = useNavigate() 
  if(!note) return <span>No existe nota</span>

  const [, formAction] = useActionState(async (prevState: null, formData: FormData) => {
    const { title, content } = Object.fromEntries(formData.entries())
    if (!title.toString().trim() || !content.toString().trim()) {
      toast.error("Completa todos los campos")
      return null
    }
    const newNote = { title, content } as { title: string, content: string }

    const { success, message, data } = await fetchApi.updateNote(note._id, newNote)
    if (!success) {
      toast.error("No se pudo editar Nota")
      console.log("Error del updateform", message)
      return null
    }
    toast.success(message)
    console.log("frontend nota editada: ", data)
    navigate("/")
    return null
  }, null)

  return (
    <form action={formAction} className="flex flex-col gap-6 w-max p-8 bg-slate-400 rounded-lg">
      <p className="text-xl font-bold tracking-wider border-b">Crear una nueva nota</p>

      <div className="flex gap-2 items-center w-full">
        <label htmlFor="title" className="w-1/3">Título:</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          className="bg-white rounded-lg px-2 py-1 w-2/3 text-black"
          defaultValue={note?.title}
        />
      </div>

      <div className="flex gap-2 items-center w-full">
        <label htmlFor="content" className="w-1/3">Contenido:</label>
        <textarea 
          id="content" 
          name="content" 
          className="bg-white rounded-lg px-2 py-1 w-2/3 text-black"
          defaultValue={note?.content}
        />
      </div>

      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Crear
      </button>
    </form>
  )
}
