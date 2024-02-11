import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  // >=======|| field data set state ||=========
  const [task, setTask] = useState({
    model: {
      name: "",
      status: "",
    },
    lists: [],
    status: [],
  });

  //   >=============|| button handle click  for active and all and completed button ||===========
  const handleClick = (val) => {
    setShow(val);
  };

  //   ===========>||form submit handler  ||===============
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (!task.model.name.length) {
      alert("plz enter fill up the field ");

      return;
    }
    setTask((prev) => ({
      ...prev,
      lists: [...prev.lists, prev.model],
      status: [...prev.status, prev.model.status],
      model: {
        name: "",
        status: "",
      },
    }));
  };

  //   ==============|| onChange handler ||===============
  const onChangeHandler = (e) => {
    setTask((prev) => ({
      ...prev,
      model: { ...prev.model, [e.target.name]: e.target.value },
    }));
  };

  //=================||  Filter and sort the task list ||=====================
  const filteredAndSortedTasks = () => {
    return task.lists
      .filter((item) => {
        if (show === "all") return true;
        if (show === "active") return item.status.toLowerCase() === "active";
        if (show === "completed")
          return item.status.toLowerCase() === "completed";
        return false;
      })
      .sort((a, b) => {
        const statusPriority = { active: 1, completed: 2 };
        const statusA = statusPriority[a.status.toLowerCase()] || 3;
        const statusB = statusPriority[b.status.toLowerCase()] || 3;
        return statusA - statusB;
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmitData}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                onChange={onChangeHandler}
                className="form-control"
                name="name"
                placeholder="Name"
                value={task.model.name}
              />
            </div>
            <div className="col-auto">
              <select
                onChange={onChangeHandler}
                className="form-select"
                value={task.model.status}
                name="status"
                aria-label="Default select example"
              >
                <option value="" disabled>
                  Select the status
                </option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="text-capitalize">
              {filteredAndSortedTasks().map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
