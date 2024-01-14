import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Clock = () => {
  const [baliTime, setBaliTime] = useState("");

  useEffect(() => {
    // Set zona waktu ke 'Asia/Makassar' yang merupakan zona waktu Bali
    const baliZone = "Asia/Makassar";
    const intervalId = setInterval(() => {
      // Dapatkan waktu sekarang dengan zona waktu Bali
      const now = moment().tz(baliZone).format("h:mm:ss A");
      setBaliTime(now);
    }, 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{baliTime}</p>
    </div>
  );
};

export default Clock;
