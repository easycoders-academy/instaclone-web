import { gql } from "@apollo/client";

export const POST_FRAGMENT = gql`
  fragment PostFragment on Photo {
    id
    file
    likes
    commentsNumber
  }
`;

export const COMMENTS_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    user {
      username
    }
    payload
    createdAt
    isMine
  }
`;
