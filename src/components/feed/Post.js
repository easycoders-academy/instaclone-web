import PropTypes from "prop-types";
import styled from "styled-components";
import { BoldText } from "../shared";
import Avatar from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { gql, useMutation } from "@apollo/client";

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const PostContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin-bottom: 60px;
  max-width: 620px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Username = styled(BoldText)`
  margin-left: 15px;
`;

const PostContent = styled.img`
  max-width: 100%;
  min-width: 100%;
`;

const PostFooter = styled.div`
  padding: 12px 15px;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const PostAction = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

const Likes = styled(BoldText)`
  display: block;
  margin-top: 15px;
`;

function Post({ id, user, file, isLiked, likes }) {
  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;
    if (ok) {
      const fragmentId = `Photo:${id}`;
      const fragment = gql`
        fragment LikeFragment on Photo {
          isLiked
          likes
        }
      `;
      const result = cache.readFragment({
        id: fragmentId,
        fragment,
      });
      if ("isLiked" in result && "likes" in result) {
        console.log("Данные есть в кэше");
        const { isLiked: cachedIsLiked, likes: cachedLikes } = result;
        cache.writeFragment({
          id: fragmentId,
          fragment,
          data: {
            isLiked: !cachedIsLiked,
            likes: cachedIsLiked ? cachedLikes - 1 : cachedLikes + 1,
          },
        });
      }
    }
  };
  const [toogleLike, { loading }] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: { id },
    update: updateToggleLike,
  });
  return (
    <PostContainer key={id}>
      <PostHeader>
        <Avatar url={user?.avatar} lg={true} />
        <Username>{user?.username}</Username>
      </PostHeader>
      <PostContent src={file} />
      <PostFooter>
        <PostActions>
          <div>
            <PostAction onClick={toogleLike}>
              <FontAwesomeIcon
                style={{ color: isLiked ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : faHeart}
              />
            </PostAction>
            <PostAction>
              <FontAwesomeIcon icon={faComment} />
            </PostAction>
            <PostAction>
              <FontAwesomeIcon icon={faTelegramPlane} />
            </PostAction>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </PostActions>
        <Likes>
          {likes === 1 ? '1 отметка "Нравится"' : `${likes} отметок "Нравится"`}
        </Likes>
      </PostFooter>
    </PostContainer>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;
