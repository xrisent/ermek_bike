import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './main.scss'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
