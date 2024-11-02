export const populatePublishedAt = ({ data, req, operation }: any) => {
  if (operation === 'create' || operation === 'update') {
    if (req.body && !req.body.publishedAt) {
      const now = new Date()
      return {
        ...data,
        publishedAt: now,
      }
    }
  }

  return data
}
