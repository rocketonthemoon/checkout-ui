import Header from "./components/Header";
import Form from "./components/Form";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const dataSet = data();
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Form />
        <Cart data={dataSet} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
