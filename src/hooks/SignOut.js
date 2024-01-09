import useAuth from './useAuth';
import  axios  from "../api/axios";

const SignOut  = () =>  {
    const { setAuth } = useAuth();
  
    const signout = async () => {
        setAuth({});
        try {
            const response = await axios.get('/api/v1/auth/signout',{
                    withCredentials: true
                }
            );
            console.log("response?.data: "+response?.data);
        } catch (err) {
            console.log('No Server Response: '+ err); 
        }
    }

    return signout;
}
export default SignOut