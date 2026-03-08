'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:8080/health')
      .then((res) => res.text())
      .then(console.log)
  }, [])

  return <div>Geo Matching System</div>
}
