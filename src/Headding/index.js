import "./index.css";

function Heading(props) {
  return (
    <>
      <h2 className="main-heading h1">{props.title}</h2>
      <span className="heading-icon">
        <i class="fa fa-diamond" aria-hidden="true"></i>
      </span>
    </>
  );
}
export default Heading;
