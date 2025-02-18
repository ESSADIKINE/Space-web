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
                script {
                    def IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    env.IMAGE_TAG = IMAGE_TAG
                }
                echo "Building Docker image..."
                sh "docker build -t ${DOCKER_HUB_REPO}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }
        stage("Push to Docker Hub") {
            steps {
                echo "Pushing the image to Docker Hub..."
                withCredentials([usernamePassword(credentialsId: "dockerHub", passwordVariable: "DOCKER_PASS", usernameVariable: "DOCKER_USER")]) {
                    sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
                    sh "docker push ${DOCKER_HUB_REPO}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
        stage("Update Kubernetes Deployment") {
            steps {
                echo "Updating Kubernetes Deployment..."
                sh "kubectl set image deployment/space-web space-web=${DOCKER_HUB_REPO}/${IMAGE_NAME}:${IMAGE_TAG}"
                sh "kubectl rollout status deployment/space-web"
            }
        }
    }
}
