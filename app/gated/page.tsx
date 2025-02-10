"use client"

import { type FC, useEffect, useState } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { getTokenBalance } from "../utils/tokenBalance"
import { Login } from "../components/Login"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"
const REQUIRED_BALANCE = 1000000 // Minimum number of tokens required for access

const GatedPage: FC = () => {
  const { publicKey } = useWallet()
  const [hasAccess, setHasAccess] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAccess = async () => {
      if (publicKey) {
        const balance = await getTokenBalance(publicKey.toBase58(), KANYE_TOKEN_MINT)
        setHasAccess(balance >= REQUIRED_BALANCE)
      }
      setLoading(false)
    }

    checkAccess()
  }, [publicKey])

  if (!publicKey) {
    return <Login />
  }

  if (loading) {
    return <div>Checking access...</div>
  }

  if (!hasAccess) {
    return <div>You do not have enough $KANYE tokens to access this page.</div>
  }

  return (
    <div>
      <h1>Welcome to the Gated Page!</h1>
      <p>You have access because you hold enough $KANYE tokens.</p>
    </div>
  )
}

export default GatedPage

