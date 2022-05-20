import React from 'react'
import styles from './adminSales.module.css'
import {Link} from 'react-router-dom'

export default function AdminSales(){
    return(
      <Link to="/adminSales">
        <div className={styles.container}>
        <div className={styles.title}>
             <h2>Administrar Ventas</h2>
        </div>
        <div className={styles.body}>
          Registro de ventas. Pago de instructores.
        </div>
        </div>
        </Link>
    )
}