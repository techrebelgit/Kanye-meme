"use client"

import { TokenGate } from "../components/TokenGate"

export default function AlbumsPage() {
  return (
    <TokenGate >
      <h1>Exclusive Albums</h1>
      {/* Your album content here */}
    </TokenGate>
  )
}

