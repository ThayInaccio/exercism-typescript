export type Planet = "mercury" | "venus" | "earth" |
  "mars" | "jupiter" | "saturn" | "uranus" | "neptune";

export function age(planet: Planet, seconds: number): number {
  const mapPlanet: Record<Planet, number> = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }

  const years = seconds / 31557600;
  return Number((years / mapPlanet[planet]).toFixed(2));
}
