import './globals.css'
import './styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <title>DigiMedia - Creative SEO HTML5 Template</title>

        <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/templatemo-digimedia-v1.css" />
        <link rel="stylesheet" href="/assets/css/templatemo-digimedia-v1.css" />
        <link rel="stylesheet" href="/assets/css/animated.css" />
        <link rel="stylesheet" href="/assets/css/owl.css" />
      </head>
      <body>
        {children}

        {
          //Scripts from template
        }
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/owl-carousel.js"></script>
        <script src="/assets/js/animation.js"></script>
        <script src="/assets/js/imagesloaded.js"></script>
        <script src="/assets/js/custom.js"></script>
      </body>
    </html>
  )
}
