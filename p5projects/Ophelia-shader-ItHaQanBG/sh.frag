#ifdef GL_ES
precision mediump float;
#endif
  
uniform sampler2D tex;
uniform float u_time;
uniform vec2 u_res;
varying vec2 vTexCoord;

float random(float x) {
    float y = fract(sin(x)*10000.0);
    return y;
}

float noise(float x) {
    float i = floor(x);  // integer
    float f = fract(x);  // fraction
    //float u = f * f * (3.0 - 2.0 * f ); // custom cubic curve
    //u = sin(f) + cos(f) * 2.0;
    //float y = mix(rand(i), rand(i + 1.0), u);
    float y = mix(random(i), random(i + 1.0), smoothstep(0.,1.,f));
    //y = rand(i);
    return y;
}

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}
  
void main() {
  
  vec2 st = gl_FragCoord.st/400.0;
  
  float n = noise(st.xy*3.0);
  
  vec2 coord = vec2(fract(vTexCoord.x-u_time), 1.0-vTexCoord.y) + vec2(n, n);
  vec4 col = texture2D(tex, coord.st);
  
  gl_FragColor = vec4(vec3(n), 1.0);
  gl_FragColor = vec4(vec3(1.0,0.3,0.3), 1.0);
  gl_FragColor = col;
}