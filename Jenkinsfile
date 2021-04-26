pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('Git') {
            steps {
                git 'https://github.com/rengifolu/miweb.git'
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