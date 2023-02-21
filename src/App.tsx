import { Container, Stack } from '@mui/material'
import { useContext, useEffect } from 'react'

import { getUserByName } from './client/GitHubApiClient'
import { Profile } from './components'
import { Search } from './components/Search'
import { GitHubUserContext } from './context/GitHubUserContext'
import { GithubContextInterface } from './interface/GitHubProfile'

function App() {
  const { setUser } = useContext(GitHubUserContext) as GithubContextInterface
  useEffect(() => {
    try {
      getUserByName('ernerdo').then((user) => {
        if (!user) {
          return
        }
        setUser(user)
      })
    } catch (error) {
      console.log(error, 'hello')
    }
  }, [])

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'lightblue',
          borderRadius: '10px',
          padding: '10px',
          alignItems: 'center',
        }}
      >
        <Stack direction={`column`} gap={`15px`}>
          <Search />
          <Profile />
        </Stack>
      </Container>
    </Stack>
  )
}

export default App
