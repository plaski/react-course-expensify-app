import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
)

export default ExpenseListItem