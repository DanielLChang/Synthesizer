import React from 'react';
import ReactDOM from 'react-dom';

// import configureStore from './store/store';
// import Root from './components/root';

class Root extends React.Component {
  render () {
    return (
      <div></div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root />, document.getElementById('root'));
});
