import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({filter,setFilter}) => {

    const [filterText, setFilterText] = useState(filter)
 
    const debounce = useAsyncDebounce(value=>{
        setFilter(value)
    },1000)

    const handleChange =(event)=>{
        setFilterText(event.target.value)
        debounce(event.target.value)
    }

    return (
        <span>
            <input className="global-filter-input" value={filterText || ''} placeholder="Search " onChange={handleChange}/>
        </span>
    )
}

export default GlobalFilter
