precision mediump float;
uniform float time; // time
uniform vec2  resolution; // resolution

void main(void){
	vec3 destColor = vec3(0.0, 0.3, 0.7);
	vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y); // 正規化
	float a = atan(p.y / p.x) * 2.0;
	float l = 0.05 / abs(length(p) - 0.5 + sin(a + time * 13.4) * 0.01);
	l += 0.05 / abs(length(p) - 0.3 + sin(a + time * 24.6) * 0.004);
	l += 0.05 / abs(length(p) - 0.1 + sin(a + time * 42.7) * 0.002);
	destColor *= 1.0 + sin(a + time * 29.3) * 0.1;
	gl_FragColor = vec4(l*destColor, 1.0);
}