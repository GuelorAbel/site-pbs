import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`${className} container mx-auto px-4 lg:px-0`}>{children}</div>
  )
}
