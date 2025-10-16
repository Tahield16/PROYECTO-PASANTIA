import type { ratings } from "../../types/note";
import styles from "./RatingBar.module.scss";
type RatingsProps = { ratings?: ratings };
export const RatingBar = ({ ratings }: RatingsProps) => {
  if (!ratings || ratings.length<=0) return <></>  
  return (
    <div className={styles.ratingBarContainer}>
      <div className={styles.bar}>
        {ratings?.map((r, i) => (
          <div
            key={i}
            className={`${styles.segment} ${styles[r.title.toLowerCase()]}`}
            style={{ width: `${r.percentage}%` }}
            title={`${r.title}: ${r.percentage}%`}
          ></div>
        ))}
      </div>

      <div className={styles.labels}>
        {ratings?.map((r, i) => (
          <div key={i} className={styles.label}>
            <span
              className={`${styles.dot} ${styles[r.title.toLowerCase()]}`}
            ></span>
            {r.title} — {r.percentage}%
          </div>
        ))}
      </div>
    </div>
  );
};
