 Map modules = [:]

pipeline {
    agent any
    tools {nodejs "NodeJS"}
    stages {
        stage('pruebas') {
            steps {
                script{
                    modules.first = load "sayHello.groovy"
                    modules.first.test1()
                    modules.first.test2()
                }
            }
        }
        stage('Git') {
            steps {
                echo 'stage git aqui'
                git url: 'https://github.com/rengifolu/miweb.git', branch: "main"
            }
        }
        stage('install') {
            steps {
                echo 'stage install aqui'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                whateverFunction()
                sh 'npm run-script build'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test --watch=false'
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

void whateverFunction() {
    sh 'ls -l /'
}