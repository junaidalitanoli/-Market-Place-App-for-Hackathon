import { sanityClient } from '../client';

export async function getServerSideProps() {
  const query = '*[_type == "post"]';
  const posts = await sanityClient.fetch(query);

  return {
    props: { posts },
  };
}

const PostsPage = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <div key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export default PostsPage;
