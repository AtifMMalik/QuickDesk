import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext";

const Profile = () => {
  
  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <div>
      jwt: {authContext?.token}
    </div>
  )
}

export default Profile