import React from 'react'
import {Switch} from '@navdeepsingh/bit-components.switch'
import {useToggle} from '../hooks/use-toggle-switch'

function Switcher() {
  const {on, togglerProps} = useToggle({initialOn: false})
  return (
    <div>
      <Switch isSwitchedOn={on} {...togglerProps} />
    </div>
  )
}

export default Switcher
