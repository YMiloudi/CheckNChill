import React from 'react';
import MoviesList from './components/movies/MoviesList';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <MoviesList/>
      </div>
    );
  }
}

export default App;