import { useContext } from "react";
import UserContext from "../context/userContext";



function Profile () {
    const {user} = useContext (UserContext)
    if (!user)
        return <div> Please Login </div>

    return <div> welcome "{user.username}" & your Password is "{user.password}"  </div>
    
}
  export default Profile