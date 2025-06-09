/**
 * Renders the provided child elements without modification.
 *
 * @param children - The React nodes to render.
 * @returns The {@link children} prop as-is.
 */
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
