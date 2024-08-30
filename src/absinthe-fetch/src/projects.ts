import axios from 'axios'
import { baseUrl } from '../utils/helper'
import { CreateProjectResponse, FetchProjectsResponse } from '../utils/types'

export class Projects {
  private apiKey = ''

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  // @Desc Create a new project for the given API key

  create = async (): Promise<CreateProjectResponse> => {
    try {
      let data = {
        apiKey: this.apiKey,
      }
      const result = await axios.post(baseUrl + '/api-key/project/create', data)
      let resultData: CreateProjectResponse = {
        success: result.data.success,
      }
      if (resultData.success) {
        resultData.data = {
          id: result.data.data.id,
          project_id: result.data.data.project_id,
          created_at: result.data.data.created_at,
        }
      }
      return resultData
    } catch (error: any) {
      let resultData: CreateProjectResponse = {
        success: error?.response?.data?.success,
        error: error?.response?.data?.error,
      }
      return resultData
    }
  }

  // @Desc Get all Projects for a given API key

  fetchAll = async (): Promise<FetchProjectsResponse> => {
    try {
      const result = await axios.get(
        baseUrl + `/api-key/get-all-projects/` + this.apiKey
      )
      let resultData: FetchProjectsResponse = {
        success: result.data.success,
      }
      if (resultData.success) {
        resultData.data = result.data.data
      }
      return resultData
    } catch (error: any) {
      let resultData: FetchProjectsResponse = {
        success: error?.response?.data?.success,
        error: error?.response?.data?.error,
      }
      return resultData
    }
  }
}
