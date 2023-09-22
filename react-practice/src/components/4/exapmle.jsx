import "./example.css";

import styles from "./example.module.css";

const Example = () => {
  return (
    <div className="box">
      <p className="myP">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem velit a
        natus tempore provident, neque laudantium ullam nesciunt ipsum, eum
        accusantium ipsam soluta dolores animi aspernatur magni optio, quod
        atque.
      </p>
      <h1 className={`myH1 ${styles.test}`}>Text</h1>
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt=""
        width={150}
        height={150}
      />
    </div>
  );
};

export default Example;
