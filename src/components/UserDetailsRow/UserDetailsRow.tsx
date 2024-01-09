import PhotoCellData from './PhotoCellData';
import InfoCellData from './InfoCellData';
import styles from './UserDetailsRow.module.css';

type UserDetailsRowProps = {
  key: string | number;
  imageUrl: string;
  name: string;
  email: string;
  birthDate: string;
  address: string;
  phone: string;
  password: string;
};

export default function UserDetailsRow({
  key,
  imageUrl,
  name,
  email,
  birthDate,
  address,
  phone,
  password,
}: UserDetailsRowProps) {
  return (
    <div key={key} className={styles.userDetailsWrapper}>
      <div className={styles.namePhotoSection}>
        <PhotoCellData imageUrl={imageUrl} />
        <InfoCellData title={email} message={name} />
      </div>
      <div className={styles.bottomDataSection}>
        <div className={styles.birthAddressSection}>
          <InfoCellData title='Birth Date' message={birthDate} />
          <InfoCellData title='Address' message={address} />
        </div>
        <div className={styles.phonePasswordSection}>
          <InfoCellData title='Phone number' message={phone} />
          <InfoCellData title='Password' message={password} />
        </div>
      </div>
    </div>
  );
}
