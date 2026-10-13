import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { Funcionou } from "./Funcionou";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <Composition
        id="Funcionou"
        component={Funcionou}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
