import { AuthUser } from "@/constasts/appConstats";
import { userSignOutSuccess, userSigninSuccess } from "@/redux/action/userAction";
import { AppDispatch, RootState } from "@/redux/store";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface AppContextProps {
  user: AuthUser | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: String;
}

interface SignInProps {
  email: string;
  password: string;
}

interface IAppActionsProps {
  signIn: (data: SignInProps) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error:''
});
const AppActionsContext = createContext<IAppActionsProps>({
  signIn: () => { },
  logout: () => { }
});
export const useAppContext = () => useContext(AppContext);

export const useAppContextActions = () => useContext(AppActionsContext);

interface IAuthProvider {
  children: ReactNode;
}

const dataUserMock:AuthUser = {
  displayName: "Dodo Love",
  email: "dodolove@email.com",
  about: "จุดหมายมีไว้พุ่งชน"
}

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {

  const dispatch: AppDispatch = useDispatch(); 
  const [appAuthData, setappAuthData] = useState<AppContextProps>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error:''
  });

  const users = useSelector((state: RootState) => state.users);

  useEffect(()=>{
    if(users != null){
      setappAuthData({
        ...appAuthData,
        user: users.userAuth,
        error: '',
        isLoading: false
      });
    }
  }, [users]);

  const logout = () => {
    setappAuthData({
      ...appAuthData,
      user: null,
      error: '',
      isLoading: false
    });
    dispatch(userSignOutSuccess());
    sessionStorage.clear();
  }

  const signIn = (data:SignInProps) => {
    setappAuthData({
      ...appAuthData,
      isLoading: true
    });
    if(data.email == 'test@email.com' && data.password == '12345678'){
      setappAuthData({
        ...appAuthData,
        user: dataUserMock,
        error: '',
        isLoading: false
      });
      dispatch(userSigninSuccess(dataUserMock));
    }else{
      setappAuthData({
        ...appAuthData,
        error: 'อีเมล์ หรือ รหัสผ่านไม่ถูกต้อง',
        isLoading: false
      });
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...appAuthData,
      }}
    >
      <AppActionsContext.Provider
        value={{
          logout,
          signIn
        }}
      >
        
        {
          children
        }

      </AppActionsContext.Provider>
    </AppContext.Provider>
  );
};

export default AuthProvider;
