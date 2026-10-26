
export async function getServerSideProps(context) {
    const { id } = context.params;
  
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  
    const post = await res.json();
  
    return {
      props: { post },
    };
  }
  
  export default function DynamicSSRPage({ post }) {
    return (
      <div>
        <h1>Dynamic Server-Side Rendering</h1>
        <h2>Post ID: {post.id}</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }
  