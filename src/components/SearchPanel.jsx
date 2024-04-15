import React from "react";
import Button from "./Button";
import './SearchPanel.css'

const SearchPanel = ({ setStatus, setSearch }) => {
    const chnageStatusHandle = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className="searchPanel_container">
            <div className="searchPanel_buttons">
                <Button value='all' onClick={(e) => { chnageStatusHandle(e) }}>All</Button>
                <Button value='active' onClick={(e) => { chnageStatusHandle(e) }}>Active</Button>
                <Button value='done' onClick={(e) => { chnageStatusHandle(e) }}>Done</Button>
                <Button value='deleted' onClick={(e) => { chnageStatusHandle(e) }}>Deleted</Button>
            </div>
            <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default SearchPanel