import { useState, useEffect } from "react";

type DeviceOrientation = {
  x: number | null | undefined;
  y: number | null | undefined;
  z: number | null | undefined;
};

type State = "granted" | "denied";

const OrientationInfo = (): React.ReactElement => {
  const [permission, setPermission] = useState<boolean>(false);
  const [deviceOrientation, setDeviceOrientation] = useState<DeviceOrientation>(
    {
      x: null,
      y: null,
      z: null,
    }
  );

  useEffect(() => {
    if (!permission) return;
    window.addEventListener("devicemotion", handleDeviceMotion);
    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, [permission]);

  const handleDeviceMotion = (event: DeviceMotionEvent) => {
    setDeviceOrientation({
      x: event.acceleration?.x,
      y: event.acceleration?.y,
      z: event.acceleration?.z,
    });
  };
  const handlePermission = () => {
    Notification.requestPermission();
    // if (typeof (DeviceMotionEvent as any).requestPermission === "function") {
    //   // iOS 13+
    //   (DeviceMotionEvent as any)
    //     .requestPermission()
    //     .then((state: State) => {
    //       if (state === "granted") {
    //         setPermission(true);
    //       }
    //     })
    //     .catch(console.error);
    // } else {
    //   // non iOS 13+
    //   setPermission(true);
    // }
  };
  return (
    <>
      {permission ? (
        <>
          <p>X is {(deviceOrientation.x as number)?.toFixed(2)}</p>
          <p>Y is {(deviceOrientation.y as number)?.toFixed(2)}</p>
          <p>Z is {(deviceOrientation.z as number)?.toFixed(2)}</p>
        </>
      ) : (
        <div>
          <h2>Device Orientation</h2>
          <button onClick={handlePermission}>GIVE PERMISSION</button>
        </div>
      )}
    </>
  );
};

export default OrientationInfo;
