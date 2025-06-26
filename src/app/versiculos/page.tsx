import VersiculosWidget from "./components/VersiculosWidget";
import type { Viewport } from 'next'
export { metadata } from "./metadata";
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function Page() {
  return <VersiculosWidget />;
}
