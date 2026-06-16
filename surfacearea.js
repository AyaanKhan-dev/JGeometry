export function cube(side) {
  return 6 * Math.pow(side, 2);
}

export function cuboid(length, width, height) {
  return 2 * (length * width + width * height + height * length);
}

export function cylinder(radius, height) {
  return 2 * Math.PI * radius * (radius + height);
}

export function sphere(radius) {
  return 4 * Math.PI * Math.pow(radius, 2);
}

export function cone(radius, slantHeight) {
  return Math.PI * radius * (radius + slantHeight);
}

export function hemisphere(radius) {
  return 3 * Math.PI * Math.pow(radius, 2);
}

export function ellipsoid(a, b, c) {
  const p = 1.6075;
  const term1 = Math.pow(a * b, p);
  const term2 = Math.pow(a * c, p);
  const term3 = Math.pow(b * c, p);
  return 4 * Math.PI * Math.pow((term1 + term2 + term3) / 3, 1 / p);
}

export function triangularPrism(base, triangleHeight, sideA, sideB, prismHeight) {
  const baseArea = base * triangleHeight;
  const lateralArea = (base + sideA + sideB) * prismHeight;
  return baseArea + lateralArea;
}

export function hexagonalPrism(side, height) {
  const baseArea = 3 * Math.sqrt(3) * Math.pow(side, 2);
  const lateralArea = 6 * side * height;
  return baseArea + lateralArea;
}

export function pentagonalPrism(side, height) {
  const baseArea = 0.5 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2);
  const lateralArea = 5 * side * height;
  return baseArea + lateralArea;
}

export function octagonalPrism(side, height) {
  const baseArea = 4 * (1 + Math.sqrt(2)) * Math.pow(side, 2);
  const lateralArea = 8 * side * height;
  return baseArea + lateralArea;
}

export function torus(majorRadius, minorRadius) {
  return 4 * Math.pow(Math.PI, 2) * majorRadius * minorRadius;
}

export function coneFrustum(radius1, radius2, slantHeight) {
  const lateralArea = Math.PI * (radius1 + radius2) * slantHeight;
  const baseAreas = Math.PI * (Math.pow(radius1, 2) + Math.pow(radius2, 2));
  return lateralArea + baseAreas;
}

export function pyramidFrustum(baseArea1, baseArea2, perimeter1, perimeter2, slantHeight) {
  const lateralArea = 0.5 * (perimeter1 + perimeter2) * slantHeight;
  return baseArea1 + baseArea2 + lateralArea;
}

export function sphericalCap(radius, height) {
  const baseArea = Math.PI * (2 * radius * height - Math.pow(height, 2));
  const curvedArea = 2 * Math.PI * radius * height;
  return baseArea + curvedArea;
}

export function capsule(radius, cylinderHeight) {
  const sphereArea = 4 * Math.PI * Math.pow(radius, 2);
  const cylinderArea = 2 * Math.PI * radius * cylinderHeight;
  return sphereArea + cylinderArea;
}

export function squarePyramid(side, slantHeight) {
  const baseArea = Math.pow(side, 2);
  const lateralArea = 2 * side * slantHeight;
  return baseArea + lateralArea;
}