
#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // TODO: Replace with your code...
    // If gl_Position was set correctly, this gives a totally red cube
    //ambient
	float ambientStrength = 0.1;
	vec3 ambient = ambientStrength * lightColor;

	//diffuse
	vec3 norm = normalize(Normal);
	vec3 lightDirection = normalize(lightPos - FragPos);
	float diffuseStrength = max(dot(norm, lightDirection), 0.0f);
	vec3 diffuse = diffuseStrength*lightColor;

	//specular
	float specStrength = 0.5;
	vec3 viewDir = normalize(viewPos - FragPos);
	vec3 reflectD = reflect(-lightDirection, norm);
	float spec = pow(max(dot(viewDir, reflectD), 0.0f), 16);
	vec3 specular = specStrength * spec * lightColor;
	//lead to result
	vec3 result = (ambient + diffuse + specular)* objectColor;
	color = vec4(result, 1.0f);
    //color = vec4(vec3(1.f,0.f,0.f), 1.0f);
} 
