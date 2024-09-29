// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'Vive',

}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
