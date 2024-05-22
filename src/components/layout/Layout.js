import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
    const style = { minHeight: "700px" };
  return (
<>
<Header/>
<div style={style}>{children}</div>
<Footer/>
</>
  )
}

export default Layout