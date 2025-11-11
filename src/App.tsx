import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { TenantProvider } from './context/TenantContext'
import Home from './pages/Home'
import TenantDashboard from './pages/TenantDashboard'

export default function App() {
  return (
    <TenantProvider>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">AGS Fitness</Link>
      </header>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":tenantId/*" element={<TenantDashboard />} />
        </Routes>
      </main>
    </TenantProvider>
  )
}
