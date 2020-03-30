import {asyncComponent} from '../../common/utils'
import './msg.less'

export default asyncComponent(async () => {
  try {
    const module = await import('./msg')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})

