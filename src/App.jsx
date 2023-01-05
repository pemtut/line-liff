import liff from "@line/liff";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  let isLoggedIn = false;
  try {
    isLoggedIn = liff.isLoggedIn();
  } catch (e) {
    console.log(e);
  }
  liff.getProfile().then((profile) => {
    setName(profile.displayName);
  });
  console.log(name);
  return (
    <div>
      <h1>Hello !!!</h1>
      {!isLoggedIn ? (
        <div>
          กรุณาทำการ Login !!!{" "}
          <button
            onClick={async () => {
              return liff.login();
            }}
          >
            login
          </button>
        </div>
      ) : (
        <div>สวัสดีครับ คุณ{name}</div>
      )}
    </div>
  );
}

export default App;
