import './NavBar.css'
import React from 'react'
import LightModeButton from './LightModeButton'

const NavBar = () => {
	return (
		<div className='top-bar-container'>
			<header>
				<a
					className='logo'
					href='/index.html'
				>
					<img
						src='./src/Assets/Images/SK.png'
						alt='Sean Kelley'
						width='75'
						height='75'
					/>
				</a>
				<nav>
					<ul className='nav__links'>
						<li>
							<a href='https://github.com/seannkelleyy'>
								<img
									alt='Github'
									src='./src/Assets/Images/github.jpg'
									width='50'
									height='50'
								/>
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/seankelley15/'>
								<img
									alt='Linkedin'
									src='./src/Assets/Images/linkedin.jpg'
									width='50'
									height='50'
								/>
							</a>
						</li>
						<li>
							<a href='mailto:seannkelleyy1@gmail.com'>
								<img
									alt='Email'
									src='./src/Assets/Images/email.png'
									width='50'
									height='50'
								/>
							</a>
						</li>
					</ul>
				</nav>
				<LightModeButton />
			</header>
		</div>
	)
}

export default NavBar
