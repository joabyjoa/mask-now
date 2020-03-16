import React from 'react'
import { PageTemplate } from '../components'
import { CurrentLocation } from '../containers'

const ListPage = () => {
  return (
    <PageTemplate>
      <p>List</p>
      <CurrentLocation />
    </PageTemplate>
  )
}

export default ListPage
