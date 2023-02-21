import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { getUserByName } from '../../client/GitHubApiClient'
import { GitHubUserContext } from '../../context/GitHubUserContext'
import { GithubContextInterface } from '../../interface/GitHubProfile'

export const Search = () => {
  const [valueSearchInput, setValueSearchInput] = useState<string>('')
  const { setUser } = useContext(GitHubUserContext) as GithubContextInterface
  const handleInputSearch = (value: string) => {
    setValueSearchInput(value)
  }
  const handleSearch = () => {
    if (valueSearchInput === '') return
    try {
      getUserByName(valueSearchInput).then((user) => {
        if (!user) return
        setUser(user)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Stack direction="row" justifyContent="center">
      <TextField
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        size="small"
        sx={{
          width: '50%',
        }}
        required
        onChange={(e) => handleInputSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => handleSearch()}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  )
}
