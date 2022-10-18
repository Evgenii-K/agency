import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ResponseType } from 'components/models'

export default class PostService {
  public static async apiRequest (url: string, data: {[k: string]: any}): Promise<ResponseType> { //eslint-disable-line
    const formData = new FormData()
    Object.keys(data).forEach(element => {
      formData.append(element, String(data[element]))
    })
    const result: ResponseType = await (await ApiService.ApiClient().post(`${url}`, formData).catch(
      err => { //eslint-disable-line
        throw new HttpError('Ошибка при загрузке', err.response) //eslint-disable-line
      }))?.data as ResponseType //eslint-disable-line
    return result //eslint-disable-line
  }
}
