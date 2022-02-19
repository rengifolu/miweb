
/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    environment {
        registry = 'rengifolu/miweb'
        registryCredential = 'dockerhub_id'
        dockerImage = ''
    }
    tools { nodejs 'NodeJS' }
    stages {
      stage('Git') {
            steps {
                checkout scm
    /*             echo 'stage git aqui'
                git url: 'https://github.com/rengifolu/miweb.git', branch: "main" */
            }
      }

      stage('Building our image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
      }

      stage('Deploy our image') {
          steps {
               script {
                 /* groovylint-disable-next-line NestedBlockDepth */
                 docker.withRegistry('', registryCredential) { dockerImage.push() }
               }
          }
      }

        stage('Cleaning up') {
            steps {
                script {
                        sh "docker rmi $registry:$BUILD_NUMBER"
                }
            }
        }
    }
}
