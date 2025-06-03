//  TS(2307): Cannot find module 'app/components/Typography' or ... Remove this comment to see the full error message
import { Small } from "app/components/Typography";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { MatxProgressBar, SimpleCard } from "app/components";

export default function Campaigns() {
  return (

    <div>

      <SimpleCard title="Campaigns">

        <Small color="text.secondary">Today</Small>

        <MatxProgressBar value={75} color="primary" text="Google (102k)" />

        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />

        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />


        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>

        <MatxProgressBar value={75} color="primary" text="Google (102k)" />

        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />

        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />


        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>

        <MatxProgressBar value={75} color="primary" text="Google (102k)" />

        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />

        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />
      </SimpleCard>
    </div>
  );
}
