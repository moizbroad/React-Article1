import React from "react";

const Message = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>This is your popup message!</p>
            </div>
          </div>
        )}
        {/* Your main application content goes here */}
      </div>
    </>
  );
};

export default Message;
