pipeline {

    agent any

    tools { nodejs "nodejs" }
    stages {
        stage('Source Checkout') {
            steps {
                // git 브랜치 및 주소
                git branch: 'master', credentialsId: 'Github', url: 'https://github.com/minsoub/angular-router-test.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('build for prod') {
            steps {
                sh 'npm run build --prod'
            }
            post {
                failure {
                   // httpRequest consoleLogResponseBody: true, contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: "{ text:\"${failBody}\" }", url: "https://chat.googleapis.com/v1/spaces/${roomid}/messages?key=${key}&token=${token}"
                }
            }
        }
        stage('transfer to S3') {
            steps {
                pwd(); //Log current directory
                withAWS(region:'ap-northeast-2',credentials:'s3-jms') {
                    awsIdentity();//Log AWS credentials
                    s3Upload(bucket:"jms-angular-test", workingDir:'dist/angular-router-test', includePathPattern:'**/*');
                }
            }
			post {
                success {
                    archiveArtifacts artifacts: 'dist/**/**', fingerprint: true
                }
            }

        }
    }
}
