Homework Assignment 3 of Computer Graphics
At the root of repository /homework3, you can see the picture files of test run.
To see the required files, you go to directory homework3/Project3/. In folder project3, you will see:
    main.cpp
    phong.frag
    phong.vs
    shader.h
    camera.h
 You can copy content of the files and put them into a new project in Visual Studio to run. However, this homework requires GLM, Freeglut, GLFW, and GLEW, so you must have the system installed and adjusted before running these files, if you plan to run files in Visual Studio.

In case of Linux or MAC OS environment, you will follow the instruction below:
 
 
- On Ubuntu/Debian, first run sudo add-apt-repository ppa:keithw/glfw3 in order to add a repository con-
taining the GLFW3 library.
-On Ubuntu and other Linux variants, these libraries can be installed with a one-liner at the terminal: sudo
apt-get install libglew-dev libglfw3-dev libglm-dev . (Note: on some Linux variants, the package names might
end in devel rather than dev; check your distribution's package database to nd the correct package.)

-On OS X: GLEW: If you have Homebrew installed, you can run brew install glew, or if you have Mac-
ports, you can run sudo port install glew +universal and sudo port install libsdl +universal . GLFW: If you
have Homebrew installed, you can run brew install glfw3 . With Macports, you can run sudo port install
glfw . GLM: If you have Homebrew installed, you can run brew install glm . With Macports, you can run
sudo port install glm .
