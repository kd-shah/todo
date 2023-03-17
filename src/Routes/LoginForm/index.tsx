import "./style.scss";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const navigate = useNavigate();

  function onSubmitEventHandler() {
    navigate("/todo");
  }

  return (
    <>
      <form onSubmit={onSubmitEventHandler} className="form">
        <div className="fields">
          <label>
            Name
            <input className="input" required />
          </label>
        </div>
        <div className="fields">
          <label>
            E-Mail
            <input type={"email"} className="input" required />
          </label>
        </div>

        <div className="fields">
          <button type="submit" className="mainBt">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
