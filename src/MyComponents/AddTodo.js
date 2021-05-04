import React from "react";

export const AddTodo = (props) => {
    const[title,setTitle] = userState("");
    const[desc,setDesc] = useState(initialState)
    const submit =()=>{

    }
    return (
        <div className="container">
            <h3>Add A Todo</h3>
            <form onSubmit={sbumit}>
                <div class="mb-3">
                    <label for="title" class="form-label">
                        Todo Title</label>
                    <input
                        type="text"
                        class="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                    />

                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">
                        Todo Description
          </label>
                    <input
                        type="text"
                        class="form-control"
                        id="desc"
                    />
                </div>
                
                <button type="submit" class="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
     