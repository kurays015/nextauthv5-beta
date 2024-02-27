import Google from "../components/Google";
import Github from "../components/Github";
// import { credentials } from "../../../actions/action";

export default function Signin() {
  return (
    <div>
      <form>
        <label>username</label>
        <input
          type="text"
          name="username"
          className="bg-slate-700 text-white"
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          className="bg-slate-700 text-white"
        />
        <button type="submit">Login</button>
      </form>
      <Google />
      <Github />
    </div>
  );
}
