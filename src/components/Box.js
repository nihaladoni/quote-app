const Box = ({ data }) => {
  if (data) {
    return (
      <>
        <div className="box">
          <p>"{data && data.content}"</p>
        </div>
      </>
    );
  } else {
    return "";
  }
};

export default Box;
