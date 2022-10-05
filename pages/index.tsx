import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { uuid } from 'uuidv4'; 

function Home({ content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {content}
        </h1>
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const result = await fetch(`https://famous-crews-smash-186-225-235-47.loca.lt/default/${uuid()}`).then(res => res.json());

  return { content: result.message };
}

export default Home;