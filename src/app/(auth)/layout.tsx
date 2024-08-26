import { ReactNode } from 'react'

export default function AuthLyout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Header</h2>
      <div>{children}</div>
    </div>
  )
}
