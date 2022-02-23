import React from "react";
import "./SearchBar.css";
function SearchBar({placeholder , data}){
   

     return(
        <div class="input-group">
       <div id="search-autocomplete" class="form-outline">
    <input type="search" id="form1" placeholder="Text here for search...." class="form-control" /> 
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
     )

}
export default SearchBar;