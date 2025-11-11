import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TENANTS, TenantConfig } from '../tenants'

type TenantContextValue = {
  tenant?: TenantConfig
  tenantId?: string
  setTenantById: (id?: string) => void
  tenants: Record<string, TenantConfig>
}

const TenantContext = createContext<TenantContextValue | undefined>(undefined)

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [tenantId, setTenantId] = useState<string | undefined>(() => {
    // Try to infer tenant from pathname: /tenant-id or from query ?tenant=tenant-id
    try {
      const pathParts = window.location.pathname.split('/').filter(Boolean)
      if (pathParts.length > 0) return pathParts[0]
      const url = new URL(window.location.href)
      return url.searchParams.get('tenant') ?? undefined
    } catch {
      return undefined
    }
  })

  useEffect(() => {
    // If location changes, keep tenantId in sync with path
    const pathParts = location.pathname.split('/').filter(Boolean)
    if (pathParts.length > 0 && pathParts[0] !== tenantId) {
      setTenantId(pathParts[0])
    }
  }, [location.pathname])

  const setTenantById = (id?: string) => {
    setTenantId(id)
    // Navigate to tenant path when selected
    if (id) navigate(`/${id}`)
    else navigate(`/`)
  }

  const tenant = useMemo(() => (tenantId ? TENANTS[tenantId] : undefined), [tenantId])

  return (
    <TenantContext.Provider value={{ tenant, tenantId, setTenantById, tenants: TENANTS }}>
      {children}
    </TenantContext.Provider>
  )
}

export function useTenant() {
  const ctx = useContext(TenantContext)
  if (!ctx) throw new Error('useTenant must be used within TenantProvider')
  return ctx
}
