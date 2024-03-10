import image from "./cat.jpg";
import bannerStyle from "./banner.module.css";

export default function Banner() {
  return (
    <figure className={bannerStyle.container}>
      <h1>TODO-LIST</h1>
      <img className={bannerStyle.picture} src={image} alt="Картинка" />
    </figure>
  );
}
