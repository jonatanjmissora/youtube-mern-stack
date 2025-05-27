
export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className="w-full flex justify-end gap-4 px-6 py-3 text-sm">
      <span>KatoDev</span>
      <span>{year}</span>
    </footer>
  )
}
