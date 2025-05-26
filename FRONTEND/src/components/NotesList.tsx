import { Link } from "react-router"
import dateFormater from "../_lib/utils/dateFormater";
import { useGetNotes } from "../_lib/hooks/getNotes";
import { fetchApi } from "../_lib/utils/fetch";
import toast from "react-hot-toast";

export type NoteType = {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const NotesMock = [
    {
        "_id": "68310bc8ebe61b2cd3d10689",
        "title": "my second title",
        "content": "my second content",
        "createdAt": "2025-01-01T23:59:01.014Z",
        "updatedAt": "2025-01-01T23:59:01.014Z",
        "__v": 0
    },
    {
        "_id": "68310bc8ece61b2cd3d10689",
        "title": "my first title",
        "content": "my first content",
        "createdAt": "2026-05-23T23:59:05.014Z",
        "updatedAt": "2026-05-23T23:59:05.014Z",
        "__v": 0
    }

]

export default function NotesList() {

    const { success, loading, notes, setNotes } = useGetNotes()

    if (!success)
        return (
            <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
                <span>⚠ Error al cargar notas.</span>
            </div>
        )

    if (notes.length === 0 && !loading)
        return <NoNotes />

    return (
        <article className="w-full h-ful py-12 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
            {
                true
                    ? <div className="w-full h-full flex justify-center items-center bg-red-500">
                        <span className="mx-auto text-2xl font-bold tracking-wider">Loading...</span>
                    </div>
                    : notes.map(note => <Note key={note._id} note={note} setNotes={setNotes} />)
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

const Note = ({ note, setNotes }: { note: NoteType, setNotes: React.Dispatch<React.SetStateAction<NoteType[]>> }) => {

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!window.confirm("Seguro quieres eliminar la nota?")) return

        const { success, message, data } = await fetchApi.deleteNote(note._id)
        if (!success) {
            toast.error("No se pudo borrar la nota")
            console.log("Error del handleDelete", message)
            return
        }
        toast.success("frontend nota borrada", data)
        console.log("frontend nota borrada", data)
        setNotes(prev => prev.filter(prevNote => prevNote._id !== note._id))
        return

    }

    return (
        <div className="flex flex-col gap-4 p-8 bg-slate-400 rounded-lg">
            <p className="font-bold tracking-wider border-b py-1">{note.title}</p>
            <p>{note.content}</p>
            <div className="flex justify-between items-center">
                <span>{dateFormater(new Date(note.updatedAt))}</span>
                <div className="flex gap-1">
                    <Link to={`/note/${note._id}`}><button>🖍</button></Link>
                    <button onClick={handleDelete}>🗑</button>
                </div>
            </div>
        </div>
    )
}