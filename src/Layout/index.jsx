import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefalutLayout () {
  return (
    <LayoutContainer>
        <Outlet/>
    </LayoutContainer>
  )
}