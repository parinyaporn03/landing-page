import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <Section5 />
    </>
  );
}

export default App;
