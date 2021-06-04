import {useEffect, useState} from 'react'

export const useToggle = ({initialOn = false}) => {
  const defaultOn = localStorage.getItem('rcl_switch') === 'true' || initialOn
  const [on, setOn] = useState(defaultOn)
  const toggle = () => {
    const newValue = !on
    setOn(newValue)
    localStorage.setItem('rcl_switch', newValue.toString())
  }

  useEffect(() => {
    if (on) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [on])

  return {
    on,
    togglerProps: {
      onClick: toggle,
    },
  }
}
