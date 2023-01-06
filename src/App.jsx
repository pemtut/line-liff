import liff from "@line/liff";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [hiddingAccessToken, setHiddingAccessToken] = useState(true);
  const [hiddingIDToken, setHiddingIDToken] = useState(true);

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
    <div className="App">
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
        <div>
          <div>สวัสดีครับ คุณ {name}</div>
          <div>
            ต้องการดู Access Token{" "}
            <button
              onClick={async () => {
                setHiddingAccessToken(!hiddingAccessToken);
              }}
            >
              Click
            </button>
          </div>
          {!hiddingAccessToken && (
            <div style={{ display: "flex" }}>
              <textarea style={{ flex: "1 1 auto" }}>
                {liff.getAccessToken()}
              </textarea>
            </div>
          )}
          <div>
            ต้องการดู ID Token{" "}
            <button
              onClick={async () => {
                setHiddingIDToken(!hiddingIDToken);
              }}
            >
              Click
            </button>
          </div>
          {!hiddingIDToken && (
            <div style={{ display: "flex" }}>
              <textarea style={{ flex: "1 1 auto" }}>
                {liff.getIDToken()}
              </textarea>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
