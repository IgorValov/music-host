import React from "react";

const Year = () => {
  return (
    <div className="modal__year-radio">
      <label>
        <input type="radio" name="color" value="new" />
        <span className="text modal__year-text custom-radio">Более новые</span>
      </label>
      <label>
        <input type="radio" name="color" value="new" />
        <span className="text modal__year-text custom-radio">Более новые</span>
      </label>
    </div>
  );
};
export default Year;
