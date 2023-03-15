export {};
export function replaceFillColor(svgString: string, fillColor: string): string {
  const domParser = new DOMParser();
  const svgDoc = domParser.parseFromString(svgString, "image/svg+xml");
  const paths = svgDoc.querySelectorAll("path");

  paths.forEach((path) => {
    path.setAttribute("fill", fillColor);
  });

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svgDoc.documentElement);
}