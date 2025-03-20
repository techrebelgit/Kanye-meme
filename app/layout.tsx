import type React from "react"
import { DynamicProviders } from "./components/DynamicProviders"
import "@/styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DynamicProviders>
          <main className="flex flex-col items-center justify-center min-h-screen p-4">{children}</main>
        </DynamicProviders>
      </body>
    </html>
  )
}

