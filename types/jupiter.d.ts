interface JupiterInitOptions {
  displayMode: "integrated" | "modal" | "widget"
  integratedTargetId?: string
  endpoint: string
  defaultExplorer?: string
  formProps: {
    fixedOutputMint?: boolean
    initialOutputMint: string
    initialSlippageBps?: number
  }
}

interface Jupiter {
  init: (options: JupiterInitOptions) => void
}

declare global {
  interface Window {
    Jupiter?: Jupiter
  }
}

export {}

