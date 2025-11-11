import React from 'react'
import { useTenant } from '../context/TenantContext'

export default function TenantDashboard() {
  const { tenant, tenantId, setTenantById } = useTenant()

  if (!tenant) {
    return (
      <div>
        <h2>Tenant not found</h2>
        <p>No tenant with id <strong>{tenantId}</strong> exists. Go back to the <a href="/">home</a> to select one.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{ color: tenant.primaryColor }}>{tenant.name}</h1>
      <p><strong>Tenant ID:</strong> {tenant.id}</p>
      <p><strong>API Endpoint:</strong> {tenant.apiEndpoint}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setTenantById(undefined)}>Return to Home</button>
      </div>
    </div>
  )
}
