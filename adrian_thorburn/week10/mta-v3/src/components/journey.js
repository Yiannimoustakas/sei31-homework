import React from "react"

const mta = {
  nLine:['8th', 'unionSquare', '23rd', '28th', '34th', 'timeSquare'],
  lLine:['8th', '6th', 'unionSquare', '3rd', '1st'],
  sLine:['grandCentral', '33rd', '28th', '23rd', 'unionSquare', 'astorPlace']
};

export default () => (
  <div>
    <h3> Starting Line </h3>
    <select>
      <option>{mta[0]}</option>
      <option>${mta[1]}</option>
      <option>${mta[2]}</option>

    </select>
  </div>
)
