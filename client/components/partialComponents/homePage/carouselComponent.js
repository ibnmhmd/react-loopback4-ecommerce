import React from 'react';

export default class CarouselComponent extends React.Component {

    componentDidMount() {
        $('#myCarousel').carousel({
          interval: 10000
        });
      }
  render() {
      return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
  
  
    <div className="carousel-inner">
      <div className="item active">
        <img className = "img-responsive" src="../static/img/banner1.jpg" alt="Chania"/>
        <div className="carousel-caption">
          <h1>Los Angeles</h1>
          <h2>LA is always so much fun!</h2>
        </div>
      </div>
  
      <div className="item">
        <img className = "img-responsive" src="../static/img/banner2.jpg" alt="Chicago"/>
        <div className="carousel-caption">
          <h1>Chicago</h1>
          <h2>Thank you, Chicago!</h2>
        </div>
      </div>
  
      <div className="item">
        <img className = "img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/slide-2.jpg" alt="New York" />
        <div className="carousel-caption">
          <h1>New York</h1>
          <h2>We love the Big Apple!</h2>
        </div>
      </div>
    </div>
  
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>   
      )
  }    
}