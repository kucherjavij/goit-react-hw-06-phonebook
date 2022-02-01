import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import contactReducer from "../contacts/contacts-reducer"


const contactPersistConfig = {
  key: 'contacts',
    storage,
  blacklist: ['filterReducer']
}
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
})]




const store = configureStore({
    reducer: {contacts: persistReducer(contactPersistConfig, contactReducer)},
    devTools: process.env.NODE_ENV !== "production",
middleware

})
const persistor = persistStore(store)

export default { store, persistor };

