import { Link } from "react-router"

type NoteType = {
    _id: string;
    title: string;
    content: string;
}

export default function NotesList() {
    const notes: NoteType[] = [{_id: "1", title: "Hola", content:"mundo"}, {_id: "2", title: "Hola", content:"mundo"}] 
    if(notes.length === 0)
        return <NoNotes/>

  return (
    <article className="py-12 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
        {
            notes.map(note => <Note key={note._id} note={note}/>)
        }
    </article>
  )
}

const NoNotes = () => {
    return (
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <span>📖 No hay notas.</span>
            <span>Agrega algunas notas</span>
            <Link to={"/createNote"}>
                Agregar Nota +
            </Link>
        </div>
    )
}

const Note = ({note}: {note: NoteType}) => {
    return(
        <div className="flex flex-col gap-4 p-8 bg-slate-400 rounded-lg">
            <p className="font-bold tracking-wider border-b py-1">{note.title}</p>
            <p>{note.content}</p>
            <div className="flex justify-between items-center">
                <span>{note.title}</span>
                <div className="flex gap-4">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}