import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

// custom components
import Button from '../components/Button'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import ProjectsByGenre from '../components/ProjectsByGenre'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jeff Passetti Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
		<Image
			src="/images/profile.jpg" // Route of the image file
			height={144} // Desired size with correct aspect ratio
			width={144} // Desired size with correct aspect ratio
			alt="Jeff Passetti"
		/>

        <h1 className="title">
          Visit <Link href="/posts/first-post">
		  		<a>first post</a>
		  </Link>
        </h1>

		<Heading level="1">
			This is my page title
		</Heading>
		<Heading level="2">
			This is my section title
		</Heading>
		<Heading level="3">
			This is my item title
		</Heading>
		
		<Paragraph intro>
			This is my intro paragraph.
		</Paragraph>
		<Paragraph>
			Here is my basic paragrrrrrrrrrraph.
		</Paragraph>

		<Button 
			label="Register now"
			path="/register"
			variant="primary"
		/>
		<Button
			label="Register now"
			path="/register"
			variant="secondary"
		/>
		<Button
			label="Register now"
			path="/register"
		/>

		<ProjectsByGenre />
	
      </main>

      <footer>
       Copyright Jeff Passetti 2022
      </footer>
	</Layout>
	)
}
