#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PI 3.14159265359

uniform sampler2D tex;
uniform float u_time;
uniform float sink;
uniform vec2 u_resolution;
varying vec2 vTexCoord;

float map(float value, float min1, float max1, float min2, float max2) {
    // Convert the current value to a percentage
    // 0% - min1, 100% - max1
    float perc = (value - min1) / (max1 - min1);

    // Do the same operation backwards with min2 and max2
    return perc * (max2 - min2) + min2;
}

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

float circle(in vec2 _st, in vec2 pos, in float _radius){
    vec2 dist = _st-pos;
	return 1.-smoothstep(_radius-(_radius*0.05),
                         _radius+(_radius*0.05),
                         dot(dist,dist)*4.0);
}


// vec3 invert(sampler2D texture) {
//     vec4 col = texture2D(texture, vertTexCoord.st);

//     float x, y, z;
//     x = step(0.5, fract(vertTexCoord.x*10.5));
//     y = step(0.5, fract(vertTexCoord.y*0.5));
//     vec2 xy = step(0.5, fract(vec2(vertTexCoord.x*10.5, vertTexCoord.y)));

//     // option 3 very simple  
//     vec3 color = abs(x*vec3(1.0) - col.xyz);
//     return color;
// }


float smoothfract(float a)
{
    return fract(a)*pow((cos(fract(a)*acos(-1.)/2.)),.4);
}


float quadraticBezier (float x, float a, float b){
  // adapted from BEZMATH.PS (1993)
  // by Don Lancaster, SYNERGETICS Inc. 
  // http://www.tinaja.com/text/bezmath.html

  float epsilon = 0.00001;
  a = max(0., min(1., a)); 
  b = max(0., min(1., b)); 
  if (a == 0.5){
    a += epsilon;
  }
  
  // solve t from x (an inverse operation)
  float om2a = 1. - 2.*a;
  float t = (sqrt(a*a + om2a*x) - a)/om2a;
  float y = (1.-2.*b)*(t*t) + (2.*b)*t;
  return y;
}

// Helper functions:
float slopeFromT (float t, float A, float B, float C){
  float dtdx = 1.0/(3.0*A*t*t + 2.0*B*t + C); 
  return dtdx;
}

float xFromT (float t, float A, float B, float C, float D){
  float x = A*(t*t*t) + B*(t*t) + C*t + D;
  return x;
}

float yFromT (float t, float E, float F, float G, float H){
  float y = E*(t*t*t) + F*(t*t) + G*t + H;
  return y;
}

float cubicBezier (float x, float a, float b, float c, float d){

  float y0a = 0.00; // initial y
  float x0a = 0.00; // initial x 
  float y1a = b;    // 1st influence y   
  float x1a = a;    // 1st influence x 
  float y2a = d;    // 2nd influence y
  float x2a = c;    // 2nd influence x
  float y3a = 1.00; // final y 
  float x3a = 1.00; // final x 

  float A =   x3a - 3.*x2a + 3.*x1a - x0a;
  float B = 3.*x2a - 6.*x1a + 3.*x0a;
  float C = 3.*x1a - 3.*x0a;   
  float D =   x0a;

  float E =   y3a - 3.*y2a + 3.*y1a - y0a;    
  float F = 3.*y2a - 6.*y1a + 3.*y0a;             
  float G = 3.*y1a - 3.*y0a;             
  float H =   y0a;

  // Solve for t given x (using Newton-Raphelson), then solve for y given t.
  // Assume for the first guess that t = x.
  float currentt = x;
  const int nRefinementIterations = 5;
  for (int i=0; i < nRefinementIterations; i++){
    float currentx = xFromT (currentt, A,B,C,D); 
    float currentslope = slopeFromT (currentt, A,B,C);
    currentt -= (currentx - x)*(currentslope);
    currentt = clamp(currentt, 0.,1.);
  } 

  float y = yFromT (currentt,  E,F,G,H);
  return y;
}


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec2 center = vec2(0.5);
    float n = noise(st.x*4.0+u_time*3.0);
    float c = noise(st.y*20.0);

    float n_map_x = map(n, 0., 1., -5.0, 5.0);
    float n_map_y = map(n, 0., 1., -10.0, 10.0);
    
    float wave1 = smoothfract(st.x*n_map_x)*1.5;
    float wave2 = smoothfract(st.y*n_map_y)*1.5;
    float wave = mix(wave1, wave2, 0.5);
    float wt = noise(st.y+u_time); 
    
 
    float bubbles = circle(st, vec2(0.5, fract(u_time/10.0)), 0.03);
    vec2 water = vec2(0.0, (n * smoothfract(st.y+u_time)));
    vec2 word_noise = vec2(vTexCoord.x, 1.0-vTexCoord.y) + water - vec2(0.0, 0.15);
    vec4 word = texture2D(tex, word_noise); 
    //float circle = circle(st, vec2(n_map, n_map), 0.05, n);

    n = 1.0-n/2.0;
    float t = 1.0-smoothstep(n-0.01, n+0.01, st.y)*wave - wave; // + (1.0-c)*c1;
    float blink = 1.0-smoothfract(t*u_time);
    float final = t;
    gl_FragColor = vec4( vec3(t, t, 1.0), 1.0) + word;
    //gl_FragColor = vec4(vec3(circle), 1.0);
    //gl_FragColor = word;
    //gl_FragColor = vec4(vec3(c), 1.0);
}

