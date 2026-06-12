import Image from "next/image";

const SUDAN_MAP_PATH =
  "M16.37 20.3L16.21 20.27L16.23 19.57L16.09 19.08L15.5 18.52L15.36 17.49L15.5 16.45L14.96 16.35L14.88 16.66L14.19 16.74L14.47 17.15L14.57 18.01L13.93 18.79L13.36 19.81L12.77 19.96L11.8 19.13L11.36 19.42L11.24 19.83L10.65 20.1L10.61 20.39L9.46 20.39L9.3 20.1L8.47 20.05L8.05 20.3L7.74 20.18L7.14 19.35L6.94 18.96L6.11 19.15L5.8 19.81L5.5 21.08L5.1 21.35L4.75 21.5L4.66 21.43L4.26 21.02L4.18 20.58L4.37 19.99L4.37 19.41L3.7 18.53L3.57 17.92L3.58 17.57L3.16 17.16L3.15 16.33L2.91 15.78L2.5 15.86L2.62 15.34L2.91 14.75L2.78 14.16L3.16 13.73L2.92 13.4L3.23 12.52L3.75 11.47L4.75 11.57L4.69 5.94L4.71 5.34L6.03 5.34L6.03 2.5L10.67 2.5L15.14 2.5L19.72 2.5L20.09 3.89L19.84 4.15L20.01 5.61L20.43 7.31L20.87 7.66L21.5 8.18L20.92 8.99L20.07 9.23L19.7 9.66L19.59 10.61L19.09 12.69L19.22 13.26L19.03 14.48L18.56 15.88L17.87 16.58L17.37 17.67L17.26 18.25L16.71 18.65L16.37 20.13Z";

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
    </svg>
  );
}

export function FingerprintIcon() {
  return (
    <Image
      src="/icons/fingerprint.png"
      alt=""
      width={24}
      height={24}
      className="pillarFingerprintIcon"
    />
  );
}

export function SudanMapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="pillarMapIcon">
      <path d={SUDAN_MAP_PATH} />
    </svg>
  );
}

export const PILLAR_ICONS = [<ShieldIcon key="shield" />, <FingerprintIcon key="fingerprint" />, <SudanMapIcon key="map" />];
