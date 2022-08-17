import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const response  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            ninjas: data
        }
    }
}

const Ninjas = ({ ninjas }) => {
    return ( 
        <div>
            <Head>
                <title>Bent-tech | Ninjas</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='bent-tech' content='home' />
            </Head>
            <h1>All Ninjas</h1>
            {
                ninjas.map((ninja) => {
                    return (
                        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                            <a>
                                <h3>{ninja.name}</h3>
                            </a>
                        </Link> 
                    )
                })
            }
        </div>
     );
}
 
export default Ninjas;