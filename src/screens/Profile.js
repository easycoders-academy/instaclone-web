import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  return "Профиль пользователя";
}

export default Profile;
