interface JupiterFormProps {
    initialInputMint?: string
    initialOutputMint?: string
    fixedOutputMint?: boolean
  }
  
  interface JupiterInitOptions {
    displayMode: "integrated" | "modal" | "widget"
    integratedTargetId?: string
    endpoint: string
    defaultExplorer?: string
    formProps?: JupiterFormProps
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
  
  