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
        stage("Clean Docker System") {
            steps {
                echo "Cleaning up old Docker images and containers..."
                sh "docker system prune -af || true"
            }
        }
        stage("Update Kubernetes Deployment") {
            steps {
                echo "Updating Kubernetes Deployment..."
                sh """
                export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
                kubectl set image deployment/space-web space-web=anassessadikine/space-web:latest --record
                kubectl rollout restart deployment/space-web
                """
            }
        }

    }
}
