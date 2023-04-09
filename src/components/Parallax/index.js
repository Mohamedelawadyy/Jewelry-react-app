import "./index.css";

function Parallax(props) {
  return (
    <>
      <div className="container-parallax">
        <div className="parallax">
          <div className="shape">
            <a href="index.html">
              <img src={props.src} alt="parallax" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Parallax;
