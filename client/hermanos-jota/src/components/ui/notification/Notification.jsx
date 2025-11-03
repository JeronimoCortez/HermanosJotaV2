import "./notification.css";

const Notification = ({ notification }) => {
  return (
    <div
      className={`notification-container ${
        notification.status === "succes" ? "succes" : "danger"
      }`}
    >
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;
