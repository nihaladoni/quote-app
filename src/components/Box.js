import Skeleton from "react-loading-skeleton";
const Box = ({ data, loading }) => {
  return (
    <>
      <div className="box">
        <p>
          {(loading && <Skeleton height={30} count={4} />) ||
            (data && data.content)}
        </p>
      </div>
    </>
  );
};

export default Box;
