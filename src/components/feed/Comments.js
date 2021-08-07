import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "./Comment";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const CommentsNumber = styled.span`
  opacity: 0.7;
  margin: 10px 0;
  display: block;
  font-size: 12px;
  font-weight: 600;
`;

function Comments({ author, caption, commentsNumber, comments }) {
  return (
    <CommentsContainer>
      <Comment author={author} payload={caption} />
      <CommentsNumber>
        {commentsNumber === 1
          ? "1 комментарий"
          : `${commentsNumber} комментариев`}
      </CommentsNumber>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.user.username}
          payload={comment.payload}
        />
      ))}
    </CommentsContainer>
  );
}

Comments.propTypes = {
  author: PropTypes.string.isRequired,
  caption: PropTypes.string,
  commentsNumber: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      user: PropTypes.shape({
        username: PropTypes.string,
      }),
      createdAt: PropTypes.string,
      isMine: PropTypes.bool,
    })
  ),
};

export default Comments;
