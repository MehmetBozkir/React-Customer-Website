import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Elektrik",
        2300,
        "Tadilat",
        2300,
        "Tesisat",
        2300,
        "Boyacı",
        2300,
        "Marangoz",
        2300,
        "Dekorasyon",
        2300,
        "Alçı",
        2300,
      ]}
      speed={30}
      repeat={Infinity}
    />
  );
}

export default Animation;
