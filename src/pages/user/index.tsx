import {asyncComponent} from '../../common/utils'
import './user.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./user')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

