import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Changelog Customer Impact Router",
  description: "Route changelog items to affected customers automatically. Analyzes git commits and feature flags to send targeted notifications."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4247af95-242e-49d4-be98-d0405942dcfa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
