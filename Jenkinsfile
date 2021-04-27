pipeline {
    agent any
    tools {nodejs "NodeJS"}
    stages {
        stage('Git') {
            steps {
                git url: 'https://github.com/rengifolu/miweb.git', branch: "main"
            }
        }
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build'
            }
        }
        stage('Test') {
            steps {
                sh 'ng run-script test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm ../../apps/*'
                sh 'cp ./dist/apps/* ../../apps/'
            }
        }
    }
}