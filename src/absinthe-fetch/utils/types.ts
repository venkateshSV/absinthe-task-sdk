export type CreateProjectData = {
  id?: string
  project_id?: string
  created_at?: string
}
export type CreateProjectResponse = {
  success: string
  data?: CreateProjectData
  error?: string
}

export type FetchProjectsResponse = {
  success: string
  data?: string[] | undefined
  error?: string
}
export type PointsData = {
  id?: string
  project_id?: string
  event_name?: string
  wallet_address?: string
  points?: string
  created_at?: string
}
export type FetchActivityResponse = {
  success: string
  data?: PointsData[]
  error?: string
  totalPoints?: number
}
