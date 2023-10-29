const Quote = () => {
  // prettier-ignore
  const fontStyle = { fontFamily: "Kanit", };

  const textTopStyle = "text-white text-7xl text-center md:text-6xl";
  const textBottomStyle =
    "z-50 text-white text-7xl mx-auto w-fit  whitespace-nowrap lg:text-7xl min-w-max";

  return (
    <div className="m-auto">
      <h1 className={textTopStyle} style={fontStyle}>
        HACEMOS QUE <br />
        TENGAS
      </h1>

      <h1 className={textBottomStyle} style={fontStyle}>
        UN MEJOR VIAJE
      </h1>
    </div>
  );
};

export default Quote;
