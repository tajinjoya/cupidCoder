import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { BounceLoader } from 'react-spinners';
// Another way to import
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`

    margin:60% 22%;

    border-color: red;
`;
 
class Sppiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <BounceLoader
          css={override}
          sizeUnit={"px"}
          size={220}
          color={'#ff4545'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Sppiner