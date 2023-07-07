// ** Router Imports
import { Navigate, Outlet } from 'react-router-dom'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { getLogined } from '../../store/app/auth'

export function ProtectRoute() {
  const logined = useSelector(getLogined)

  return logined ? <Outlet /> : <Navigate to="/" />
}

export function PublicRoute() {
  const logined = useSelector(getLogined)

  return logined ? <Navigate to="/company/user" /> : <Outlet />
}
