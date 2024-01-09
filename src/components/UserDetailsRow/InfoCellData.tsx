import styles from './UserDetailsRow.module.css';

type InfoCellDataProps = {
  title: string;
  message: string;
  width?: number;
};

export default function InfoCellData({
  title,
  message,
  width,
}: InfoCellDataProps) {
  return (
    <div style={{ width: `${width}%` }}>
      <span className={styles.cellMessage}>{message}</span>
      <span className={styles.cellTitle}>{title}</span>
    </div>
  );
}
