import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../Screens/ScreenLogin/redux/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/setUser', 'auth/setError'], 
        ignoredPaths: ['auth.user'], 
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
