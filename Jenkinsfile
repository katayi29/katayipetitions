pipeline {
    agent any

    environment {
        // Set environment variables if needed
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

        stage('Test') {
            steps {
                // Run tests for backend and frontend if needed
                script {
                    sh 'cd backend && mvn test'
                    sh 'cd frontend && npm test'
                }
            }
        }

        // Add a Manual Approval stage before deploying to production
        stage('Manual Approval') {
            steps {
                script {
                    input message: 'Approve deployment to production?', ok: 'Deploy'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                // Deploy the WAR file to the EC2 instance using SCP or AWS CLI
                script {
                    sh '''
                        // Upload WAR file to Tomcat directory on EC2
                        scp -i "C:/Users/ADMIN/Downloads/ec2-key.pem" backend/target/kehindespettitions.war ec2-user@16.171.160.32:/opt/tomcat/webapps/
                        
                        // Restart Tomcat service on EC2
                        ssh -i "C:/Users/ADMIN/Downloads/ec2-key.pem" ec2-user@16.171.160.32 "sudo systemctl restart tomcat"
                    '''
                }
            }
        }

        stage('Cleanup') {
            steps {
                // Clean up the workspace after the pipeline completes
                cleanWs()
            }
        }
    }

    post {
        always {
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
