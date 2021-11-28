import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FilesUpload from '../components/upload/FilesUpload';
import Header from '../components/upload/Header';
import FilesList from '../components/upload/FilesList';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={FilesUpload} path="/upload" exact={true} />
          <Route component={FilesList} path="/list" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;