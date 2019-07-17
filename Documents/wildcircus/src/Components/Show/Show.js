import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import Cart from '../Cart/Cart';

import './Show.css';

function Show(props) {

  const [shows, setShows] = useState([]);
  const [filterPrice, setfilterPrice] = useState(false);

  const toggleFilterPrice = () => {
    if (filterPrice === 0) {
      setfilterPrice(1);
    } else if (filterPrice === 1) {
      setfilterPrice(2);
    } else {
      setfilterPrice(1);
    }
  }

  useEffect(() => {
    if (filterPrice === 1) {
      axios.get('http://localhost:8000/show/filter?price=asc')
        .then((result) => {
          setShows(result.data);
        })
    } else if (filterPrice === 2) {
      axios.get('http://localhost:8000/show/filter?price=desc')
        .then((result) => {
          setShows(result.data);
        })
    }
  }, [filterPrice])

  useEffect(() => {
    axios.get('http://localhost:8000/show')
      .then((result) => {
        setShows(result.data);
      })
  }, [])

  // const filterArticle = (tag, [setFunc, param]) => {
  //     if (param) {
  //         setArticles(articles.reverse());
  //     } else {
  //         setArticles(_.sortBy(articles, tag));
  //     }
  //     setFunc(!param);
  // }

  return (

    <div className="row mt-8">
      <div className="col-md-15">

        {
          shows.map((show, index) => {
            return (

              <div className="card text-center mb-5">
                <div className="py-2 tr-height" key={index}>
                  <div className="card-header">{show.name}</div>
                  <div className="card-body">
                    <h5 className="card-title">{show.quantity} places</h5>
                    <p className="card-text">{show.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                  <div className="card-footer text-muted">{show.price} $ /pers</div>
                </div>
              </div>
            )
          })} 

          
      </div>
    </div>
  )}


  export default Show;






