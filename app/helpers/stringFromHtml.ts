export default function stringFromHtml(html) {
  return html.replace(/<[^>]*>?/gm, '');
}
