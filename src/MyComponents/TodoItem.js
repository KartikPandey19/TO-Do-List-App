import React from 'react'

export const TodoItem = ({Todo}) => {
    return (
        <div className = "container">
            <h4 className = "text-center my-3">{Todo.title}</h4>
            <p>{Todo.desc}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}
