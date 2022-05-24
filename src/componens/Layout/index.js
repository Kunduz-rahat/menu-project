import React from 'react'
import Header from '../../views/Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
	return (
		<div >
			<Header />
			<main>
				{children}
			</main>
			<Footer/>
		</div>
	)
}

export default Layout