
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/1.png"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/2.png"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/3.png"),
    altText: "Slide 3",
    caption: ""
  },
  {
    src: require("assets/img/4.png"),
    altText: "Slide 4",
    caption: ""
  },
  {
    src: require("assets/img/5.png"),
    altText: "Slide 5",
    caption: ""
  },
  {
    src: require("assets/img/7.png"),
    altText: "Slide 7",
    caption: ""
  },
  {
    src: require("assets/img/8.png"),
    altText: "Slide 8",
    caption: ""
  },
  {
    src: require("assets/img/9.png"),
    altText: "Slide 9",
    caption: ""
  },
  {
    src: require("assets/img/10.png"),
    altText: "Slide 10",
    caption: ""
  },
  {
    src: require("assets/img/11.png"),
    altText: "Slide 11",
    caption: ""
  },
  {
    src: require("assets/img/12.png"),
    altText: "Slide 12",
    caption: ""
  },
  {
    src: require("assets/img/13.png"),
    altText: "Slide 13",
    caption: ""
  },
  {
    src: require("assets/img/14.png"),
    altText: "Slide 14",
    caption: ""
  },
  {
    src: require("assets/img/15.png"),
    altText: "Slide 15",
    caption: ""
  }
];

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/wow.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />


            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">

              <Row className="row-grid justify-content-between align-items-center text-left">

              <Col xl="5" md="8">
              <img
                alt="..."
                src={require("assets/img/2.png")}
                style={{width:500,height:600}}
              />
              </Col>

              <Col lg="4" md="5">
              <h1 className="text-white">7awes les stores men darkom ya zanji </h1>
              <p>
              blaaa bla bla bla blaaa bla bla blablaaa bla bla blablaaa bla bla blablaaa bla bla
              blaaa bla bla blablaaa bla bla bla
              </p>

              <h1 className="text-white">ida kont mol magasin 7ot swal7ek ya zanji </h1>
              <p>
              blaaa bla bla bla blaaa bla bla blablaaa bla bla blablaaa bla bla blablaaa bla bla
              blaaa bla bla blablaaa bla bla bla
              </p>
              </Col>


              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-molecule-40 text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">1</CardTitle>
                                  <p />
                                  <p className="card-category">Design</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-zoom-split text-primary" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">2</CardTitle>
                                  <p />
                                  <p className="card-category">Search</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-bell-55 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3</CardTitle>
                                  <p />
                                  <p className="card-category">Notification</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-single-02 text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">4</CardTitle>
                                  <p />
                                  <p className="card-category">User Profil</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                    <img
                      alt="..."
                      className="shapes squares"
                      src={require("assets/img/patrat.png")}
                    />
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-square-pin text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">5</CardTitle>
                                  <p />
                                  <p className="card-category">Localisation</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-shape-star text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">6</CardTitle>
                                  <p />
                                  <p className="card-category">Favorite Product list</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default ">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-check-2 text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">7</CardTitle>
                                  <p />
                                  <p className="card-category">flexibility</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">booster your sels</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Low Commission</h4>
                        <hr className="line-primary" />
                        <p>
                          bla bla bla bla bla bla bla
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-coins" />
                        </div>
                        <h4 className="info-title">High Incomes</h4>
                        <hr className="line-warning" />
                        <p>
                        bla bla bla  bla bla
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Increase the visibility of your store</h4>
                        <hr className="line-success" />
                        <p>
                        bla bla bla bla
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-link-72" />
                        </div>
                        <h4 className="info-title">contact</h4>
                        <hr className="line-success" />
                        <p>
                        bla bla bla bla
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="4">

                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/9.png")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">

                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/7.png")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">2890</CardTitle>
                          <p className="card-category text-white">stores</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">all</CardTitle>
                          <p className="card-category text-white">
                            brands
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">11205</CardTitle>
                          <p className="card-category text-white">downloads</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="section">
              <div>
               <h2 className="text-center">ScreenShots</h2>
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col sm="3">
            <UncontrolledCarousel items={carouselItems} />
            </Col>
            <Col sm="3">
              <div className="px-md-5">
              <img
                alt="..."
                className="shapes wave"
                src={require("assets/img/waves.png")}
              />
                <hr className="line-success" />
                <h3>Awesome features</h3>
                <p>
                  bllllllal blaaaaaaaaaa blaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaabl
                  bla   blaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h4>Select your products online</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <h4>Locate your store</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-settings" />
                      </div>
                      <div className="ml-3">
                        <h4>Super friendly support team</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-send" />
                      </div>
                      <div className="ml-3">
                        <h4>contact your store</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm="3">
            <UncontrolledCarousel items={carouselItems} />
            </Col>
            </Row>
            </div>
          </div>
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the plan{" "}
                    <span className="text-info">Now !</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Disque d'Or</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 streaming</ListGroupItem>
                          <ListGroupItem>100 vendres</ListGroupItem>
                          <ListGroupItem>1000 physiques</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Disque de platine</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 streaming</ListGroupItem>
                          <ListGroupItem>1000 vendres</ListGroupItem>
                          <ListGroupItem>15000 physiques</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Disque de diamant</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 streaming</ListGroupItem>
                          <ListGroupItem>10K vendres</ListGroupItem>
                          <ListGroupItem>20k physiques</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
