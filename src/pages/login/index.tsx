import {asyncComponent} from '../../common/utils'
import './login.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./login')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

