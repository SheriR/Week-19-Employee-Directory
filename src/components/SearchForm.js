import React from "react";

function SearchForm(props) {
  return (
    <div className="d-flex justify-content-center mx-auto">
      <form>
        <input
          placeholder="Search for an employee"
          name="search"
          type="text"
          className="form-control-lg search-font mx-auto"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );
}

//     <div class="input-group mb-3">
//       <div class="input-group-prepend">
//         <span class="input-group-text" id="basic-addon1">
//           Search
//         </span>
//       </div>
//       <input
//         onChange={(event) => props.startSort(event)}
//         name="search"
//         type="text"
//         class="form-control"
//         placeholder="Search for an employee"
//         aria-label="Username"
//         aria-describedby="basic-addon1"
//       />
//     </div>
//   );
// }

export default SearchForm;
