export function collectIdsAndDocs(doc) {
  return { id: doc.id, ...doc.data() };
}

export function safeDate(date) {
  if (typeof date.createdAt === undefined) {
    return date;
  }
  return date.createdAt;
}