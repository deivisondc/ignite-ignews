import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>teste</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor quis nam vitae iure illo deleniti eaque facilis culpa mollitia deserunt voluptatem, debitis, minus nostrum reiciendis cumque odio temporibus voluptas.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>teste</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor quis nam vitae iure illo deleniti eaque facilis culpa mollitia deserunt voluptatem, debitis, minus nostrum reiciendis cumque odio temporibus voluptas.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>teste</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor quis nam vitae iure illo deleniti eaque facilis culpa mollitia deserunt voluptatem, debitis, minus nostrum reiciendis cumque odio temporibus voluptas.</p>
          </a>
        </div>
      </main>
    </>
  )
}