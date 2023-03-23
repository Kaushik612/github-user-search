import TopHeader from "./components/TopHeader";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-[3.1rem] py-[2.4rem] bg-[#e9eeff] dark:bg-[#141d2f]">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <TopHeader />
    </main>
  );
}

export default App;
