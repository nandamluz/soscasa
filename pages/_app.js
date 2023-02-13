import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
      <ToastContainer data-testid="toast" />
      <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
