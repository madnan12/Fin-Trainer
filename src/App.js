import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Home />
      <Container>
        <Row>
          <Col>
            <About />
            <Services />
            <Work />
            <Pricing />
            <Partners />
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
