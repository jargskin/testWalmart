import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import Loader from 'react-loader-spinner'


//Services
import ServiceSearch from '../../../Services/Search/Search';

//Components
import ComponentSearch from '../Search/ResultGrid/index';


const Search = () => {

  const [Data, setData] = useState();
  const [ShowLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (Data) {
      setShowLoading(false);
    }
  }, [Data])

  useEffect(() => {
    (async () => {
      setShowLoading(true)
      const resp = await ServiceSearch('');
      setData(resp);
    })();
  }, [])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={async (values) => {
          if (values.search.length > 3) {
            setShowLoading(true)
            const resp = await ServiceSearch(values.search);
            setData(resp);
          } else if (!(isNaN(values.search))) {
            setShowLoading(true)
            const resp = await ServiceSearch(values.search);
            setData(resp);
          }
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
        (ShowLoading) && (
          <div className="container">
            <div className="row justify-content-center">
              <Loader
                type="ThreeDots"
                color="#fff"
                height={100}
                width={100}
              />
            </div>
          </div>
        )
      }
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