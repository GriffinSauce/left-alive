const Youtube = ({ title, src }) => {
  return (
    <>
      <div className="relative h-0">
        <iframe
          className="top-0 left-0 w-full h-full absolute"
          title={title}
          src={src}
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <style jsx>{`
        div {
          padding-bottom: 56%; /* 16:9 */
        }
      `}</style>
    </>
  );
};
export default Youtube;
