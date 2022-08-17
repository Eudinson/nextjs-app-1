import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bent-tech | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='bent-tech' content='home'/>
      </Head>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et commodi dolor nihil voluptas. Impedit sint ipsa quisquam magnam harum modi nobis eaque magni deserunt hic, dolore nihil voluptas aspernatur provident? Aliquid rerum aliquam quis ab. Inventore laboriosam eum, autem totam dolore quibusdam et praesentium quae eligendi tenetur quisquam blanditiis.</p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
