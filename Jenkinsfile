
pipeline {
    agent any
    environment {
        registry = "rengifolu/miweb"
        registryCredential = 'dockerhub_id'
        dockerImage = ''
    }

    tools {nodejs "NodeJS"}
    stages {

        
        stage('Git') {
            steps {
                checkout scm  
    /*             echo 'stage git aqui'
                git url: 'https://github.com/rengifolu/miweb.git', branch: "main" */
            }
        }

14
        stage('Building our image') { 
15
            steps { 
16
                script { 
17
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
18
                }
19
            } 
20
        }
21
        stage('Deploy our image') { 
22
            steps { 
23
                script { 
24
                    docker.withRegistry( '', registryCredential ) { 
25
                        dockerImage.push() 
26
                    }
27
                } 
28
            }
29
        } 
30
        stage('Cleaning up') { 
31
            steps { 
32
                sh "docker rmi $registry:$BUILD_NUMBER" 
33
            }
34
        } 


        stage('Cleaning up') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }

    
/*         stage('install') {
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
        } */
    }
}

// void whateverFunction() {
//     sh 'ls -l /'
// }