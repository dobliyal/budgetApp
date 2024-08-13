import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase';
import { storeUserToken, clearUserToken } from '../../../Firebase/token';

interface User {
  uid: string;
  displayName?: string | null;
  email?: string | null;
}

interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    logout(state) {
      state.user = null;
      clearUserToken(); // Clear token on logout
    },
  },
});

export const { setUser, setError, setLoading, logout } = authSlice.actions;

export const registerUser = (name: string, email: string, password: string) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser!, { displayName: name });
    await storeUserToken(userCredential.user);

    const user: User = {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
    };

    dispatch(setUser(user));
  } catch (error: any) {
    dispatch(setError(error.message));
  }
};

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await storeUserToken(userCredential.user);

    const user: User = {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
    };

    dispatch(setUser(user));
  } catch (error: any) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
