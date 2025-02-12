"use client"

import { TokenGate } from "../components/TokenGate"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"

export default function AlbumsPage() {
  return (
    <TokenGate >
      <h1>Exclusive Albums</h1>
      {/* Your album content here */}
    </TokenGate>
  )
}

