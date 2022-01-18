import React, { ReactElement } from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer, cilContact } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
import { CNavLinkProps } from '@coreui/react/dist/components/nav/CNavLink'

interface NavegationType {
  component: React.ForwardRefExoticComponent<CNavLinkProps>
  name: string
  to?: string
  icon?: ReactElement
  badge?: {
    color: string
    text: string
  }
  items?: NavegationType[]
}

const _nav: NavegationType[] = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Clientes',
    to: '/clientes',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
    ],
  },
]

export default _nav
