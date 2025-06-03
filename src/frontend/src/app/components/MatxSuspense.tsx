import { Suspense } from "react";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { MatxLoading } from "app/components";

export default function MatxSuspense({
  children
}: any) {

  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
}
