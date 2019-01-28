import React, {Component} from 'react';

class Life extends Component {
   constructor(props) {
      super(props);

      this.state = {
         timese: 0
      }
   }

   render() {
      let {timese} = this.state;
      return <div>
         <p>Life~~~</p>
         <button onClick={() => {
            timese = timese + 1;

            this.setState({
               timese: timese
            });
         }}>click me hardly</button>
         <p>丢你老母{this.state.timese}次</p>
      </div>
   }
};

export default Life;