import PropTypes from "prop-types";
import styled from "styled-components";
import { BoldText } from "../shared";
import sanitizeHtml from "sanitize-html";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ author, payload }) {
  const cleanedPayload = sanitizeHtml(
    payload.replace(/#[а-яА-Я]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );

  return (
    <CommentContainer>
      <BoldText>{author}</BoldText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleanedPayload,
        }}
      />
    </CommentContainer>
  );
}

export default Comment;

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string,
};
