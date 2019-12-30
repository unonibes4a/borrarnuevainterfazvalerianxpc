#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
float iGlobalTime = time;

// Mountains, by David Hoskins - 2013
// Create on:   https://www.shadertoy.com/view/4slGD4

// A ray-marched version of my terrain renderer.
// It uses binary subdivision to accurately find the height map.
// Lots of thanks to Iñigo and his noise functions!

// Video of my OpenGL version that uses streaming texture normals for speed...
// http://www.youtube.com/watch?v=qzkBnCBpQAM


// Stereo version code thanks to Croqueteer (borrowed twice now!:))
//#define STEREO 

vec3 sunLight  = normalize( vec3(  0.4, 0.4,  0.48 ) );
vec3 sunColour = vec3(1.0, .9, .83);
float specular = 0.0;
vec3 cameraPos;

// This peturbs the fractal positions for each iteration down...
// Helps make nice twisted lanscapes...
const mat2 rotate2D = mat2(1.4323, 1.72, -1.2, 1.42);

// Utilities...
//--------------------------------------------------------------------------
float Hash( float n )
{
    return fract(sin(n)*43758.5453123);
}

//--------------------------------------------------------------------------
// iq's derivative noise function...
float Noise( in vec3 x )
{
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    float res = mix(mix(mix( Hash(n+  0.0), Hash(n+  1.0),f.x),
                        mix( Hash(n+ 57.0), Hash(n+ 58.0),f.x),f.y),
                    mix(mix( Hash(n+113.0), Hash(n+114.0),f.x),
                        mix( Hash(n+170.0), Hash(n+171.0),f.x),f.y),f.z);
    return res;
}

//--------------------------------------------------------------------------
// iq's derivative noise function...
vec3 NoiseDerivative( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    vec2 u = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    float a = Hash(n+  0.0);
    float b = Hash(n+  1.0);
    float c = Hash(n+ 57.0);
    float d = Hash(n+ 58.0);
	return vec3(a+(b-a)*u.x+(c-a)*u.y+(a-b-c+d)*u.x*u.y,
				30.0*f*f*(f*(f-2.0)+1.0)*(vec2(b-a,c-a)+(a-b-c+d)*u.yx));
}

//--------------------------------------------------------------------------
float Noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    float res = mix(mix( Hash(n+  0.0), Hash(n+  1.0),f.x),
                    mix( Hash(n+ 57.0), Hash(n+ 58.0),f.x),f.y);
    return res;
}

//--------------------------------------------------------------------------
vec2 Noise2( in vec2 x )
{
	vec2 res = vec2(Noise(x), Noise(x+vec2(4101.03, 2310.0)));
    return res-vec2(.5, .5);
}

//--------------------------------------------------------------------------
// Low def version for ray-marching through the height field...
float Terrain( in vec2 p)
{
	vec2 pos = p*0.08;
	float w = (Noise(pos*.25)*0.75+.15);
	w = 36.0 * w * w;
	vec2 dxy = vec2(0.0, 0.0);
	float f = .0;
	for (int i = 0; i < 5; i++)
	{
		vec3 v = NoiseDerivative(pos);
		dxy += v.yz;
		f += (w * (v.x) / (1.0 + dot(dxy, dxy))) ;
		w = -w * 0.37;	//...Flip negative and posirive for varition
		pos = rotate2D * pos;
	}
	float ff = Noise(pos*.0003);
	f += pow(ff, 4.0)*41.65-(1.85);
	return f;
}

//--------------------------------------------------------------------------
// Map to lower resolution for height field mapping for Scene fucction...
float map(in vec3 p)
{
	float h = Terrain(p.xz);
    return p.y - h;
}

//--------------------------------------------------------------------------
// High def version only used for grabbing normal information.
float Terrain2( in vec2 x)
{
	// There's some real majic numbers in here! 
	// The Noise calls add large mountain ranges for more variation over distances...
	vec2 pos = x*0.08;
	float w = (Noise(pos*.25)*0.75+.15);
	w = 36.0 * w * w;
	vec2 dxy = vec2(0.0, 0.0);
	float f = .0;
	for (int i = 0; i < 5; i++)
	{
		vec3 v = NoiseDerivative(pos);
		dxy += v.yz;
		f += (w * (v.x)  / (1.0 + dot(dxy, dxy)));
		w =  - w * 0.37;	//...Flip negative and posirive for varition	   
		pos = rotate2D * pos;
	}
	float ff = Noise(pos*.003);
	f += pow(ff, 4.0)*41.65-(.85);
	
	// That's the last of the low resolution, now go down further for the normal data...
	for (int i = 0; i < 6; i++)
	{
		vec3 v = NoiseDerivative(pos);
		dxy += v.yz;
		f += (w * (v.x) / (1.0 + dot(dxy, dxy)));
		w =  - w * 0.3;
		pos = rotate2D * pos;
	}
	return f;
}

//--------------------------------------------------------------------------
float Perlin(in vec2 xy)
{
	float w = .65;
	float f = 0.0;

	for (int i = 0; i < 4; i++)
	{
		f += Noise(xy) * w;
		w *= 0.5;
		xy *= 2.3;
	}
	return f;
}


//--------------------------------------------------------------------------
// Grab all sky information for a given ray from camera
vec3 GetSky(in vec3 rd)
{
	float sunAmount = max( dot( rd, sunLight), 0.0 );
	float v = pow(1.0-max(rd.y,0.0),5.)*.5;
	vec3  sky = vec3(v*sunColour.x*0.4+0.2, v*sunColour.y*0.4+0.25, v*sunColour.z*0.4+.6);
	// Wide glare effect...
	sky = sky + sunColour*vec3(.5,.5,.0) * pow(sunAmount, 5.5)*.7;
	// Actual sun...
	sky = sky+ sunColour * min(pow(sunAmount, 1150.0), .3)*.7;
	
	// Simply Perilin clouds that fade to the horizon...
	// 200 units above the ground...
	v = (200.0-cameraPos.y)/rd.y;
	rd.xz *= v;
	rd.xz += cameraPos.xz;
	rd.xz *= .010;
	float f = (Perlin(rd.xz) -.55) * 5.0;
	sky = mix(sky, vec3(.5, .5, .49), clamp(f*rd.y-.1, 0.0, 1.0));
	
	return sky;
}

//--------------------------------------------------------------------------
// Merge mountains into te sky background for correct disappearance...
vec3 ApplyFog( in vec3  rgb, in float dis, in vec3 dir)
{
	float fogAmount = clamp(dis* 0.0000165, 0.0, 1.0);
	return mix( rgb, GetSky(dir), fogAmount );
}

//--------------------------------------------------------------------------
// Calculate sun light...
void DoLighting(inout vec3 mat, in vec3 pos, in vec3 normal, in vec3 eyeDir, in float dis)
{
	//specular += rainAmount*0.1;
	float h = dot(sunLight,normal);
	float c = max(h, 0.0)+.18;
	mat = mat * sunColour * c ;
	// Specular...
	if (h > 0.0)
	{
		vec3 R = reflect(sunLight, normal);
		float specAmount = pow( max(dot(R, normalize(eyeDir)), 0.0), 3.0)*specular;
		mat = mix(mat, sunColour, specAmount);
	}
}

//--------------------------------------------------------------------------
// Hack the height, position, and normal data to create the coloured landscape
vec3 TerrainColour(vec3 pos, vec3 normal, float dis)
{
	vec3 nor;
	vec3 mat;
	vec3 dir = normalize(pos-cameraPos);
	
	vec3 matPos = pos * 2.0;// ... I had change scale halfway though, this lazy multiply allow me to keep the graphic scales I had

	float disSqrd = dis * dis;// Squaring it gives better distance scales.

	float f = clamp(Noise(matPos.xz*.05), 0.0,1.0);//*10.8;
	f += Noise(matPos.xz*.1+normal.yz*1.08)*.85;
	f *= .55;
	vec3 m = mix(vec3(.63*f+.2, .7*f+.1, .7*f+.1), vec3(f*.43+.1, f*.3+.2, f*.35+.1), f*.65);
	mat = m*vec3(f*m.x+.36, f*m.y+.30, f*m.z+.28);
	// Should have used smoothstep to add colours, but left it using 'if' for sanity...
	if (normal.y < .5)
	{
		float v = normal.y;
		float c = (.5-normal.y) * 4.0;
		c = clamp(c*c, 0.1, 1.0);
		f = Noise(vec2(matPos.x*.09, matPos.z*.095+matPos.yy*0.25));
		f += Noise(vec2(matPos.x*2.233, matPos.z*2.23))*0.5;
		mat = mix(mat, vec3(.4*f), c);
		specular+=.1;
	}

	// Grass. Use the normal to decide when to plonk grass down...
	if (matPos.y < 45.35 && normal.y > .65)
	{

		m = vec3(Noise(matPos.xz*.073)*.5+.15, Noise(matPos.xz*.12)*.6+.25, 0.0);
		m *= (normal.y- 0.75)*.85;
		mat = mix(mat, m, clamp((normal.y-.65)*1.3 * (45.35-matPos.y)*0.1, 0.0, 1.0));
	}
	
	// Snow topped mountains...
	if (matPos.y > 48.35 && normal.y > .28)
	{
		float snow = clamp((matPos.y - 48.35 - Noise(matPos.xz * .1)*18.0) * 0.05, 0.0, 1.0);
		mat = mix(mat, vec3(.7,.7,.8), snow);
		specular += snow;
	}
	// Beach effect...
	if (matPos.y < 1.45)
	{
		if (normal.y > .4)
		{
			f = Noise(matPos.xz * .084)*1.5;
			f = clamp((1.45-f-matPos.y) * 1.34, 0.0, .67);
			float t = (normal.y-.4);
			t = (t*t);
			mat = mix(mat, vec3(.09+t, .07+t, .03+t), f);
		}
		// Cheap under water darkening...it's wet after all...
		if (matPos.y < 0.0)
		{
			mat *= .85;
		}
	}

	DoLighting(mat, pos, normal,dir, disSqrd);
	
	// Do the water...
	if (cameraPos.y < 0.0)
	{
		// Can go under water, but current camera doesn't find a place...
		mat = mix(mat, vec3(0.0, .1, .2), .75); 
	}else
	if (matPos.y < 0.0)
	{
		// Pull back along the ray direction to get water surface point at y = 0.0 ...
		float time = (iGlobalTime)*.03;
		vec3 watPos = matPos;
		float d = watPos.y/dir.y;
		watPos += -dir * d;
		// Make some dodgy waves...
		float tx = cos(watPos.x*.052) *4.5;
		float tz = sin(watPos.z*.072) *4.5;
		vec2 co = Noise2(vec2(watPos.x*2.7+1.3+tz, watPos.z*2.69+time*35.0-tx));
		co += Noise2(vec2(watPos.z*4.6+time*13.0-tx, watPos.x*4.712+tz))*.4;
		nor = normalize(vec3(co.x, 7.0, co.y));
		vec3 ref = normalize(reflect(dir, nor));//normalize((-2.0*(dot(dir, nor))*nor)+dir);
		// Mix it in at depth transparancy to give beach cues..
		mat = mix(mat, GetSky(ref), clamp((watPos.y-matPos.y)*1.1, .35, .66));
		// Add some extra water glint...
		float sunAmount = max( dot(ref, sunLight), 0.0 );
		mat = mat + sunColour * pow(sunAmount, 128.5)*.6;
	}
	mat = ApplyFog(mat, disSqrd, dir);
	return mat;
}

//--------------------------------------------------------------------------
float BinarySubDivision(in vec3 rO, in vec3 rD, float t, float oldT)
{
	// Home in on the surface by dividing by two and split the test...
	for (int n = 0; n < 5; n++)
	{
		float halfwayT = (oldT + t ) * .5;
		vec3 p = rO + halfwayT*rD;
		if (map(p) < 0.25)
		{
			t = halfwayT;
		}else
		{
			oldT = halfwayT;
		}
	}
	return t;
}

//--------------------------------------------------------------------------
bool Scene(in vec3 rO, in vec3 rD, out float resT )
{
    float t = 0.0;
	float oldT = 0.0;
	float delta = 0.0;
	for( int j=0; j<190; j++ )
	{
		if (t > 240.0) return false; // ...Too far
	    vec3 p = rO + t*rD;
        if (p.y > 55.0) return false; // ...Over highest mountain

		float h = map(p); // ...Get this position's height mapping.
		// Are we inside, and close enough to fudge a hit?...
		if( h < 0.25)
		{
			// Yes! So home in on height map...
			resT = BinarySubDivision(rO, rD, t, oldT);
			return true;
		}
		// Delta ray advance - a fudge between the height returned
		// and the distance already travelled...
		delta = max(0.01, 0.2*h) + (t*0.0065);
		oldT = t;
		t += delta;
	}

	return false;
}

//--------------------------------------------------------------------------
vec3 CameraPath( float t )
{
	t = (iGlobalTime-180.)*.006 + t;
    vec2 p = 276.0*vec2( sin(3.5*t), cos(1.5*t) );
	return vec3(142.0-p.x, 0.6, -93.0+p.y);
}

//--------------------------------------------------------------------------
// Some would say, most of the magic is done in post! :D
vec3 PostEffects(vec3 rgb)
{
	// Gamma first...
	rgb = pow(rgb, vec3(0.45));

	#define CONTRAST 1.15
	#define SATURATION 1.3
	#define BRIGHTNESS 1.15
	return mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb*BRIGHTNESS)), rgb*BRIGHTNESS, SATURATION), CONTRAST);
}

//--------------------------------------------------------------------------
void main(void)
{
    vec2 xy = -1.0 + 2.0*gl_FragCoord.xy / resolution.xy;
	vec2 s = xy * vec2(resolution.x/resolution.y,1.0);
	vec3 camTar;

	#ifdef STEREO
	float isCyan = mod(gl_FragCoord.x + mod(gl_FragCoord.y,2.0),2.0);
	#endif

	// Use several forward heights, of decreasing influence with distance from the camera.
	float h = 0.0;
	for (float f = 1.0; f > 0.3; f-=.1)
	{
		h += Terrain(CameraPath((1.0-f)*.004).xz) * f;
	}
	h *= .23;
	cameraPos.xz = CameraPath(0.0).xz;
	camTar.xz	 = CameraPath(.005).xz;
	camTar.y = cameraPos.y = h+3.5;
	
	float roll = 0.1*cos(iGlobalTime*.2);
	vec3 cw = normalize(camTar-cameraPos);
	vec3 cp = vec3(sin(roll), cos(roll),0.0);
	vec3 cu = normalize(cross(cw,cp));
	vec3 cv = normalize(cross(cu,cw));
	vec3 rd = normalize( s.x*cu + s.y*cv + 1.5*cw );

	#ifdef STEREO
	cameraPos += .45*cu*isCyan; // move camera to the right - the rd vector is still good
	#endif

	vec3 col;
	float distance;
	if( !Scene(cameraPos,rd, distance) )
	{
		// Missed scene, now just get the sky value...
		col = GetSky(rd);
	}
	else
	{
		// Get world coordinate of landscape...
		vec3 pos = cameraPos + distance * rd;
		// Get normal from sampling the high definition height map
		// Use the distance to sample larger gaps to help stop aliasing...
		float p = min(.3, .0005+.00001 * distance*distance);
		vec3 nor  	= vec3(0.0,		    Terrain2(pos.xz), 0.0);
		vec3 v2		= nor-vec3(p,		Terrain2(pos.xz+vec2(p,0.0)), 0.0);
		vec3 v3		= nor-vec3(0.0,		Terrain2(pos.xz+vec2(0.0,-p)), -p);
		nor = cross(v2, v3);
		nor = normalize(nor);

		// Get the colour using all available data...
		col = TerrainColour(pos, nor, distance);
	}

	col = PostEffects(col);
	
	#ifdef STEREO	
	col *= vec3( isCyan, 1.0-isCyan, 1.0-isCyan );	
	#endif
	
	gl_FragColor=vec4(col,1.0);
}

//--------------------------------------------------------------------------}