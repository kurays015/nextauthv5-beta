import { gitHub } from "../../../actions/action";

export default function Github() {
  return (
    <form action={gitHub}>
      <button>Login with Github</button>
    </form>
  );
}
