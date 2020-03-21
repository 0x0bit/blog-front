import {asyncComponent} from '../../common/utils'
import './home.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./home')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

