export function handler() {
  return {
    statusCode: 410,
    body: JSON.stringify({
      message: 'Content previews are unavailable because this site uses local content.',
    }),
  }
}
