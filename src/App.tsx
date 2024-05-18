import { atom } from "jotai";

import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

import { t_board } from "./utils/zod";

export const boardAtom = atom<t_board>({
  rows: 10,
  cols: 10,
});

function App() {
  // const [count, setCount] = useState(0)
  // const changeColorOnClick = async () => {
  //   const [tab] = await chrome.tabs.query({
  //     active: true,
  //     currentWindow: true,
  //   });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id! },
  //     func: () => {
  //       document.body.style.backgroundColor = "green";
  //     },
  //   });
  // };
  return (
    <main className="w-full flex flex-col items-center gap-2 p-2 min-w-96">
      <Header />
      <Board />
    </main>
  );
}

export default App;
