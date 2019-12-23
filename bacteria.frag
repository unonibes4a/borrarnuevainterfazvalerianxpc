// Lightning
// By: Brandon Fogerty
// bfogerty at gmail dot com
// xdpixel.com



// By: Brandon Fogerty
// bfogerty at gmail dot com
// xdpixel.com


// EVEN MORE MODS BY 27

#ifdef GL_ES
precision lowp float;
#endif


// EVEN MORE MODS BY 27




#ifdef GL_ES
precision lowp float;
#endif


// and yet more still by rob
// now playing: http://youtu.be/MVKYtYKnqYU
// @bfogerty, very nice
//
// adjust to taste
#define BPM 138.0
#define SCALE 1.7
// uncomment this for smth a bit different
//#define t00b

uniform float time;
uniform vec2 resolution;

const float count = 27.0;
const float speed = 3.0;


float Hash( vec2 p, in float s)
{
    vec3 p2 = vec3(p.xy,27.0 * abs(sin(s)));
    return fract(sin(dot(p2,vec3(27.1,61.7, 12.4)))*273758.5453123);
}


float noise(in vec2 p, in float s)
{
    vec2 i = floor(p);
    vec2 f = fract(p);
    f *= f * (3.0-2.0*f);
    
    
    return mix(mix(Hash(i + vec2(0.,0.), s), Hash(i + vec2(1.,0.), s),f.x),
               mix(Hash(i + vec2(0.,1.), s), Hash(i + vec2(1.,1.), s),f.x),
               f.y) * s;
}


float fbm(vec2 p)
{
    float v = - noise(p * 02., 0.25);
    v += noise(p * 01.1, 0.5) - noise(p * 01.1, 0.25);
    v += noise(p * 02.1, 0.25) - noise(p * 02.1, 0.125);
    v += noise(p * 04.1, 0.125) - noise(p * 08.1, 0.0625);
    v += noise(p * 08.1, 0.0625) - noise(p * 16., 0.03125);
    v += noise(p * 16.1, 0.03125);
    return v;
}


void main( void )
{
    float t = BPM/60.0;
    float worktime = time * speed - pow(fract(time*t), 2.0);
    float worktime2 = time * speed - pow(fract(time*t/2.0), 2.0);
    float stime = time * -0.2;
    mat2 rot = mat2( sin(stime), cos(stime), cos(stime), -sin(stime) );
    vec2 uv = ( gl_FragCoord.xy / resolution.xy ) * 2.0 - 1.0;
    uv.x *= resolution.x/resolution.y;
    uv *= 
#ifndef t00b
    (1.0/SCALE);
#endif
    uv *= rot;
    
    vec3 finalColor = vec3( 0.0, 0.0, 0.0 );
    for( float i = 1.0; i < count; i++ )
    {
        float t = abs(1.0 / ((uv.y + fbm( uv + worktime / i )) * (i * 110.0)));
        float v = abs(1.0 / ((uv.x + fbm( uv + worktime2 / i )) * (i * 90.0)));
        finalColor +=  t * vec3( i * 0.075, 0.5, 2.0 ) +
			v * vec3( i * 0.2, 0.75, 1.7 );
    }
    finalColor += vec3(0.0, 0.1/distance(uv, vec2(-0.1)), 0.0);
    gl_FragColor = vec4( finalColor, 1.0 );
    
    
}