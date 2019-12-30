
// https://www.shadertoy.com/view/tljSWV

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
float box(float edge0, float edge1, float x)
{
	return step(edge0, x) - step(edge1, x);
}

float ringShape(vec2 p, float t)
{
	return clamp(box(t, t * 1.2, length(p)) - t, 0.0, 1.0);
}

float ringInstance(vec2 p, float t, float xden, float yden)
{
	float th = floor(t) * 47.0;
	return ringShape(p - vec2(mod(th, xden) / xden, mod(th, yden) / yden) * 2.0 + 1.0, fract(t));
}


mat2 rotate(float a)
{
	float c = cos(a);
	float s = sin(a);
	return mat2(c, s, -s, c);
}
void main()
{
	vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
	
	float t = time / 3.0 + 5.0;
	vec3 ccc = ringInstance(uv, t - 0.0, 7.0,  13.0) * vec3(1.0, 1., 1.) +
	ringInstance(uv, t - 0.6, 3.0,   5.0) * vec3(1., 1.0, 1.) +
	ringInstance(uv, t - 0.2, 11.0, 23.0) * vec3(1.0, 1.0, 1.) +
	ringInstance(uv, t - 0.9, 17.0, 19.0) * vec3(1., 1., 1.0)+	
	ringInstance(uv, t - 0.1, 12.0, 9.0) * vec3(1., 1., 1.0)+
	ringInstance(uv, t - 0.5, 72.0, 9.0) * vec3(1., 1., 1.0);	
	
	uv *= 1.25+sin(uv.y+time*0.9)*0.5;
	
	uv.x *= abs(uv.x);
	uv.y *= abs(uv.y);
	vec2 f = vec2(0.3);
	vec3 c = vec3(1.0,1.0,1.0);
	float light = 0.1;
	
	for (float x = 1.1; x < 10.0; x += 1.0)
	{
		uv *= rotate(x*200.0+sin(time*0.1));
		
		f = vec2(cos(cos(time*0.6+x + uv.x * x) - uv.y * dot(vec2(x + uv.y), vec2(sin(x), cos(x)))));
		light += (0.04 / distance(uv, f)) - (0.01 * distance(vec2((cos(time*0.3 + uv.y))), vec2(uv)));
		
		c.y += sin(x+time+abs(uv.y))*0.3;
		if (c.y<0.8)
			c.y = 0.8;
		light-=x*0.001 + c.y*0.001;
		
	}
	
	c *= light;
	c.x += (sin(time*2.4)*0.1);
	
	ccc = clamp(ccc,vec3(0.25),vec3(2.0));
	gl_FragColor = vec4(c*ccc, 1.0);
}