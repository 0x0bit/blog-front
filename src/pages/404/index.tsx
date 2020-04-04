import {asyncComponent} from '../../common/utils'
import './404.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./404')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

