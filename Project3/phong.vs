
#version 330 core
layout (location = 0) in vec3 position;
layout (location = 1) in vec3 normal;

out vec3 Normal;
out vec3 FragPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
//input: 4x4 matrices model, view, and projection
 //      3-vector position and normal
//output:3-vector Normal and FragPos
//function: create 3-D shade
    // TODO: Your code here
    // Remember to set gl_Position (correctly) or you will get a black screen...
	FragPos = vec3(model*vec4(position, 1.0f));    //

	//model is cut down into mat3-> inverse into a transpose matrix
	Normal = inverse(transpose(mat3(model))) *normal;
	
    //gl_position is adjusted
    gl_Position = projection * view * model* vec4(FragPos, 1.0);
	
} 
