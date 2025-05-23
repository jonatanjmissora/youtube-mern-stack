const notesControllers = {
    show: (req, res) => {
        try {
            return res.status(200).json({ message: "Notes showed" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

    showOne: (req, res) => {
        try {
            return res.status(200).json({ message: "Note showed" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

    create: (req, res) => {
        try {
            return res.status(200).json({ message: "Note created" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    
    update: async (req, res) => {
        try {
            return res.status(200).json({ message: "Note updated" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

    delete: async (req, res) => {
        try {
            return res.status(200).json({ message: "Note deleted" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default notesControllers