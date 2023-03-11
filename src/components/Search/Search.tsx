import SearchIcon from '@mui/icons-material/Search'
import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  AlertTitle,
} from '@mui/material'
import { useContext, useState } from 'react'
import { getUserByName } from '../../client/GitHubApiClient'
import { GitHubUserContext } from '../../context/GitHubUserContext'
import { GithubContextInterface } from '../../interface/GitHubProfile'

export const Search = () => {
  const [valueSearchInput, setValueSearchInput] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const { setUser } = useContext(GitHubUserContext) as GithubContextInterface
  const [message, setMessage] = useState<string>('')
  const handleInputSearch = (value: string) => {
    setValueSearchInput(value)
  }
  const handleSearch = () => {
    if (valueSearchInput === '') return
    try {
      getUserByName(valueSearchInput).then((user) => {
        if (!user) {
          setMessage(`User name ${valueSearchInput} not found`)
          setOpen(true)
          return
        }
        setOpen(false)
        setUser(user)
      })
    } catch (error) {
      console.log(error)
    }
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Stack direction="row" justifyContent="center" flexWrap={`wrap`}>
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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
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
      {open && (
        <Alert
          severity="warning"
          sx={{ width: '50%', marginTop: '10px' }}
          onClose={handleClose}
        >
          <AlertTitle>Warning</AlertTitle>
          {message}
        </Alert>
      )}
    </Stack>
  )
}
