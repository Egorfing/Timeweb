import React from 'react';
import { Link, useParams } from 'react-router-dom'
import './Model.scss'

function Model() {

  const params = useParams()
  const data = JSON.parse(localStorage.getItem('data'))
  const model = data.filter(el => el.customer_id === params.id)

  return (
    <div className='card position1' style={{width: '18rem'}}>
      <div className='card-body'>
        <h5 className='card-title'>customer id: <span className='text-primary'> {model[0].customer_id}</span></h5>
        <p className='card-text'>server name: <span className='text-primary'> {model[0].server_name}</span></p>
        <p className='card-text'>server type: <span className='text-primary'> {model[0].server_type}</span></p>
        <Link to={'/'+params.id+'/edit'} className='btn btn-primary'>edit</Link>
      </div>
    </div>
  );
}

export default Model;
