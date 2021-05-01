 Map modules = [:]

pipeline {
    agent any
    tools {nodejs "NodeJS"}
    stages {
        def app
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
                checkout scm  
    /*             echo 'stage git aqui'
                git url: 'https://github.com/rengifolu/miweb.git', branch: "main" */
            }
        }

        stage('Build image') {         
        
                app = docker.build("rengifolu/miweb")    
        }   


        stage('Test image') {           
                app.inside {            
                
                sh 'echo "Tests passed"'        
                }    
        }


        stage('Push image') {
    
            docker.withRegistry('https://registry.hub.docker.com', 'git') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
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