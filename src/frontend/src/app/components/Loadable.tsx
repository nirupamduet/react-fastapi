import { Suspense } from "react";
//  TS(6142): Module './MatxLoading' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import Loading from "./MatxLoading";

const Loadable = (Component: any) => (props: any) => {
  return (

    <Suspense fallback={<Loading />}>

      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
