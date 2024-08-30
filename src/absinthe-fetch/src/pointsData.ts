import axios, { Axios } from 'axios'
import { baseUrl } from '../utils/helper'
import { FetchActivityResponse } from '../utils/types'

export class PointsData {
  private apiKey = ''
  private projectId = ''

  constructor(apiKey: string, projectId: string) {
    this.apiKey = apiKey
    this.projectId = projectId
  }

  // @Desc Get all Project Activity using given API Key and ProjectId

  fetchActivity = async (): Promise<FetchActivityResponse> => {
    try {
      const result = await axios.get(
        baseUrl +
          `/points/get-points-data/` +
          this.apiKey +
          `/` +
          this.projectId
      )
      let resultData: FetchActivityResponse = {
        success: result.data.success,
      }
      if (resultData.success) {
        resultData.data = result.data.data
      }
      return resultData
    } catch (error: any) {
      let resultData: FetchActivityResponse = {
        success: error?.response?.data?.success,
        error: error?.response?.data?.error,
      }
      return resultData
    }
  }

  // @Desc Get all Projects's Wallet Activity and Points for given wallet address

  fetchWalletActivityAndPoints = async (
    address: string
  ): Promise<FetchActivityResponse> => {
    try {
      const result = await axios.get(
        baseUrl +
          `/points/get-points-data/` +
          this.apiKey +
          `/` +
          this.projectId +
          `/` +
          address
      )
      let resultData: FetchActivityResponse = {
        success: result.data.success,
      }
      if (resultData.success) {
        resultData.data = result.data.data
        resultData.totalPoints = result.data.totalPoints
      }
      return resultData
    } catch (error: any) {
      let resultData: FetchActivityResponse = {
        success: error?.response?.data?.success,
        error: error?.response?.data?.error,
      }
      return resultData
    }
  }

  // @Desc Get all Projects's Wallet Activity and Points for given wallet address filtered by eventName

  fetchWalletActivityByEventAndPoints = async (
    eventName: string,
    address: string
  ): Promise<FetchActivityResponse> => {
    try {
      const result = await axios.get(
        baseUrl +
          `/points/get-points-data/` +
          this.apiKey +
          `/` +
          this.projectId +
          `/` +
          address +
          `/` +
          eventName
      )
      let resultData: FetchActivityResponse = {
        success: result.data.success,
      }
      if (resultData.success) {
        resultData.data = result.data.data
        resultData.totalPoints = result.data.totalPoints
      }
      return resultData
    } catch (error: any) {
      let resultData: FetchActivityResponse = {
        success: error?.response?.data?.success,
        error: error?.response?.data?.error,
      }
      return resultData
    }
  }
}
