import './App.css';
import NewsApp from './News';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  bg-dark border-bottom border-body ">
        <div class="container-fluid bg-dark  d-flex justify-content-center">
          <a class="navbar-brand text-danger" href="#">OmEgA <span class="navbar-brand text-light">nEws</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <NewsApp />
    </>
  );
}

export default App;
