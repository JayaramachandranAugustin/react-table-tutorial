import React, { useMemo } from 'react'
import { useTable } from 'react-table';
import './App.css';
import { COLUMNS } from './Header';
import DATA from './data/data.json'

const App = () => {

  const data = useMemo(
    () => DATA,
    []
  )

  const columns = useMemo(
    () => COLUMNS,
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });


  return (
    <div className="container">
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} 
          className="header-row">
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="header-cell"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="body">
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="body-row">
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="body-cell"
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}

export default App
