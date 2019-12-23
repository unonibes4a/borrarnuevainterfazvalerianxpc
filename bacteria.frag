/*
 * Original shader from: https://www.shadertoy.com/view/ttjGDK
 */

#ifdef GL_ES
precision mediump float;
#endif

// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// shadertoy emulation
#define iTime time
#define iResolution resolution

// --------[ Original ShaderToy begins here ]---------- //
precision highp float;

mat2 rot(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c,s,-s,c);
}

float box(vec3 p, vec3 b) {
    vec3 d = abs(p) - b;
    return length(max(d, 0.0));
}

float ifsBox(vec3 p) {
    for(int i=0; i<6; i++) {
        p = abs(p) - 1.0;
        p.xz *= rot(0.7);
        p.xy *= rot(0.8);
    }
    return box(p, vec3(0.0, 0.9, 0.2));
}

float map(vec3 p) {
    float c = 8.0;
	p.z = mod(p.z, c) - c * 0.5;
    return ifsBox(p);
}

vec3 hsv(float h, float s, float v) {
	return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = (fragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;

    vec3 cPos = vec3(2.5*sin(0.4*iTime), 0.5*cos(1.3*iTime), -20.0*iTime);
    vec3 cDir = vec3(0.0, 0.0, -1.0);
    vec3 cUp  = vec3(0.0, 1.0, 0.0);
    vec3 cSide = cross(cDir, cUp);

    vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir);

    // Phantom Mode https://www.shadertoy.com/view/MtScWW by aiekick
    float t = 0.0;
    float acc = 0.5;
    for (int i = 0; i < 199; i++){
        vec3 pos = cPos + ray * t;
        float dist = map(pos);

    	dist = max(abs(dist), 0.02);
        float a = exp(-dist*3.0);
        if (mod(pos.z-60.0*iTime, 50.0) < 8.0) {
            a *= 5.0;
        }
    	acc += a;

    	t += dist*0.5;
        if (t > 100.0) break;
    }

    vec3 col = hsv(fract(0.06*iTime), 0.6, acc * 0.01);
    fragColor = vec4(col, 1.0);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}