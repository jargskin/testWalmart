import React from 'react'
import currencyFormatter from 'currency-formatter';
import './index.css';

const ResultGrid = ({ data }) => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        {
          data.map((item) => (
            <div className="productItem card col-6 col-sm-4 col-lg-3 border text-center m-3">
              <img src={`https://${item.image}`} alt=""/>
              <div className="card-body">
                  <h5 className="card-title">{item.brand}</h5>
                  <p className="card-text">{item.description}</p>
                    { 
                      ((item.isPalindrome)) 
                      ? (
                        <>
                          <p className="card-text">
                            <span className="text-success">
                              {currencyFormatter.format(item.discount, {code: 'CLP', precision: 0})}
                            </span>
                          </p>
                          <p className="card-text">
                            <span className="tachado">{currencyFormatter.format(item.price, {code: 'CLP', precision: 0})} </span>
                            <span className="alert alert-danger p-0"> -{item.discountPercentage}% </span>
                          </p>
                          </>
                        )
                      : <span>{currencyFormatter.format(item.price, {code: 'CLP', precision: 0})}</span>
                    }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default ResultGrid;