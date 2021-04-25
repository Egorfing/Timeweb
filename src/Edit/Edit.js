import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'

function Edit(props) {

  const params = useParams()
  const history = useHistory()
  const data = JSON.parse(localStorage.getItem('data'))
  const model = data.filter(el => el.customer_id === params.id)

  function formHandler(e) {
    e.preventDefault()
    const newData = data.map(el => {
      if (el.customer_id === params.id) {
        el.server_name = e.target.server_name.value
        el.server_type = e.target.server_type.value
      }
      return el
    })
    localStorage.setItem('data', JSON.stringify(newData))
    history.push(`/${params.id}`)
  }

  return (
    <form onSubmit={formHandler} className='position1' style={{ width: '18rem' }}>
      <div className='mb-3'>
        <label htmlFor='id' className='form-label'>customer id:</label>
        <input type='text' name='customer_id' className='form-control' id='id' readOnly value={params.id} />
      </div>
      <div className='mb-3'>
        <label htmlFor='serverName' className='form-label'>server name:</label>
        <input type='text' className='form-control' name='server_name' id='serverName' defaultValue={model[0].server_name} />
      </div>
      <div className='mb-3'>
        <label htmlFor='serverType' className='form-label'>server type:</label>
        <select name='server_type' id='serverType' className='form-select'>
          <option value='vds'>vds</option>
          <option value='dedicated'>dedicated</option>
          <option value='hosting'>hosting</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>save</button>
      <Link to='/' className='btn btn-primary mx-2'>cancel</Link>
    </form>
  );
}

export default Edit;
