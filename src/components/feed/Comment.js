import PropTypes from "prop-types";
import styled from "styled-components";
import { BoldText } from "../shared";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
`;

function Comment({ author, payload }) {
  return (
    <CommentContainer>
      <BoldText>{author}</BoldText>
      <CommentCaption>{payload}</CommentCaption>
    </CommentContainer>
  );
}

export default Comment;

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string,
};
