import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './forms';
import { Navigation } from "./components/navigation";


function App() {
  return (
    <div>
        <button>
            <a href="../pages/login">Get Started</a>
        </button>
      {/* <h1> yes </h1>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/AboutUs'} component={AboutUs}></Route>
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router> */}
    </div>
  )
}

export default App;