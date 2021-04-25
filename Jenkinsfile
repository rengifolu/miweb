pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Git') {
            steps {
                git branch: 'main', url 'https://github.com/rengifolu/miweb'
            }
        }
            stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}