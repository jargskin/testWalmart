import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';

//Services
import ServiceSearch from '../../Services/Search/Search';

//Components
import ComponentSearch from '../Search/ResultGrid/index';


const Search = () => {

  const [Data, setData] = useState();

  useEffect(() => {
    console.log(Data);
  }, [Data])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={async (values) => {
          const resp = await ServiceSearch(values.search);
          setData(resp);
        }}
      >
        <Form>
          <label htmlFor="search" />
          <Field
            id="search"
            name="search"
            placeholder="Busqueda..."
            type="text"
          />
          <button className="btn btn-primary" type="submit"><i className="fas fa-search" /></button>
        </Form>
      </Formik>
      {
        (Data) && (
          <ComponentSearch data={Data} />
        )
      }
      </div>
    </div>
  )
};
export default Search;