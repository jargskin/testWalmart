import React from 'react'
import ComponentSearch from '../Search/index';
import './index.css';

const Home = ({title}) => {
  const titleH1 = title || 'Especial Palindrofertas';

  return (
    <div className="container-fluid">
      <div className="row my-4 justify-content-center">
        <h1 data-testid="h1">{titleH1}</h1>
      </div>
      <div className="row justify-content-center">
        <ComponentSearch />
      </div>
    </div>
  )
}
export default Home;