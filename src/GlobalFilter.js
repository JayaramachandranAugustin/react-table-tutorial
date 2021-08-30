import React from 'react'

const GlobalFilter = ({filter,setFilter}) => {
    const changeHandle =(event)=>{
        setFilter(event.target.value)
    }

    return (
        <span>
            <input className="global-filter-input" value={filter || ''} placeholder="Search " onChange={changeHandle}/>
        </span>
    )
}

export default GlobalFilter
