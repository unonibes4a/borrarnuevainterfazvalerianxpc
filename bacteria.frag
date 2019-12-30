#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec2 onRep(vec2 p, float interval) {
    return mod(p, interval) - interval * 0.5;
}

float barDist(vec2 p, float interval, float width) {
    return length(max(abs(onRep(p, interval)) - width, 0.0));
}

float sceneDist(vec3 p) {
    float bar_x = barDist(p.yz, 0.5, 0.01);
    float bar_y = barDist(p.xz, 0.5, 0.01);
    float bar_z = barDist(p.xy, 0.5, 0.01);

    return min(min(bar_x, bar_y), bar_z);
}

void main( void ) {
    vec2 p = ( gl_FragCoord.xy * 2. - resolution.xy ) / min(resolution.x, resolution.y);


    vec3 cameraPos = vec3(0., 0.,  time/16.0);
    float screenZ = 2.5;
    vec3 rayDirection = normalize(vec3(p, screenZ));

    float depth = 0.0;
    vec3 col = vec3(0.0);

    for (int i = 0; i < 99; i++) {
        vec3 rayPos = cameraPos + rayDirection * depth;
        float dist = sceneDist(rayPos);

        if (dist < 0.0001) {
            col = vec3(.0047, 0.3839,0.756) * (1.0 - float(i) / 12.0);
            break;
        }

        depth += dist;
    }

    gl_FragColor = vec4(col, 1.0);
}