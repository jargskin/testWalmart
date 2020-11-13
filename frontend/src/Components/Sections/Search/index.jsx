import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';


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
          setData(values.search)
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
          <button type="submit"><i className="fas fa-search" /></button>
        </Form>
      </Formik>
  

      </div>
    </div>
  )
};
export default Search;