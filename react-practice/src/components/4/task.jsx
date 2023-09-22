import styles from "./task.module.css";

console.log(styles.box);

const Task = () => {
  return (
    <div className={styles.box}>
      <p className={styles.myP}>
        Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha
        forage.
      </p>
      <button className={styles.myButton}>Button</button>
    </div>
  );
};
export default Task;
