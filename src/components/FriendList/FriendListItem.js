import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friend}>
      {isOnline ? (
        <span className={styles.statuson}>{isOnline}</span>
      ) : (
        <span className={styles.statusoff}>{isOnline}</span>
      )}

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
