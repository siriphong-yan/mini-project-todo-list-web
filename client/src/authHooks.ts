import { useAppContext, useAppContextActions } from "./services/AuthProvider";

export const useAuthUser = () => {
    const {user, isAuthenticated, isLoading, error } = useAppContext();
    return {
      isLoading,
      isAuthenticated,
      user,
      error
    };
  };
  
export const useAuthMethod = () => {
    const {
        signIn,
        logout
    } = useAppContextActions();

    return {
        signIn,
        logout
    };
};