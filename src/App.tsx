import Header from "./Componets/Header/Header";
import Project from "./Componets/Project/Project";
import Footer from "./Componets/Footer/Footer";
import {useState, useEffect} from 'react';

function App() {
  const [pageState, setPage] = useState('Home')

  return (
    <div className="App">
      {pageState === 'Home'?(
        <>
          <Header setPage={setPage} />
          <Footer/>
        </>
      ) : (
        <>
          <Header setPage={setPage}/>
          <Project imageSrc='...' projectTitle='Test title' projectDescription='This is a test description'/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
