import Note from "../models/Note.js"

const notesControllers = {
    show: async (_, res) => {
        try {
            const notes = await Note
                .find()
                .sort({createdAt: 1})
            return res.status(200).json(notes)
        } catch (error) {
            console.error("Error en show", error.message)
            return res.status(500).json({ message: error.message })
        }
    },

    showOne: async (req, res) => {
        try {
            const id = req.params.id
            const note = await Note.findById(id)
            console.log(note)
            if(!note) {
                return res.status(404).json({message: "Note not found"})
            }
            return res.status(200).json(note)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

    create: async (req, res) => {
        try {
            const {title, content} = req.body
            const newNote = new Note({title, content})
            await newNote.save()
            return res.status(201).json({ message: "Note created successfully" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    
    update: async (req, res) => {
        try {
            const id = req.params.id
            const {title, content} = req.body
            const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true})
            if(!updatedNote) {
                return res.status(404).json({message: "Note not found"})
            }
            return res.status(200).json({ message: "Note updated successfully" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const {title, content} = req.body
            const deletedNote = await Note.findByIdAndDelete(id, {title, content}, {new: true})
            if(!deletedNote) {
                return res.status(404).json({message: "Note not found"})
            }
            return res.status(200).json({ message: "Note deleted successfully" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
}

export default notesControllers