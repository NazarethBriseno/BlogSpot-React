import styles from './Post.module.css';

export default function Post(){
    return (
        <div className={styles.PostContainer}>
        <div className={styles.UserInfoHeader}>
            <img className={styles.UserProfilePic}/>
            <p>Display Name</p>
            <p>@Username</p>
        </div>
            <p className={styles.UserPostText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
            </p>
        </div>
    );
}