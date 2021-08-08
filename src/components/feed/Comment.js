import PropTypes from "prop-types";
import styled from "styled-components";
import { BoldText } from "../shared";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";
import React from "react";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ author, payload }) {
  return (
    <CommentContainer>
      <BoldText>{author}</BoldText>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[а-яА-Я]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
    </CommentContainer>
  );
}

export default Comment;

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string,
};
