import React from 'react'
import Header from '../../views/Header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
		</>
	)
}

export default Layout