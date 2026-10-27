import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../ui/Button';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in UI component:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface-canvas text-surface-text p-6">
          <div className="max-w-md w-full bg-surface-card border border-surface-border rounded-2xl p-8 text-center shadow-card-hover">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 mx-auto flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
            <p className="text-sm text-surface-muted mb-6">
              An unexpected error occurred while rendering this view. You can return to the homepage or reload the view.
            </p>
            <Button
              onClick={this.handleReset}
              variant="primary"
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
