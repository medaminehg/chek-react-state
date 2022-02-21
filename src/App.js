import React,{useState} from 'react'
import './App.css';
import Header from './componed/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reate from './componed/Reate';
import MovisListe from './componed/MovisListe';
import {FaStar} from "react-icons/fa"
import Addfilm from './componed/Addfilm';
import NewMovie from './NewMovie';
function App() {
  const[movis, setmovis]=useState([{
    name: "interstellar",
    img :"https://media.s-bol.com/g1GJQW2zJNr/550x779.jpg",
   rat: 5,
    prod :"Top cast ; Matthew McConaughey · Cooper ; Anne Hathaway · Brand ; Jessica Chastain",
    ann : "https://www.youtube.com/watch?v=VaOijhK3CRU"
  
  },{
    name: "inception",
    img :"https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    rat: 4, 
    prod: "Top cast ; Leonardo DiCaprio · Cobb ; Joseph Gordon-Levitt · Arthur ; Elliot Page · Ariadne ; Ken Watanabe",
    ann:"https://www.youtube.com/watch?v=CPTIgILtna8"
  },{
    name: "catch me if you can",
    img :"https://m.media-amazon.com/images/I/81V+b69u3xL._AC_SL1500_.jpg",
    rat: 5,
    prod : "Top cast ; Leonardo DiCaprio · Frank Abagnale ; Tom Hanks · Carl Hanratty ; Christopher Walken · Frank Abagnale",
    ann : "https://www.youtube.com/watch?v=s-7pyIxz8Qg"
  },{
    name: "the dictator",
    img :"https://images.static-bluray.com/products/20/9149_1_large.jpg",
    rat: 3,
    prod: "Top cast ; Sacha Baron Cohen · Aladeen ; Anna Faris · Zoey ; John C. Reilly · Clayton ; Ben Kingsley · Tamir ; Sayed Badreya",
    ann : "https://www.youtube.com/watch?v=cazCtxtoscM"
  },{
    name: "The Curious Case of Benjamin Button",
    img :"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd8ff745eadb648fb562f9e4572b2d94cfce917845e911711ebc78552f1031d1._RI_V_TTW_.jpg",
    rat: 3,
    prod: "Top cast ; Brad Pitt · Benjamin Buttonas Benjamin Button ; Cate Blanchett · Daisyas Daisy ; Tilda Swinton ·",
    ann:"https://www.youtube.com/watch?v=iH6FdW39Hag"
  },{
    name: "fury",
    img :"https://kinepolis.be/fr/sites/kinepolis.be.fr/files/styles/kinepolis_filter_movie_poster/public/posters/fury_BEFR_def.jpg",
    rat: 3,
    prod :"Cast. Brad Pitt: Wardaddy, Executive Producer",
    ann: "https://www.youtube.com/watch?v=DNHuK1rteF4&ab_channel=MovieclipsTrailers"
  }])
  const [filmReate, setfilmReate]=useState(0)
  const [Movisname, setMovisname]=useState("")
  const [NewmoHed, setNewmoHed]=useState({
    name:"Red Notice",
    img : "https://wallpaperaccess.com/full/7741536.jpg",
    rat : 2 ,
    ann:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
  })
  function add(x) {
    setfilmReate(x)
  }
  function addch(ch) {
    setMovisname(ch)
  }
  function addmovie(obj) {
    setmovis([...movis,obj])
  }


  return (
    <div className='App'>
      
      <Header add={add} addch={addch} />
      <NewMovie Newm={NewmoHed}/>
      <MovisListe movis={movis.filter(el => filmReate <= el.rat).filter(v =>v.name.includes(Movisname.trim()))}/>
      <Addfilm addmovie={addmovie}/>
    </div>
  )
}

export default App
