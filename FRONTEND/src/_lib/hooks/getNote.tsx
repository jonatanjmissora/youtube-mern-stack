import { useEffect, useState } from "react"
import type { NoteType } from "../../components/NotesList"
import { fetchApi } from "../utils/fetch"

export const useGetNote = (id: string) => {

  const [note, setNote] = useState<NoteType>()
  const [success, setSuccess] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getNote = async () => {
      try {
        const { success: resSuccess, data } = await fetchApi.getNote(id)
        if (resSuccess) {
          setNote(data)
        }
        else 
          setSuccess(false)
      } catch (error) {
        console.log("Error al cargar notas", error)
        setSuccess(false)
      } finally {
        setLoading(false)
      }
    }
    getNote()
  }, [])

  console.log("en useGetNote: ", note)

  return { success, loading, note, setNote }
}