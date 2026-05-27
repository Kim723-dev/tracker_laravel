pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'tracker',
                url: 'https://github.com/Kim723-dev/tracker_laravel.git'
            }
        }

        stage('Install Composer Dependencies') {
            steps {
                bat 'composer install'
            }
        }

        stage('Install NPM Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Assets') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Run Laravel Commands') {
            steps {
                bat 'php artisan config:cache'
                bat 'php artisan route:cache'
                bat 'php artisan migrate --force'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment completed'
            }
        }
    }

    post {
        success {
            echo 'Laravel deployment successful!'
        }

        failure {
            echo 'Laravel deployment failed!'
        }
    }
}
