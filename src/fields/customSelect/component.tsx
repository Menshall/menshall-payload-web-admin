'use client'

import * as React from 'react'
import { useField } from '@payloadcms/ui/forms/useField'
import { Select } from '@payloadcms/ui'
import { Page } from '../../../payload-types'
import { Option, PaginatedDocs } from 'payload'

export const CustomSelectComponent: React.FC<{
  path: string
  pages: PaginatedDocs<Page>
}> = ({ path, pages }) => {
  const { value, setValue } = useField<Option>({ path })

  const data = pages.docs.map((page: Page) => ({
    label: page.title,
    value: page.slug === 'home' ? '/' : page.slug,
  }))

  return (
    <Select
      // label="Select Page"
      // path={path}
      // name={path}
      options={data}
      // // value={value}
      onChange={setValue}
    />
  )
}
