import { PropsWithChildren } from "react"

const Layout = ({children}: { children: PropsWithChildren<React.ReactNode> }) => {
  return <div>
    {children}
  </div>
}

export default Layout