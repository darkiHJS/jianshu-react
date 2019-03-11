import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    /** immutabel对象的set方法会结合之前的对象值
     *  返回一个全新的immutable对象
     */
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}