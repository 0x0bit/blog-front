import {asyncComponent} from '../../common/utils'
import './language.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./language')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})
