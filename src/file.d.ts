declare module "*.svg" {
  // Astro
  type Props = astroHTML.JSX.SVGAttributes;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: ((_props: Props) => any) & ImageMetadata;
  export default Component;

  // React/Preact
  import { FunctionComponent, ComponentProps } from "preact";

  const PreactComponent: FunctionComponent<
    ComponentProps<"svg"> & { title?: string }
  >;

  export { PreactComponent };
}
