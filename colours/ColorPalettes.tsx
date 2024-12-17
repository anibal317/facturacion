import React from 'react'
import styles from './ColorPalettes.module.css'

type Color = {
  hex: string
  name: string
}

type Palette = {
  name: string
  colors: Color[]
}

const palettes: Palette[] = [
  {
    name: "Paleta Serena",
    colors: [
      { hex: "#E3F2FD", name: "Azul Cielo" },
      { hex: "#BBDEFB", name: "Azul Bruma" },
      { hex: "#90CAF9", name: "Azul Claro" },
      { hex: "#64B5F6", name: "Azul Medio" },
      { hex: "#42A5F5", name: "Azul Brillante" },
      { hex: "#2196F3", name: "Azul Principal" },
      { hex: "#1E88E5", name: "Azul Oscuro" },
      { hex: "#1976D2", name: "Azul Profundo" }
    ]
  },
  {
    name: "Paleta Tierra",
    colors: [
      { hex: "#EFEBE9", name: "Beige Claro" },
      { hex: "#D7CCC8", name: "Beige Medio" },
      { hex: "#BCAAA4", name: "Marrón Claro" },
      { hex: "#A1887F", name: "Marrón Medio" },
      { hex: "#8D6E63", name: "Marrón" },
      { hex: "#795548", name: "Marrón Oscuro" },
      { hex: "#6D4C41", name: "Marrón Profundo" },
      { hex: "#5D4037", name: "Marrón Muy Oscuro" }
    ]
  },
  {
    name: "Paleta Vibrante",
    colors: [
      { hex: "#F44336", name: "Rojo" },
      { hex: "#E91E63", name: "Rosa" },
      { hex: "#9C27B0", name: "Púrpura" },
      { hex: "#673AB7", name: "Violeta Profundo" },
      { hex: "#3F51B5", name: "Índigo" },
      { hex: "#2196F3", name: "Azul" },
      { hex: "#03A9F4", name: "Azul Claro" },
      { hex: "#00BCD4", name: "Cian" }
    ]
  },
  {
    name: "Paleta Pastel",
    colors: [
      { hex: "#FFD3E0", name: "Rosa Pastel" },
      { hex: "#FFF0B5", name: "Amarillo Pastel" },
      { hex: "#D4F0F0", name: "Turquesa Pastel" },
      { hex: "#CCE2CB", name: "Verde Pastel" },
      { hex: "#B6CFB6", name: "Verde Salvia" },
      { hex: "#97C1A9", name: "Verde Menta" },
      { hex: "#FCB9AA", name: "Coral Pastel" },
      { hex: "#FFDBCC", name: "Melocotón Pastel" }
    ]
  },
  {
    name: "Paleta Océano Profundo",
    colors: [
      { hex: "#E1F5FE", name: "Azul Espuma" },
      { hex: "#B3E5FC", name: "Azul Cielo Claro" },
      { hex: "#81D4FA", name: "Azul Celeste" },
      { hex: "#4FC3F7", name: "Azul Agua" },
      { hex: "#29B6F6", name: "Azul Océano Claro" },
      { hex: "#03A9F4", name: "Azul Océano" },
      { hex: "#039BE5", name: "Azul Océano Medio" },
      { hex: "#0288D1", name: "Azul Océano Profundo" }
    ]
  },
  {
    name: "Paleta Azul Noche",
    colors: [
      { hex: "#E8EAF6", name: "Azul Lavanda Claro" },
      { hex: "#C5CAE9", name: "Azul Lavanda" },
      { hex: "#9FA8DA", name: "Azul Acero Claro" },
      { hex: "#7986CB", name: "Azul Acero" },
      { hex: "#5C6BC0", name: "Azul Medianoche Claro" },
      { hex: "#3F51B5", name: "Azul Medianoche" },
      { hex: "#3949AB", name: "Azul Medianoche Oscuro" },
      { hex: "#303F9F", name: "Azul Noche Profundo" }
    ]
  }
]

const ColorPalette: React.FC<{ palette: Palette }> = ({ palette }) => (
  <div className={styles.palette}>
    <h2 className={styles.paletteName}>{palette.name}</h2>
    <div className={styles.colorGrid}>
      {palette.colors.map((color) => (
        <div key={color.hex} className={styles.colorItem}>
          <div 
            className={styles.colorSwatch} 
            style={{ backgroundColor: color.hex }}
          ></div>
          <span className={styles.colorName}>{color.name}</span>
          <span className={styles.colorHex}>{color.hex}</span>
        </div>
      ))}
    </div>
  </div>
)

const ColorPalettes: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Paletas de Colores</h1>
      {palettes.map((palette) => (
        <ColorPalette key={palette.name} palette={palette} />
      ))}
    </div>
  )
}

export default ColorPalettes

