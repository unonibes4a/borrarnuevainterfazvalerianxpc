// Tiled tunnel
// Peter Capener

#ifdef GL_ES
precision mediump float;
#endif
#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 xy_to_rgb( vec2 xy ) {

	vec3 rgb = vec3( 0.0, 0.0, 0.0 );
	float ratio = 1.;
	float slope = abs( xy.x / xy.y );
	if ( slope < ratio ) {
		float tile = floor( cos( 1./xy.y * 3.0 + ( time * 3. * abs(xy.y)/xy.y ) ) + 1. ) - slope/ratio;
		rgb = vec3( tile, tile, tile );
	} else {
		float tile = 1. - floor( cos( 1./xy.x * ratio * 3.0 + ( time * 3. * abs(xy.x)/xy.x ) ) + 1. ) - (1./slope)*3.;
		rgb = vec3( tile, tile, tile );
	}
	float dist = max(1.-length(xy * vec2( 2., 5.0 )),0.);
	rgb -= vec3( dist, dist, dist ) / 1.2;
	return rgb;
}

void main( void ) {

	float scale  = min(resolution.x, resolution.y);
	float width  = resolution.x / scale;
	float height = resolution.y / scale;
	vec2 coord = ( gl_FragCoord.xy / scale ) - vec2( width*.5, height*.5 ) + (mouse - vec2(.5, .5)) * 1.;
	
	vec3 color = xy_to_rgb( coord );
	color *= vec3(0.6, 0.2, 0.2);
	
	gl_FragColor = vec4( color, 1. );

}