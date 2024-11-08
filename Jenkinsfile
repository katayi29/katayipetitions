pipeline {
    agent any

    environment {
        // Set environment variables if needed
        // E.g., for the Java Maven build
        MAVEN_HOME = tool name: 'M3', type: 'ToolLocation'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub repository
                git 'https://github.com/katayi29/katayipetitions.git'
            }
        }

        stage('Build Backend') {
            steps {
                // Navigate to backend directory and build the Spring Boot application using Maven
                script {
                    sh 'cd backend && mvn clean install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                // Navigate to frontend directory and build the React app
                script {
                    sh 'cd frontend && npm install && npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the backend (Spring Boot) and frontend (React) apps
                // You can modify this section based on your deployment strategy
                script {
                    sh 'docker-compose up -d'  // Or use any other deployment strategy
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests for backend and frontend if needed
                script {
                    sh 'cd backend && mvn test'
                    sh 'cd frontend && npm test'
                }
            }
        }

        stage('Cleanup') {
            steps {
                // Clean up (optional)
                cleanWs()
            }
        }
    }

    post {
        always {
            // Always clean up resources after the pipeline is complete
            echo 'Pipeline completed'
        }

        success {
            echo 'Build and Deploy successful'
        }

        failure {
            echo 'Build or Deploy failed'
        }
    }
}
