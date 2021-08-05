import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { LogoutUser } from "../apollo";
import { BoldText } from "../components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

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
  max-width: 620px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const Username = styled(BoldText)`
  margin-left: 15px;
`;

const PostContent = styled.img`
  max-width: 100%;
  min-width: 100%;
`;

const PostFooter = styled.div`
  padding: 15px;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`;

const PostAction = styled.div`
  margin-right: 15px;
`;

const Likes = styled(BoldText)`
  display: block;
  margin-top: 15px;
`;

function Home() {
  const { data } = useQuery(SEE_FEED_QUERY);
  return (
    <div>
      {data?.seeFeed?.map((post) => (
        <PostContainer key={post.id}>
          <PostHeader>
            <Avatar url={post?.user?.avatar} lg={true} />
            <Username>{post?.user?.username}</Username>
          </PostHeader>
          <PostContent src={post?.file} />
          <PostFooter>
            <PostActions>
              <div>
                <PostAction>
                  <FontAwesomeIcon size={"lg"} icon={faHeart} />
                </PostAction>
                <PostAction>
                  <FontAwesomeIcon size={"lg"} icon={faComment} />
                </PostAction>
                <PostAction>
                  <FontAwesomeIcon size={"lg"} icon={faTelegramPlane} />
                </PostAction>
              </div>
              <div>
                <FontAwesomeIcon size={"lg"} icon={faBookmark} />
              </div>
            </PostActions>
            <Likes>
              {post?.likes === 1
                ? '1 отметка "Нравится"'
                : `${post?.likes} отметок "Нравится"`}
            </Likes>
          </PostFooter>
        </PostContainer>
      ))}
    </div>
  );
}
export default Home;
