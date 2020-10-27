import { App, createStore } from 'fresh-bus'
import theme from './theme'

const initialState = window.__INITIAL_STATE__
const appInstance = new App({
  components: {},
  store: createStore(
    initialState
  ),
  theme

  // Pages passed here will come before fresh-bus pages, therefore will be given first change to match routes
  // pages: require.context('./pages', true, /\.vue$/),
  // layouts: require.context('./layouts', false, /\.vue$/)
})

// We may consider only exposing the app when a certain key is set (true EXPOSE_APP=true)
window.__APP__ = appInstance

export default appInstance
