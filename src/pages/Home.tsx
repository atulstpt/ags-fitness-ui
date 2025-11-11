import React from 'react'
import { Link } from 'react-router-dom'
import { TENANTS } from '../tenants'

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to AGS Fitness</h1>
      <p>Select a tenant to view its dashboard:</p>
      <ul>
        {Object.values(TENANTS).map(t => (
          <li key={t.id} style={{ marginBottom: 8 }}>
            <Link to={`/${t.id}`}>{t.name} ({t.id})</Link>
          </li>
        ))}
      </ul>

      <section style={{ marginTop: 24 }}>
        <h3>How multitenancy works</h3>
        <p>The app reads the tenant id from the first path segment (e.g. <code>/tenant-a</code>) or from <code>?tenant=tenant-a</code>. Settings for tenants are stored in <code>src/tenants.ts</code>.</p>
      </section>
    </div>
  )
}
