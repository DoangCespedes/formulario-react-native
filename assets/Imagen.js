import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Imagen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={283}
    height={238}
    fill="none"
  >
    <Path fill="url(#a)" d="M0 0h337.991v238H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00046 0 0 .00066 0 -.231)" />
      </Pattern>
      <Image
        id="b"
        width={2160}
        height={3840}
      />
    </Defs>
  </Svg>
)
export default Imagen