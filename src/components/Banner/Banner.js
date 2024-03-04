import image from "./cat.jpg";
import bannerStyle from "./banner.module.css";

export default function Banner() {
  return (
    <figure className={bannerStyle.container}>
      <img className={bannerStyle.picture} src={image} alt="Картинка" />
      <figcaption className={bannerStyle.caption}>Текст</figcaption>
    </figure>
  );
}
