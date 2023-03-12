import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductLIst from "./components/productList/ProductLIst";
import Toggle from "./components/toggle/Toggle";
import { useContext } from 'react'
import { ThemeContext } from "./context"

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return( <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
    <Toggle/>
    <Intro/>
    <About/>
    <ProductLIst/>
    <Contact/>
  </div>
  );
};

export default App;