import {asyncComponent} from '../../common/utils'
import './foot.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./foot')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

