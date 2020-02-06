import React from 'react';
import './App.css';
import { Redirect} from 'react-router-dom';
class App extends React.Component {
  render() {
    return(<>
     <Redirect to="/login"/>
    </>)
  }
}

export default App;
