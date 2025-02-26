import React from 'react'
import Link from 'next/link'

const UrlCheck = ({ children, link }) => {
  if (link) {
    if (link.slug) {
      return (
        <Link href={`/news/updates/${link.slug}`} passHref>
          {children}
        </Link>
      )
    }
    if (link.url) {
      return (
        <a target='_blank' rel='noreferrer' href={link.url}>
          {children}
        </a>
      )
    }
  }

  return null
}

export default UrlCheck
