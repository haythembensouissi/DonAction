import styles from "./Settings.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Settings() {

const notify = () => {
  toast.success('success', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    //transition: Bounce,
    });
};

  return (
    <div className={styles.settings}>
      <div className={styles.settingsWrapper}>
        <div className={styles.settingsTitle}>
          <span className={styles.settingsTitleUpdate}>Update Your Account</span>
          <span className={styles.settingsTitleDelete}>Delete Account</span>
        </div>
        <form className={styles.settingsForm}>
          <label>Profile Picture</label>
          <div className={styles.settingsPP}>
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className={styles.settingsPPIcon}></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className={styles.settingsPPInput}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
            <button className={styles.settingsSubmitButton} onClick={notify}>Update!</button>
            <ToastContainer
             autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition="Bounce"
            />
        </form>
      </div>
    </div>
  );
}