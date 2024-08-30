export type DistributePointsData = {
  id?: string
  project_id?: string
  event_name?: string
  wallet_address?: string
  points?: string
  created_at?: string
}
export type DistributePointsResponse = {
  success: string
  data?: DistributePointsData
  error?: string
}
