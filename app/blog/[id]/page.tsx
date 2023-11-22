import { Metadata } from 'next'

type PostId = {
    params: {
        id: string
    }
}

async function getData(id: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return res.json();
}

export async function generateMetadata ({params: {id}} : PostId) : Promise<Metadata> {
    const post = await getData(id);

    return {
        title: post.title
    }
}



export default async function Post ({params: {id}} : PostId) {
    const post = await getData(id);
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    );
}