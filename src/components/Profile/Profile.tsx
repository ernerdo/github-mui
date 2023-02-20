import { Grid } from '@mui/material'
import { useContext } from 'react'
import { GitHubUserContext } from '../../context/GitHubUserContext'
import { GithubContextInterface } from '../../interface/GitHubProfile'
import { UserImage } from '../UserImage'

import { UserInformation } from '../UserInformation'

export const Profile = () => {
  const { user } = useContext(GitHubUserContext) as GithubContextInterface

  return (
    <Grid container spacing={2} sx={{ marginTop: '15px' }}>
      <UserImage user={user} />
      <UserInformation user={user} />
    </Grid>
  )
}
