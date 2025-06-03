//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { MatxSuspense } from "app/components";
//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";
import { MatxLayouts } from "./index";

export default function MatxLayout(props: any) {
  const { settings } = useSettings();
  //  TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const Layout = MatxLayouts[settings.activeLayout];

  return (

    <MatxSuspense>

      <Layout {...props} />
    </MatxSuspense>
  );
}
