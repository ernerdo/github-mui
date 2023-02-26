export interface GitHubProfile {
  name: string
  created_at: string
  login: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location: string
  twitter_username: string
  blog: string
  company: string
}
export interface GithubContextInterface {
  user: GitHubProfile
  setUser: (value: GitHubProfile) => void
}
