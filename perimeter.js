export function eqtriangle(side) {
  return 3 * side;
}

export function isostriangle(side, base) {
  return (2 * side) + base;
}

export function scaletriangle(a, b, c) {
  return a + b + c;
}

export function square(side) {
  return 4 * side;
}

export function rectangle(length, width) {
  return 2 * (length + width);
}

export function circle(radius) {
  return 2 * Math.PI * radius;
}

export function parallelogram(sideA, sideB) {
  return 2 * (sideA + sideB);
}

export function trapezoid(a, b, c, d) {
  return a + b + c + d;
}

export function rhombus(side) {
  return 4 * side;
}

export function ellipse(semiMajorAxis, semiMinorAxis) {
  const a = semiMajorAxis;
  const b = semiMinorAxis;
  const h = Math.pow(a - b, 2) / Math.pow(a + b, 2);
  return Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
}

export function regularPolygon(sides, length) {
  return sides * length;
}

export function sector(radius, angleInDegrees) {
  const arcLength = (2 * Math.PI * radius * angleInDegrees) / 360;
  return arcLength + (2 * radius);
}

export function segment(radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  const chordLength = 2 * radius * Math.sin(angleInRadians / 2);
  const arcLength = (2 * Math.PI * radius * angleInDegrees) / 360;
  return chordLength + arcLength;
}

export function annulus(outerRadius, innerRadius) {
  return (2 * Math.PI * outerRadius) + (2 * Math.PI * innerRadius);
}

export function kite(side1, side2) {
  return 2 * (side1 + side2);
}

export function cyclicQuadrilateral(a, b, c, d) {
  return a + b + c + d;
}

export function regularHexagon(side) {
  return 6 * side;
}

export function regularPentagon(side) {
  return 5 * side;
}

export function regularOctagon(side) {
  return 8 * side;
}

export function regularDecagon(side) {
  return 10 * side;
}

export function rightTriangle(base, height) {
  const hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
  return base + height + hypotenuse;
}
