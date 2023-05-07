import React from 'react'

export const Option = ({ value, onSelect }) => {
    return (
        <div onClick={() => onSelect()}>
            {value}
        </div>
    )
}
