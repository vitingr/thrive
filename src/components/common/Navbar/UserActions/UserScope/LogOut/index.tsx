'use client'

import { signOut } from 'next-auth/react'

export const LogOut: React.FC = () => {
  return <button onClick={() => signOut()}>Sair</button>
}
