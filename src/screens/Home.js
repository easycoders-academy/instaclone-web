import { gql, useQuery } from "@apollo/client";
import Post from "../components/feed/Post";
import PageTitle from "../components/PageTitle";

const SEE_FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      file
      caption
      likes
      comments
      user {
        username
        avatar
      }
      createdAt
      isMine
      isLiked
    }
  }
`;

function Home() {
  const { data } = useQuery(SEE_FEED_QUERY);
  return (
    <>
      <PageTitle title="Лента" />
      <div>
        {data?.seeFeed?.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}
export default Home;
