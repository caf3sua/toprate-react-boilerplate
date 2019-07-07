import React from 'react';
import withSecretToLife from './withSecretToLife'

/* const DisplayTheSecret = props => (
  <>
    <div>
      Title {props.title}.
    </div>
    <div>
      The secret to life is {props.secretToLife}.
    </div>
  </>
); */

@withSecretToLife()
class DisplayTheSecret extends React.Component {
  render() {
    return (
      <>
        <div>
          Title {this.props.title}.
        </div>
        <div>
          The secret to life is {this.props.secretToLife}.
        </div>
      </>
    )
  }
}

// export default withSecretToLife(DisplayTheSecret);
export default DisplayTheSecret;
// export default DisplayTheSecret;