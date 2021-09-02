import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import './App.css';
import { COLUMNS } from './Header';
import DATA from './data/data.json'
import GlobalFilter from './GlobalFilter';
import TextFilter from './TextFilter';

const App = () => {

  const data = useMemo(
    () => DATA,
    []
  )

  const columns = useMemo(
    () => COLUMNS,
    []
  )

  const defaultColumn = useMemo(() => {
    return {
      Filter: TextFilter
    }
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, 
                  data ,
                  defaultColumn,
    //disableFilters:true
  },
    useGlobalFilter,
    useFilters);

  const {globalFilter} = state


  return (
    <div className="container">
      <div className="status-and-filter">
        <div>Filtered {rows.length} out of {preGlobalFilteredRows.length}</div>
        <div className="global-filter"><GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/></div>
      </div>
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} 
          className="header-row">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="header-cell">
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter'):null}</div>
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
                  <td {...cell.getCellProps()}
                    className="body-cell" >
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
