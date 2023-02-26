import { createContext, ReactNode, useState } from 'react'
import { GitHubProfile } from '../interface/GitHubProfile'
export const GitHubUserContext = createContext({})
interface Props {
  children: ReactNode
}
export const GitHubUserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<GitHubProfile>()
  return (
    <GitHubUserContext.Provider value={{ user, setUser }}>
      {children}
    </GitHubUserContext.Provider>
  )
}
