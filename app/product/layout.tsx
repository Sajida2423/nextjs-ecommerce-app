import React from 'react'
// import { AuthProvider } from '../context/AuthContext';
export default function layout( {
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        {children}
  
    </div>
  )
}




