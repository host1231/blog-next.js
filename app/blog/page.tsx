import Link from 'next/link';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });
    return res.json();
}

export default async function Blog () {
    const posts = await getData();

    return (
        <>
            <h1 className='title'>Post</h1>
            <ul className='posts'>
                {
                    posts.map((el : any) => 
                        <li key={el.id}>
                            <Link href={`/blog/${el.id}`}>{el.title}</Link>
                        </li>
                    ) 
                }
            </ul>
        </>
    )
}