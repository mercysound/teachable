import Form from "./Form";

const Header = () => {
  return (
    <>
    <nav className="d-flex justify-content-around">
      <ul className="d-flex d-inline row-gap-3">
        <li>for ever</li>
        <li>for ever</li>
        <li>for ever</li>
      </ul>
      <Form forInp={"Submit"} forBtn={"Mr, Adeyemi"}/>
    </nav>
    </>
  )
}
export default Header;