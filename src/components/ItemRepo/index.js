import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Goulart</h3>
      <p>dio/Leo</p>
      <a href="#">Ver Repositório</a><br />
      <a href="#" className='remover'>Remover</a>
      <hr></hr>

    </ItemContainer>
  )
}
