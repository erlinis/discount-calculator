import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export function RootLayout() {
  return (
    <div className="root">
      <Outlet />
      <Toaster richColors />
    </div>
  )
}
