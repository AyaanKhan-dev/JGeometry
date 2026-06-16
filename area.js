export function eqtriangle(side) {
  return (Math.sqrt(3) / 4) * Math.pow(side, 2);
}

export function isostriangle(side, base) {
  return (base / 4) * Math.sqrt(4 * Math.pow(side, 2) - Math.pow(base, 2));
}

export function scaletriangle(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export function square(side) {
  return Math.pow(side, 2);
}

export function rectangle(length, width) {
  return length * width;
}

export function circle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

export function parallelogram(base, height) {
  return base * height;
}

export function trapezoid(base1, base2, height) {
  return ((base1 + base2) / 2) * height;
}

export function rhombus(diagonal1, diagonal2) {
  return (diagonal1 * diagonal2) / 2;
}

export function ellipse(semiMajorAxis, semiMinorAxis) {
  return Math.PI * semiMajorAxis * semiMinorAxis;
}

export function regularPolygon(sides, length) {
  return (sides * Math.pow(length, 2)) / (4 * Math.tan(Math.PI / sides));
}

export function sector(radius, angleInDegrees) {
  return (Math.PI * Math.pow(radius, 2) * angleInDegrees) / 360;
}

export function segment(radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return (Math.pow(radius, 2) / 2) * (angleInRadians - Math.sin(angleInRadians));
}

export function annulus(outerRadius, innerRadius) {
  return Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2));
}

export function kite(diagonal1, diagonal2) {
  return (diagonal1 * diagonal2) / 2;
}

export function cyclicQuadrilateral(a, b, c, d) {
  const s = (a + b + c + d) / 2;
  return Math.sqrt((s - a) * (s - b) * (s - c) * (s - d));
}

export function archimedeanSpiralSector(a, b, theta1InRadians, theta2InRadians) {
  const f = (theta) => (Math.pow(a + b * theta, 3)) / (3 * b);
  return f(theta2InRadians) - f(theta1InRadians);
}

export function ellipseSector(semiMajorAxis, semiMinorAxis, angleInDegrees) {
  return (angleInDegrees / 360) * Math.PI * semiMajorAxis * semiMinorAxis;
}

export function regularHexagon(side) {
  return ((3 * Math.sqrt(3)) / 2) * Math.pow(side, 2);
}

export function regularPentagon(side) {
  return (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2);
}

export function regularOctagon(side) {
  return 2 * (1 + Math.sqrt(2)) * Math.pow(side, 2);
}

export function regularDecagon(side) {
  return (5 / 2) * Math.sqrt(5 + 2 * Math.sqrt(5)) * Math.pow(side, 2);
}

export function rightTriangle(base, height) {
  return 0.5 * base * height;
}

export function parabolaSegment(base, height) {
  return (4 / 3) * base * height;
}