import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import '../styles/layout.css'

export default function AdminLayout({ auth, setAuth }) {
  if (!auth) {
    return <Navigate to="/login" />
  }

  return (
    <div className="admin-layout">
      <Sidebar auth={auth} />
      <Header auth={auth} setAuth={setAuth} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
