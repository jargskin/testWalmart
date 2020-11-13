import React from 'react'
import ComponentSearch from '../Search/index';

const Home = () => {

  return (
    <div className="container">
      <div className="row my-4 justify-content-center">
        <h1>Especial Palindrofertas</h1>
      </div>
      <div className="row justify-content-center">
        <ComponentSearch />
      </div>
    </div>
  )
}
export default Home;