import React from 'react';
import Wrapper from '../components/appWrapper';
import CarouselComponent from '../components/partialComponents/homePage/carouselComponent';
import SaleBlockComponent from '../components/partialComponents/homePage/saleBlockComponent';
import CatgoryBrowserComponent from '../components/partialComponents/homePage/categoryBrowserComponent';
import ProductsTabComponent from '../components/partialComponents/homePage/bestSellersNewArrivalTabComponent';
import TrendingNow from '../components/partialComponents/homePage/trendingNowComponent';
import PopularProducts from '../components/partialComponents/homePage/popularProductsComponent';
import Recommendations from '../components/partialComponents/homePage/recommendationsComponent';
import Brands from '../components/partialComponents/homePage/popularBrandsComponent';
import Notes from '../components/partialComponents/homePage/notesComponent';


export default class Index extends React.Component {

  componentDidMount() {
   
  }
  render() {
    
    return (
      <Wrapper title = "Home Page" description = "Home page for the project">
      {/******* main banners with carousel starts *****/}
      <CarouselComponent key = {1}/>
      {/******* main banners with carousel ends *****/}

      {/******* second block with images starts *****/}
      <SaleBlockComponent />
      {/******* second block with images ends *****/}

      {/******** category browser starts ***********/}
      <CatgoryBrowserComponent />
      {/******** category browser ends ***********/}

      {/**** new arrival, best seller tabs  starts****/}
      <ProductsTabComponent />
      {/**** new arrival, best seller tabs  ends****/}

      {/**** trending now starts****/}
      <TrendingNow />
      {/**** trending now  ends****/}

      {/**** popular products starts****/}
      <PopularProducts />
      {/**** trending now  ends****/}

      {/**** popular products starts****/}
      <Recommendations />
      {/**** trending now  ends****/}

      {/*** shop by brands starts ***/}
      <Brands />
      {/*** shop by brands ends ***/}

      {/*** shop by brands starts ***/}
      <Notes />
      {/*** shop by brands ends ***/}

       {/* <div classNameNameName="hero">
          <h1 classNameNameName="title">Welcome to Next!</h1>
          <p classNameNameName="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
    
          <div classNameNameName="row">
            <Link href="https://github.com/zeit/next.js#getting-started">
              <a classNameNameName="card">
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
            <Link href="https://open.segment.com/create-next-app">
              <a classNameNameName="card">
                <h3>Examples &rarr;</h3>
                <p>
                  Find other example boilerplates on the <code>create-next-app</code> site
                </p>
              </a>
            </Link>
            <Link href="https://github.com/segmentio/create-next-app">
              <a classNameNameName="card">
                <h3>Create Next App &rarr;</h3>
                <p>Was this tool helpful? Let us know how we can improve it</p>
              </a>
            </Link>
          </div>
    </div> */}
    
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title, .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9B9B9B;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </Wrapper>
    )
  }
}
