import React from 'react'
import PropTypes from 'prop-types'
import nano from 'nano-style'
import {
  CHANNEL,
  contextTypes
} from './constants'
import { Flex } from './ui'

import { withDebug } from './Debug'

const Root = nano('a')({
  display: 'flex',
  flexDirection: 'column',
  color: 'inherit',
  textDecoration: 'none',
  overflow: 'hidden',
  padding: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#f6f6f6',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  '&:hover': {
    borderColor: '#ddd'
  }
})

const Label = nano('div')({
  fontSize: '10px',
  paddingTop: '4px',
})

class Example extends React.Component {
  static contextTypes = contextTypes

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    const { update } = this.context[CHANNEL]
    const { name, children } = this.props

    return (
      <Root
        id={name}
        href={'#' + name}
        onClick={e => update({ component: name })}>
        <Flex
          flex='1 1 auto'
          alignItems='center'
          justifyContent='center'
          style={{ overflow: 'hidden' }}>
          {children}
        </Flex>
        <Label>
          {name}
        </Label>
      </Root>
    )
  }
}

export default withDebug(Example)