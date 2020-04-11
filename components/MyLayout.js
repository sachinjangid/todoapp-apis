import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = Props => {
  return () => (
      <div style={layoutStyle}>
        {/* <Header />  */}
        <Props />
      </div>
  );
};

export default withLayout;