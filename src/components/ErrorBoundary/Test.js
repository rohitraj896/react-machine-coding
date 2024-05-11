const Test = () => {
  if (Math.random() >= 0.5) {
    return new Error("Error occured!!");
  }
  return <div>Test</div>;
};

export default Test;
