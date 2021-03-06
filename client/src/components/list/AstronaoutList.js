import React, { Component } from 'react';

import ListFrame from './ListFrame';
import { base } from '../../base';

class AstronaoutList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    base
      .fetch('astronauts', {
        context: this,
        asArray: true
      })
      .then(data => {
        this.setState(() => {
          return {
            list: data
          };
        });
      });
  }

  handleDeleteAstronaut = id => {
    base
      .update(`astronauts/${id}`, {
        data: { deleted: true }
      })
      .then(() => {
        base
          .fetch('astronauts', {
            context: this,
            asArray: true
          })
          .then(data => {
            this.setState(() => {
              return {
                list: data
              };
            });
          });
      });
  };

  render() {
    return (
      <div className="list-wrapper">
        <ListFrame
          data={this.state.list}
          onhandleDeleteAstronaut={this.handleDeleteAstronaut}
        />
      </div>
    );
  }
}

export default AstronaoutList;
