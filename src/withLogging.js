function withLogging(WrappedComponent) {
  return function Logger(props) {
    console.log('Props actuelles:', props);
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;