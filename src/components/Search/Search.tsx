import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Stack, TextField } from '@mui/material'
import { useState } from 'react'

export const Search = () => {
  const [valueSearchInput, setValueSearchInput] = useState<string>('')
  const handleInputSearch = (value: string) => {
    if (value.length === 0) return
    setValueSearchInput(value)
    console.log(valueSearchInput)
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
      />

      <IconButton
        size="small"
        sx={{
          left: '-45px',
        }}
        onClick={() => console.log('Search icon')}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}
