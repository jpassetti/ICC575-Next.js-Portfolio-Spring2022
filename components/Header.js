import Container from './Container'

import styles from './header.module.scss'

export default function Header() {
	return <header className={styles.header}>
		<Container>
			Logo and nav
		</Container>
	</header>
}
