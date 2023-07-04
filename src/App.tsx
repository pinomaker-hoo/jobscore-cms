// ** Router Imports
import { Route, Routes } from 'react-router-dom'

// ** Component Imports
import LoginPage from './pages/login-page'
import { ProtectRoute, PublicRoute } from 'utils/protect-route'

const App = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<ProtectRoute />}>
        <Route path="/test" element={<h1>Hello world</h1>} />
      </Route>
    </Routes>
  )
}

export default App
