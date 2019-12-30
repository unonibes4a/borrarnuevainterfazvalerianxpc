#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
float t= time;


void main( void ) {
	
	vec2 p = ( gl_FragCoord.xy * 2.0 - resolution.xy ) /min(resolution.x,resolution.y);

        float c = 0.0;

	for(float l = 0.5;l < 34.0;l++){
		for (float i = 0.0;i < 5.0;i++){
			float j = i - 1.0; 
	        	float si = sin(t + i * 0.628318) / 2.0 - sin(t/4.-l);
        		float co = cos(t - i * 0.628318) / 8.0 + tan(t/8.-l);
	        	c += 0.003 / abs(length(p - vec2(si,co)/(1.25/abs(cos(t/4.0)))) - 0.1 );
		}
	}
	
	float tt = 3.0;
	gl_FragColor += vec4(vec3(abs(c*atan(tt))- 0.5,c*cos(tt),abs(c*sin(tt))), 1.0 );

}