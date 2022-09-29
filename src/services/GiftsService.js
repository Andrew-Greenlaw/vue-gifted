import { AppState } from '../AppState.js'
import { Gift } from '../models/Gift.js'
import { logger } from '../utils/Logger.js'
import { giftsApi } from './AxiosService.js'

class GiftsService {
  async getGifts() {
    const res = await giftsApi.get()
    logger.log(res.data)
    AppState.gifts = AppState.gifts.map(g => new Gift(g))
  }
}
export const giftsService = new GiftsService()
