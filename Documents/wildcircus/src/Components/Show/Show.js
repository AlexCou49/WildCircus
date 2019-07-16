import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cart from '../Cart/Cart';

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

       <div className="card">
          <div className="card">
            <div className="row">
              <div className="card-title mr-5 ml-5 mt-2 mb-5">Shows</div>
              <div className="card-title mr-5 ml-5 mt-2 mb-5">Name</div>
              <div className="card-title mr-5 ml-5 mt-2 mb-5">Description</div>
              <div className="card-title mr-5 ml-5 mt-2 mb-5" onClick={toggleFilterPrice}>Price</div>
           </div>
           
                {shows.map((show, index) => {
                  return (

                    
                    <tr className="py-2 tr-height" key={index}>
                      <th className="card-text px-2" scope="row" width="50%">{show.name}</th>
                      <td className="card-text" width="20%">{show.description}</td>
                      
                      <td className="card-text" width="20%">{show.price} $</td>
          
                      <td className="card-text" width="10%">{show.quantity}</td>
                      <td width="20%">
                        {/* <button onClick={() => props.dispatch(addArticle(article))} className="btn btn-primary btn-sm float-right mr-2">Add to cart</button> */}
                      </td>
                    </tr>
                  )
                })}

          </div>

        </div>
      </div>
      <Cart />
    </div>
  )
}

export default Show;






