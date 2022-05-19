
import React from 'react'
import Header from '../../views/Header'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout