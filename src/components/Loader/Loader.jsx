import React, { Component } from 'react';

import { Hourglass } from 'react-loader-spinner';

import './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div>
        <Hourglass
          height={80}
          width={80}
          colors={['#000', '#0ff']}
          ariaLabel="hourglass-loading"
          visible={true}
          wrapperClass=""
          wrapperStyle={{}}
        />
      </div>
    );
  }
}

export default Loader;
