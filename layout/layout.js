import React from 'react'
import NavigationSideBar from './navigation-side-bar'

function Layout(props) {
  return (
    <>
        <NavigationSideBar />
        <main>{props.children}</main>
    </>
  )
}

export default Layout