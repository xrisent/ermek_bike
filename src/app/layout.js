import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './main.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>BikeFit KG - Ремонт и обслуживание велосипедов в Бишкеке</title>
        <meta name="description" content="Профессиональный ремонт велосипедов в Бишкеке. Настройка, обслуживание, продажа запчастей. BikeFit - ваш надежный велосервис в Кыргызстане." />
        <meta name="keywords" content="ремонт, ремонт велосипеда, байкфит, bikefit, бишкек, велосервис, обслуживание велосипедов, веломастерская, настройка велосипеда, запчасти для велосипедов, велоремонт, велосипеды в Бишкеке" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bikefit.kg/" />
        <meta property="og:title" content="BikeFit KG - Ремонт и обслуживание велосипедов в Бишкеке" />
        <meta property="og:description" content="Профессиональный ремонт велосипедов в Бишкеке. Настройка, обслуживание, продажа запчастей." />
        <meta property="og:image" content="https://bikefit.kg/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bikefit.kg/" />
        <meta property="twitter:title" content="BikeFit KG - Ремонт и обслуживание велосипедов в Бишкеке" />
        <meta property="twitter:description" content="Профессиональный ремонт велосипедов в Бишкеке. Настройка, обслуживание, продажа запчастей." />
        <meta property="twitter:image" content="https://bikefit.kg/images/og-image.jpg" />
        
        <link rel="canonical" href="https://bikefit.kg/" />
        
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}