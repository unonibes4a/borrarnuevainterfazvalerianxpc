#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : disable



uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

float t;
	t = time * 0.60;
    vec2 r = resolution,
    o = gl_FragCoord.xy - r/02.;
    o = vec2(length(o) / r.y - .3, atan(o.y,o.x));    
    vec4 s = 0.08*cos(0.8*vec4(0,1,2,3) + t + o.y + sin(o.y) * cos(t)),
    e = s.yzwx, 
    f = max(o.x-s,e-o.x);

    gl_FragColor = dot(clamp(f*r.y,0.,2.), 22.*(s-e)) * (s-.1) + f;

}