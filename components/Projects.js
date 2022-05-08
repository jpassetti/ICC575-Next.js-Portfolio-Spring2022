import styles from './projects.module.scss'

import Image from 'next/image'

export default function Projects({ items }) {
	return <ul className={styles.projects}>
		{items.map((item, index) => {
			return <li key={index}>
				<Image 
					src={`/images/${item.image}`}
					alt={item.title}
					width={1500}
					height={1000}
				/>
				<h3>{item.title}</h3>
				<h4>{item.genre}</h4>
			</li>
		})}
	</ul>
}
