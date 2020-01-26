import React from 'react';
import Expandable from '../components/Expandable';

const Specs = ({specs}) => {

  const specsTable = () => {
    return (
      <div className="specs">
        <table>
          <tbody>
            {specs.brand ? <tr>
              <td>Brand</td>
            <td>{specs.brand}</td>
            </tr> : null}
            {specs.weight ? <tr>
              <td>Item Weight</td>
              <td>{specs.weight}</td>
            </tr> : null}
            {specs.dimensions ? <tr>
              <td>Dimensions</td>
              <td>{specs.dimensions}</td>
            </tr> : null}
            {specs.model ? <tr>
              <td>Item Model Number</td>
              <td>{specs.model}</td>
            </tr> : null}
            {specs.colour ? <tr>
              <td>Colour</td>
              <td>{specs.colour}</td>
            </tr> : null}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="App-item-specs">
      <div className="heading">Specifications</div>
      <Expandable element={specsTable()} showInitial={true}/>
    </div>
  );
}

export default Specs;
