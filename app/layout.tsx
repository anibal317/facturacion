import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bolivar Software | Soluciones tecnológicas para tu negocio",
  description: "Bolivar Software ofrece servicios de desarrollo de software personalizado, optimización de procesos y soluciones tecnológicas innovadoras para empresas de todos los tamaños.",
  keywords: "software, desarrollo, soluciones tecnológicas, optimización empresarial, desarrollo de aplicaciones",
  openGraph: {
    title: "Bolivar Software | Innovación en Soluciones Tecnológicas",
    description: "Servicios personalizados de desarrollo de software para optimizar y transformar tu negocio.",
    url: "https://bolivarsoftware.com/",
    siteName: "Bolivar Software",
    images: [
      {
        url: "/path/to/your-image.jpg", // Asegúrate de usar una imagen atractiva y optimizada
        width: 800,
        height: 600,
        alt: "Logo de Bolivar Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TuCuentaTwitter", // Añade tu cuenta de Twitter
    title: "Bolivar Software",
    description: "Descubre cómo nuestras soluciones tecnológicas pueden potenciar tu negocio.",
    images: ["/path/to/your-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="../favicon.ico" sizes="any" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body className="">{children}</body>
    </html>
  )
}
