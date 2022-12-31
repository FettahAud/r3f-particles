export default function BasicSphereParticles() {
  return (
    <points>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
  );
}
