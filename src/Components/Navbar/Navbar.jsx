import React, { useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const circle = {
	background: 'linear-gradient(40deg, #8983F7, #1c2931 70%)',
};
const cresent = {
	transform: 'scale(1)',
};
const Navbar = () => {
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		>
			<div className={styles.navbar}>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a  href='#home'>Home</a>
					<a  href='#about'>About</a>
					<a href='#techStacks'>Skills</a>
					<a href='#projects'>Projects</a>
					<a href='#contact'>Contact</a>
					<a href='https://drive.google.com/file/d/10nmSo-DqHntp3-ZXxe_kDvEgMedQMDqE/view?usp=sharing'>Resume</a>
				</div>
				<button
					aria-label={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
					title={
						mode === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'
					}
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					<div
						className={styles.circle}
						style={mode === 'light' ? circle : {}}
					>
						<div
							style={mode === 'light' ? cresent : {}}
							className={styles.crescent}
						></div>
					</div>
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					/>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					/>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;