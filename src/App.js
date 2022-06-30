import './App.css';
import { useEffect, useState } from 'react';
import SearchMovie from './pages/SearchMovie';
import Card from './pages/Card';
import { InfoMovie } from './helpers/utils';

function App() {
  const [idMovie,setIdMovie]=useState('157336')
  const [infoMovie,setInfoMovie]=useState(null)

  useEffect(async()=>{
    const data= await InfoMovie(idMovie)
    setInfoMovie(data)
    console.log(data);
  },[idMovie])

  const submitIdMovie=(value)=>{
    console.log(value);
    setIdMovie(value.id)
  }
  return (
    <div className="App text-white " style={{backgroundImage:"linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%)"}} >
      <div className="container mx-auto max-w-5xl py-7 px-12 h-screen">
        
        <SearchMovie submitIdMovie={submitIdMovie} />
        <Card infoMovie={infoMovie} />

      </div>


    </div>
  );
}

export default App;
