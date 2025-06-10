import type React from "react"
export default function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>
}
