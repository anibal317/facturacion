'use client'
// pages/en-construccion.js
import { useState } from 'react';
import {Contacto} from '@/components/contact/Contacto'
import './en-construccion.css'; // Asegúrate de que la ruta sea correcta

export default function EnConstruccion() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Página en Construcción</h1>
        <p className="message">
          Estamos trabajando arduamente para que esta página esté disponible pronto.
        </p>
        <p className="subMessage">
          ¡Gracias por tu paciencia!
        </p>
        <Contacto />
      </div>
    </div>
  );
}