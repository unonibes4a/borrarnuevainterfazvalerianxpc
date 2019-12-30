// shaven cunt
#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 resolution;

void main(void)
{
  vec2 sp = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
  sp.y = dot(sp,sp);
  float color = 2.0;
  for (int i = 0; i < 82; i++)
  {
    float t = float(i)+sin(time*0.6+float(i));
    color += 0.01/distance(sp,vec2(sp.x,sin(t+sp.x)));
  }
  gl_FragColor = vec4(color * vec3(.1, 0.05, 0.0), 1.0);
}