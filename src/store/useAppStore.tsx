import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { Course } from 'src/API'

interface AppState {
  menuProducts: Course[]
  cognitoUser: CognitoUser | undefined
  userHasProfile: boolean
  isAdmin: boolean
  isLogged: boolean
  toogleState: boolean
  setCognitoUser: (user?: CognitoUser) => void
  setHasProfile: (hasProfile: boolean) => void
  setIsAdmin: (role?: boolean) => void
  setIsLogged: (role?: boolean) => void
  setCourses: (courses: Course[]) => void
  setToogleState: () => void
  resetUserSession: () => void
}

const useAppStore = create<AppState>()(
  devtools((set) => ({
    toogleState: false,
    isAdmin: false,
    isLogged: false,
    userHasProfile: false,
    menuProducts: [],
    cognitoUser: undefined,
    setCognitoUser: (user) => {
      set((state) => ({ ...state, cognitoUser: user }))
    },
    setHasProfile: (hasProfile) => set((state) => ({ ...state, userHasProfile: hasProfile })),
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
)

export default useAppStore
