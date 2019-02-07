import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Search from './components/search';
import ClientList from './components/client-list';
import ClientDetail from './components/client-detail';

const borderedBlock = {
  borderRadius: 5,
  border: "1px solid #ccc",
  height: "95vh",
  overflow: "auto",
};

const App = () => (
  <Provider store={store}>
    <div className="container">
      <div className="row pt-3 pb-3">
        <div
          className="col-sm-4"
        >
          <Search />
          <ClientList />
        </div>
        <div
          className="col-sm-8"
          style={borderedBlock}
        >
          <ClientDetail />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
