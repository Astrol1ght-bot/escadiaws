import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Course, Student } from 'src/API';
import { UserData } from './storeTypes';

interface AppState {
  menuProducts: Course[];
  cognitoUser: CognitoUser | undefined;
  userHasProfile: boolean;
  userProfile?: Student;
  isAdmin: boolean;
  isLogged: boolean;
  toogleState: boolean;
  usersList: UserData[];
  setCognitoUser: (user?: CognitoUser) => void;
  setHasProfile: (hasProfile: boolean) => void;
  setUserProfile: (student?: Student) => void;
  setIsAdmin: (role?: boolean) => void;
  setIsLogged: (role?: boolean) => void;
  setCourses: (courses: Course[]) => void;
  setToogleState: () => void;
  resetUserSession: () => void;
  setUsersList: (usersList: any) => void;
}

const useAppStore = create<AppState>()(
  devtools((set) => ({
    toogleState: false,
    isAdmin: false,
    isLogged: false,
    userHasProfile: false,
    menuProducts: [],
    cognitoUser: undefined,
    usersList: [],
    setCognitoUser: (user) => {
      set((state) => ({ ...state, cognitoUser: user }));
    },
    setUsersList: (usersList) => set((state) => ({ ...state, usersList: usersList })),
    setHasProfile: (hasProfile) => set((state) => ({ ...state, userHasProfile: hasProfile })),
    setUserProfile: (student) =>
      set((state) => ({ ...state, userProfile: student })),
    setIsAdmin: (role) => set((state) => ({ ...state, isAdmin: role })),
    setIsLogged: (isLogged) => set((state) => ({ ...state, isLogged })),
    setCourses: (course) => set((state) => ({ ...state, menuProducts: course })),
    setToogleState: () => set((state) => ({ ...state, toogleState: !state.toogleState })),
    resetUserSession: () =>
      set((state) => ({
        ...state,
        isAdmin: false,
        isLogged: false,
        userHasProfile: false,
        cognitoUser: undefined,
        userProfile: undefined,
      })),
  })),
);

export default useAppStore;
