import axios from 'axios'
import { DistributePointsResponse } from '../utlis/types'
import { baseUrl } from '../utlis/helper'

export class Points {
  private apiKey = ''
  private projectId = ''

  constructor(apiKey: string, projectId: string) {
    this.apiKey = apiKey
    this.projectId = projectId
  }

  // @Desc Distribute points for a given wallet address for an event

  distribute = async (
    eventName: string,
    pointsData: { points: number; address: string }
  ): Promise<DistributePointsResponse> => {
    try {
      let data = {
        apiKey: this.apiKey,
        projectId: this.projectId,
        walletAddress: pointsData.address,
        eventName: eventName,
        points: pointsData.points,
      }
      const result = await axios.post(baseUrl + '/points/distribute', data)
      let resultData: DistributePointsResponse = {
        success: result.data.success,
      }
      if (resultData.success) {
        resultData.data = {
          id: result.data.data.id,
          project_id: result.data.data.project_id,
          event_name: result.data.data.event_name,
          wallet_address: result.data.data.wallet_address,
          points: result.data.data.points,
          created_at: result.data.data.created_at,
        }
      }
      return resultData
    } catch (error: any) {
      let resultData: DistributePointsResponse = {
        success: error?.response?.data?.success,
        error: error?.response?.data?.error,
      }
      return resultData
    }
  }
}
