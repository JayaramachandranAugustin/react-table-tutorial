import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const SliderFilter = ({ column }) => {
    
    const { filterValue, setFilter ,preFilteredRows,id} = column
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
          min = Math.min(row.values[id], min)
          max = Math.max(row.values[id], max)
        })
        return [min, max]
      }, [id, preFilteredRows])
    
      
    const [filterRange, setFilterRange] = useState(filterValue)
 
    const debounce = useAsyncDebounce(value=>{
        setFilter(parseFloat(value, 10))
    },1000)

    const handleChange =(event)=>{
        setFilterRange(event.target.value)
        debounce(event.target.value)
    }
      return (
        <>
          <input
            type="range"
            min={min}
            max={max}
            step="0.10"
            value={filterRange || min}
            onChange={handleChange}
          />
            <h3>{isNaN(filterRange) ? 0:parseFloat(filterRange)}</h3>
          <button onClick={() => setFilter(undefined)}>Clear</button>
        </>
      )
}

export default SliderFilter
