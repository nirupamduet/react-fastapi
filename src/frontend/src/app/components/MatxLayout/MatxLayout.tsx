import { MatxSuspense } from "app/components";
import useSettings from "app/hooks/useSettings";
import { MatxLayouts } from "./index";

export default function MatxLayout(props: any) {
  const { settings } = useSettings();
  // @ts-expect-error TS(2551): Property 'layout2' does not exist on type '{ layou... Remove this comment to see the full error message
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
}
