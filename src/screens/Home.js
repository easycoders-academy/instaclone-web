import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { LogoutUser } from "../apollo";
import { BoldText } from "../components/shared";

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
    }
  }
`;

const PostContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

const Username = styled(BoldText)`
  margin-left: 10px;
`;

function Home() {
  const { data } = useQuery(SEE_FEED_QUERY);
  return (
    <div>
      {data?.seeFeed?.map((post) => (
        <PostContainer key={post.id}>
          <PostHeader>
            <Avatar url={post?.user?.avatar} />
            <Username>{post?.user?.username}</Username>
          </PostHeader>
        </PostContainer>
      ))}
    </div>
  );
}
export default Home;
