import React from 'react'

const TextFilter = ({ column }) => {
    const { filterValue, setFilter ,preFilteredRows} = column

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <span>
            <input className="text-filter-input" 
                   value={filterValue || ''} 
                   placeholder={`Search ${preFilteredRows.length} rows`}
                   onChange={handleChange} />
        </span>
    )
}

export default TextFilter
