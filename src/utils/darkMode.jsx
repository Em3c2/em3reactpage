const DarkMode = (dark) => {
			const root = document.documentElement.style;
			if (dark === 'darkOn') {
				root.setProperty('--app-bg', 'var(--dark)')
				root.setProperty('--stroke', 'var(--light)')
				root.setProperty('--attention', '#F39C12')
				root.setProperty('--print', 'invert(100%)')
			} else {
				root.setProperty('--app-bg', 'var(--light)')
				root.setProperty('--stroke', 'var(--darkStroke)')
				root.setProperty('--attention', 'tomato')
				root.setProperty('--print', 'invert(0%)')
			}	
}

export default DarkMode;