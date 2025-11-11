export type TenantConfig = {
  id: string
  name: string
  primaryColor?: string
  apiEndpoint?: string
}

export const TENANTS: Record<string, TenantConfig> = {
  'tenant-a': { id: 'tenant-a', name: 'AGS Fitness - Alpha', primaryColor: '#0066cc', apiEndpoint: 'https://api.tenant-a.example' },
  'tenant-b': { id: 'tenant-b', name: 'AGS Fitness - Beta', primaryColor: '#cc6600', apiEndpoint: 'https://api.tenant-b.example' }
}
