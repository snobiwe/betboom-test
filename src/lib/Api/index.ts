import axios, { AxiosRequestConfig } from 'axios'

import { config } from '../../Globals'

export default class ApiService {
  /* =================================== Basic methods =================================== */
  public static setApi({ url, method, params, data, headers = {} }: AxiosRequestConfig) {
    console.log('url', url)
    return axios({
      url,
      method,
      data,
      params,
      baseURL: config.BASE_URL,
      headers: { 'Content-Type': 'application/json', ...headers },
    })
  }

  async getOverview(): Promise<{ data: [{}] }> {
    return ApiService.setApi({
      url: `chart/`,
      method: 'get',
      baseURL: config.BASE_URL,
    })
  }
}
