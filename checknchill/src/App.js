import React from 'react';
import Weather from './components/weather/Weather';
import './App.css';
import Quotes from './components/dontforget/Quotes';
import MoviesList from './components/movies/MoviesList';



class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      classImg: ""
    }
  }

  // Création de la fonction qui va récup la donnée et à laquelle on va assigner une condition pour afficher une img
  getImgByTemp(temp){
    if(temp > 16){
      this.setState({classImg: "imgHot"})
    }else{
      this.setState({classImg: "imgCold"})
    }
  }

  render(){
    return (
      <div className={this.state.classImg}> {/*Création du state classImg qui définit la div temp*/}
        <MoviesList/>
        <Weather onDataSearch={(temp)=>this.getImgByTemp(temp)}/> {/*onDataSearchs => Fonction qui va récup la data img*/}

        <Quotes/>
        
      </div>

    );
  }
}

//



export default App;