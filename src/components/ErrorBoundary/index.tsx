import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode // ou ReactNode se não for função
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfor: React.ErrorInfo | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfor: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfor: null,
    }
  }

  componentDidCatch(error: Error, errorInfor: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log('Erro capturado => \n', error, errorInfor)

    this.setState({
      error: error,
      errorInfor: errorInfor,
    })
  }

  private templateErrorDefault(): ReactNode {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Ops! Algo de errado.</h2>
        <p>Estamos trabalhando para resolver o problema.</p>

        <button onClick={() => window.location.reload()}>
          Recarregar página
        </button>
      </div>
    )
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? this.templateErrorDefault()
    }

    return this.props.children
  }
}

export default ErrorBoundary
