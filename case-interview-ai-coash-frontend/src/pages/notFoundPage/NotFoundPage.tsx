import style from "./NotFoundPage.module.css";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className={style.conatiner}>
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
}
export default NotFoundPage;
