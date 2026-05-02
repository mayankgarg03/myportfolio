import { Navigate } from 'react-router-dom'

/** Single-page portfolio — about lives on the home section. */
export function About() {
  return <Navigate to={{ pathname: '/', hash: 'about' }} replace />
}
