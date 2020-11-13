/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react'

const Home = lazy(() => import('../Sections/Home/index'));


export default [
  {
    path: '/',
    name: 'Walmart Challenge',
    component: Home,
    exact: true,
  }
];
