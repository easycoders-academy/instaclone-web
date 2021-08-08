import { gql, useQuery } from "@apollo/client";
import Post from "../components/feed/Post";
import PageTitle from "../components/PageTitle";
import { COMMENTS_FRAGMENT, POST_FRAGMENT } from "../fragments";

const SEE_FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PostFragment
      caption
      comments {
        ...CommentFragment
      }
      user {
        username
        avatar
      }
      createdAt
      isMine
      isLiked
    }
  }
  ${POST_FRAGMENT}
  ${COMMENTS_FRAGMENT}
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
