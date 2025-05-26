import { useEffect, useState } from "react"
import type { NoteType } from "../../components/NotesList"
import { fetchApi } from "../utils/fetch"

export const useGetNotes = () => {

  const [notes, setNotes] = useState<NoteType[]>([])
  const [success, setSuccess] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getNotes = async () => {
      try {
        const { success: resSuccess, data } = await fetchApi.getNotes()
        if (resSuccess) {
          setNotes(data)
        }
      } catch (error) {
        console.log("Error al cargar notas", error)
        setSuccess(false)
      } finally {
        setLoading(false)
      }
    }
    getNotes()
  }, [])

  return { success, loading, notes, setNotes }
}