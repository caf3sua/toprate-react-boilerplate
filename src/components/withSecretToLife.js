import React from 'react';

export default function withSecretToLife(...params){
  // do something with params
  return function HOCFactory(WrappedComponent) {
    return class HOC extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            secretToLife={42}
          />
        );
      }
    }
  }
}

// export default HOCFactoryFactory;