import { ROOT_LEVEL_FILE } from './constants'

const log = msg => process.env.VERBOSE && console.log(msg)
const toSrcPath = (docsDir, path) =>
  path
    .replace(/\md$/, 'js')
    .replace(docsDir, 'src')
    .replace('components/', '')

const displayObj = obj =>
  Object.keys(obj)
    .map(k => `${k}=${obj[k]}`)
    .join(',')

// Adapted from: https://github.com/sindresorhus/titleize/blob/master/index.js
const titleize = str =>
  str.replace(/(?:^|\s|-)\S/g, m => m.toUpperCase()).replace(/(-|_)/g, ' ')

const isIndex = path => /index\.md/.test(path)
const introPage = nav =>
  nav[ROOT_LEVEL_FILE] &&
  nav[ROOT_LEVEL_FILE].find(n => n.name === 'introduction')

const extendDefaultProps = (Component, props) => {
  Component.defaultProps = Object.assign(
    {},
    Component.defaultProps || {},
    props
  )
}

export {
  log,
  introPage,
  isIndex,
  titleize,
  toSrcPath,
  displayObj,
  extendDefaultProps
}