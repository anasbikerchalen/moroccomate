import React, { Component, ReactNode } from 'react';
import { RotateCcw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackName?: string;
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

export class HubErrorBoundary extends Component<Props, State> {
  public state: State = { error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public render() {
    if (this.state.error) {
      const isDev = import.meta.env.DEV;
      return (
        <div className="p-6 md:p-12 max-w-2xl mx-auto my-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {this.props.fallbackName ? `${this.props.fallbackName} Unavailable` : 'Something went wrong'}
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto text-sm md:text-base">
              An unexpected error occurred while rendering this section. You can try refreshing or returning to the main dashboard.
            </p>
          </div>

          {isDev && this.state.error && (
            <div className="text-left bg-stone-950 text-amber-400 p-4 rounded-xl text-xs overflow-x-auto max-h-48 border border-stone-800 font-mono">
              <p className="font-bold mb-1 text-red-400">{this.state.error.name}: {this.state.error.message}</p>
              <pre className="text-stone-400 whitespace-pre-wrap">{this.state.error.stack}</pre>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C9A84C] hover:bg-[#b5953f] text-white font-medium shadow-md transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-medium transition-colors"
            >
              <Home className="w-4 h-4" />
              Return Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default HubErrorBoundary;
