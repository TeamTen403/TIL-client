import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from './RouteProvider'

export function Providers() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter />
    </QueryClientProvider>
  )
}
