import React, { ReactElement } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CBadge } from '@coreui/react'

interface BadgeType {
  color: string
  text: string
}

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()
  const navLink = (name: string, icon: ReactElement, badge?: BadgeType) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index: number) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component

    const hasRote = rest.to && !rest.items

    return (
      <Component
        {...(hasRote && {
          component: NavLink,
          className: 'active',
        })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item, index: number) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((_item, _index: number) =>
          _item.items ? navGroup(_item, _index) : navItem(_item, _index)
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
