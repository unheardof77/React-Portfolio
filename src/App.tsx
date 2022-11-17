import Header from "./Componets/Header/Header";
import Project from "./Componets/Project/Project";
import Footer from "./Componets/Footer/Footer";
import {useState} from 'react';

function App() {
  const [pageState, setPage] = useState('Home');

  return (
    <div>
      {pageState === 'Home'?(
        <>
          <Header setPage={setPage}/>
          <section>
            <article>
              <section>
                <h2>Biography</h2>
                <img/>
              </section>
              <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis minima, error repellat nemo illo fugiat, maiores dolor iste deleniti, itaque aperiam fuga molestias earum. Excepturi recusandae tenetur atque minus.</p>
              </section>
            </article>

            <section>
              <form>
                <input/>
                <input/>
                <textarea/>
              </form>
              <article>
                <p></p>
                <a></a>
              </article>
            </section>
          </section>
          <Footer/>
        </>
      ) : (
        <>
          <Header setPage={setPage}/>
          <section>
            <Project imageSrc='...' projectTitle='Test title' projectDescription='This is a test description'/>
          </section>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
