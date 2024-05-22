import { useAuthUser } from "@/authHooks";
import SigninPage from "@/modules/signin";
import { useRouter } from "next/router";
import { useEffect } from "react";

const WithLayout = () => {
  const router = useRouter();
  const { user } = useAuthUser();

  useEffect(()=>{
    if(user != null){
      router.push('/');
    }
  }, [user]);

  return (
    <SigninPage />
  )
}
 
export default WithLayout;