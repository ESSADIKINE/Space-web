pipeline {
    agent any

    environment {
        IMAGE_NAME = "space-web"
        DOCKER_HUB_REPO = "anassessadikine"
    }
    
    stages {
        stage("Clone Repository") {
            steps {
                echo "Cloning the repository..."
                git url: "https://github.com/ESSADIKINE/Space-web.git", branch: "main"
            }
        }

        stage("Build Docker Image") {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage("Push to Docker Hub") {
            steps {
                echo "Pushing the image to Docker Hub..."
                withCredentials([usernamePassword(credentialsId: "dockerHub", passwordVariable: "DOCKER_PASS", usernameVariable: "DOCKER_USER")]) {
                    sh "docker tag ${IMAGE_NAME} ${DOCKER_HUB_REPO}/${IMAGE_NAME}:latest"
                    sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
                    sh "docker push ${DOCKER_HUB_REPO}/${IMAGE_NAME}:latest"
                }
            }
        }

        stage("Deploy Application") {
            steps {
                echo "Deploying application using Docker Compose..."
                sh """
                docker-compose down
                docker-compose pull
                docker-compose up -d
                """
            }
        }
    }
}
