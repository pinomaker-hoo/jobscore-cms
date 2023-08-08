// ** Router Imports
import { Route, Routes } from 'react-router-dom'

// ** Component Imports
import LoginPage from './pages/login-page'
import { ProtectRoute, PublicRoute } from 'utils/protect-route'
import WantCompanyPageView from './pages/want-company-page'
import MyCompanyPage from './pages/my-company-page'
import CompanyPage from './pages/company-page'
import UserPage from './pages/user-page'
import UserChartPage from './pages/user-chart-page'

const App = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<ProtectRoute />}>
        <Route path="/dashboard" element={<UserChartPage />} />
        <Route path="/company/user" element={<UserPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/my" element={<MyCompanyPage />} />
        <Route path="/company/want" element={<WantCompanyPageView />} />
      </Route>
    </Routes>
  )
}

export default App
