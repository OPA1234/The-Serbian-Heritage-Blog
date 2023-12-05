

import Navbar from './NavBar';
import Home from './Home';

function App() {

  const title = 'Welcome to the blog about Serbian Heritage';
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
