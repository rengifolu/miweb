
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

                    docker.withRegistry( '', registryCredential ) { 

                        dockerImage.push() 

                    }

                } 

            }

        } 

        stage('Cleaning up') { 

            steps { 

                sh "docker rmi $registry:$BUILD_NUMBER" 

            }

        } 


        stage('Deploy App') {
            steps {
                script {

                    def yamlText = readFile "deployment.yml"
                    yamlText = yamlText.replaceAll("BUILD_NUMBER", "${BUILD_NUMBER}")
                    echo yamlText

                    writeFile file: "deployment.yml", text: yamlText
                    kubernetesDeploy(configs: "deployment.yml", kubeconfigId: "mykubeconfig")

                    //sh 'kubectl apply -f deployment.yaml'
                    
                }
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