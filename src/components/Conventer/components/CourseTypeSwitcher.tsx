import styles from "../Conventer.module.scss";
import classNames from "classnames";
import { CourseType } from "..";

interface CourseTypeSwitcherProps {
  selectedCourse: CourseType;
  onChange: (course: CourseType) => void;
}

const COURSE_TYPES: CourseType[] = ["Лутчий курс", "Фиксированный курс"];

const CourseTypeSwitcher: React.FC<CourseTypeSwitcherProps> = ({
  selectedCourse,
  onChange,
}) => {
  return (
    <div className={styles.courseType}>
      {COURSE_TYPES.map((course) => (
        <div
          key={course}
          className={classNames(styles.courseTypeItem, {
            [styles.selected]: selectedCourse === course,
          })}
          onClick={() => onChange(course)}
        >
          {course}
        </div>
      ))}
    </div>
  );
};

export default CourseTypeSwitcher;
