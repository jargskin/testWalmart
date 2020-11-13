import React from 'react'
import currencyFormatter from 'currency-formatter';

const ResultGrid = ({ data }) => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        {
          data.map((item) => (
            <div className="card col-6 col-sm-4 col-lg-3 border text-center">
              <img src={`https://${item.image}`} alt=""/>
              <div className="card-body">
                  <h5 className="card-title">{item.brand}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{currencyFormatter.format(item.price, {code: 'CLP', precision: 0})}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )

}
export default ResultGrid;