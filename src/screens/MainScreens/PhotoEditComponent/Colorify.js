import { GLSL, Shaders, Node } from "gl-react";
import React from "react";
const interpolation = "linear";
const shaders = Shaders.create({
  colorify: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D children, colorScale;
    uniform float contrast,saturation,brightness;
    const vec3 L = vec3(0.2125, 0.7154, 0.0721);
    float greyscale (vec3 c) { return 0.2125 * c.r + 0.7154 * c.g + 0.0721 * c.b; }
    void main() {
      vec4 original = texture2D(children, uv);
      vec3 brt = original.rgb * brightness;
      vec4 newcolor = texture2D(colorScale, vec2(greyscale(original.rgb), 0.5));
      vec3 saturation = mix(vec3(0.5),mix(vec3(dot(brt, L)), brt, saturation),contrast);
      gl_FragColor = vec4(saturation * newcolor.rgb, original.a * newcolor.a);
    }
   `,
  },
});

const Colorify = ({
  children,
  colorScale,
  interpolation,
  contrast,
  saturation,
  brightness,
}) => (
  <Node
    shader={shaders.colorify}
    uniformsOptions={{ colorScale: { interpolation } }}
    uniforms={{
      colorScale,
      children,
      contrast: contrast,
      saturation: saturation,
      brightness: brightness,
    }}
  />
);

export default Colorify;
