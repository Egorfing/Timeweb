import React from 'react';
import idGeneration from '../idGeneration/idGeneration';
import receiveData from '../mockup/data';
import { Link } from 'react-router-dom';

function List(props) {
  const data = JSON.parse(localStorage.getItem('data'))
receiveData()
  return (
      <nav className='nav flex-column mx-5 mt-4'>
        {data?.map(el => <Link className='nav-link' key={idGeneration()} to={'/' + el.customer_id}>{el.customer_id}</Link>)}
      </nav>
  );
}

export default List;
