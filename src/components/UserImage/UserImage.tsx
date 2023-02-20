import { Grid, CardMedia } from '@mui/material'
import { FC } from 'react'
import { GitHubProfile } from '../../interface/GitHubProfile'

interface UserImageProps {
  user: GitHubProfile
}
export const UserImage: FC<UserImageProps> = ({ user }) => {
  return (
    <Grid item xs={3}>
      {user && (
        <CardMedia
          component={'img'}
          src={user.avatar_url}
          alt={user.name}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px',
          }}
        />
      )}
    </Grid>
  )
}
