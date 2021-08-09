import { gql, useMutation, useQuery } from "@apollo/client";
import { login, loginVariables } from "./__generated__/login";
import { seeFeed } from "./__generated__/seeFeed";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments {
        id
        payload
      }
      createdAt
      isMine
      isLiked
    }
  }
`;

function App() {
  const [login] = useMutation<login, loginVariables>(LOGIN_MUTATION, {
    variables: {
      username: "sfsldfhlsdjfhg",
      password: "fafafsasf",
    },
  });
  const { data } = useQuery<seeFeed>(FEED_QUERY);
  console.log(data?.seeFeed?.map((photo) => photo?.caption?.split));
  return <h1>Apollo</h1>;
}
export default App;
