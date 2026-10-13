import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Funcionou: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrada = spring({ frame, fps, config: { damping: 12 } });
  const translateY = interpolate(entrada, [0, 1], [400, 0]);
  const scale = interpolate(entrada, [0, 1], [0.6, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0f14",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 160,
          fontWeight: 800,
          color: "white",
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      >
        Funcionou!
      </div>
    </AbsoluteFill>
  );
};
