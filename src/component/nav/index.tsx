import {asyncComponent} from '../../common/utils'
import './nav.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./nav')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

