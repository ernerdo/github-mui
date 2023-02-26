import BusinessIcon from '@mui/icons-material/Business'
import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { GitHubProfile } from '../../interface/GitHubProfile'

interface UserImageProps {
  user: GitHubProfile
}

export const UserInformation: FC<UserImageProps> = ({ user }) => {
  const date = new Date(user?.created_at)
  if (!user) return <></>
  return (
    <Grid item xs={9}>
      <Stack direction={'column'}>
        <Stack justifyContent={`space-between`} direction={`row`}>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="subtitle2">
            {date.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
        </Stack>
        <Typography variant={`caption`}>{user.login}</Typography>
        <Typography variant={`body1`}>{user.bio}</Typography>
        <Paper elevation={3}>
          <Stack
            justifyContent={`space-evenly`}
            sx={{
              margin: '20px',
              flexDirection: { xs: `column`, sm: `row` },
            }}
          >
            <Box padding={`10px`}>
              <Typography
                variant={`h5`}
                fontSize={{ xs: `1.2rem`, sm: `1.5rem` }}
              >
                Repositories
              </Typography>
              <Typography
                variant={`h6`}
                fontSize={{ xs: `1.2rem`, sm: `1.5rem` }}
              >
                {user.public_repos}
              </Typography>
            </Box>
            <Box padding={`10px`}>
              <Typography
                variant={`h5`}
                fontSize={{ xs: `1.2rem`, sm: `1.5rem` }}
              >
                Follower
              </Typography>
              <Typography
                variant={`h6`}
                fontSize={{ xs: `1.2rem`, sm: `1.5rem` }}
              >
                {user.followers}
              </Typography>
            </Box>
            <Box padding={`10px`}>
              <Typography
                variant={`h5`}
                fontSize={{ xs: `1.2rem`, sm: `1.5rem` }}
              >
                Following
              </Typography>
              <Typography
                variant={`h6`}
                fontSize={{ xs: `1.2rem`, sm: `1.5rem` }}
              >
                {user.following}
              </Typography>
            </Box>
          </Stack>
        </Paper>
        <Grid container spacing={2} sx={{ marginTop: '15px' }}>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <LocationOnIcon sx={{ color: 'red' }} />
              <Typography>{user.location}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <TwitterIcon color="primary" />
              {user.twitter_username !== null ? (
                <Link
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                >
                  <Typography>{`@${user.twitter_username}`}</Typography>
                </Link>
              ) : (
                <Typography>Not Available</Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <LanguageIcon color="primary" />
              {user.blog !== null ? (
                <Link href={user.blog} target="_blank">
                  <Typography>{user.blog}</Typography>
                </Link>
              ) : (
                <Typography>Not Available</Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <BusinessIcon />
              {user.company !== null ? (
                <Typography>{user.company}</Typography>
              ) : (
                <Typography>Not Available</Typography>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  )
}
