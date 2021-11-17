import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import connectionReducer from "./connection";
import sendReducer from "./send";
import chainApi from "./chainApi";
import transactionsReducer from "./transactions";
import depositsReducer from "./deposits";
import blocksReducer from "./blocks";
import poolsReducer from "./pools";
import timerReducer from "./timers";

export const store = configureStore({
  reducer: {
    connection: connectionReducer,
    send: sendReducer,
    transactions: transactionsReducer,
    deposits: depositsReducer,
    blocks: blocksReducer,
    pools: poolsReducer,
    time: timerReducer,
    [chainApi.reducerPath]: chainApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }).concat(
      chainApi.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
