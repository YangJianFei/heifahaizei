import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/less/common.less';
import './index.less';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import MyRoutes from './router';
import Loading from 'components/loading';
import store from './reduce/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <MyRoutes />
        </Suspense>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
