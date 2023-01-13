import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'condacs'

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.ACCESS_TOKEN_PRISMIC
})