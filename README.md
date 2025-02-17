# Automated CI/CD Pipeline with Docker and Jenkins- SpaceWeb

![Cover Image](https://i.ibb.co/vsGDF2W/automation.png)

# Description 

Welcome to Automated-CI-CD-Pipeline-Space-Web! SpaceWeb is a demonstration project that showcases the simplicity and efficiency of automating the deployment process for a static website using Docker Compose and Jenkins CI/CD pipeline. This means that when a developer makes any changes to the code through GitHub, all the code will automatically deploy to the container without us having to click on anything. We are making the process easier and automatic using GitHub Webhook.

  - ***Before I start, let me tell you that I have posted all the steps of this project creation on [my blog](https://medium.com/@azfaralam/automated-ci-cd-pipeline-with-docker-and-jenkins-space-web-8b6186e21d31), you can go and [see it once](https://medium.com/@azfaralam/automated-ci-cd-pipeline-with-docker-and-jenkins-space-web-8b6186e21d31).***

## Features-

- **Effortless Deployment**: Deploy your static website effortlessly using Docker Compose.
- **Continuous Integration**: Integrate seamlessly with GitHub using Jenkins CI/CD pipeline.
- **Automated Updates**: Changes pushed to your GitHub repository trigger automatic updates to the deployed website.
- **GitHub Webhook Integration**: Simplify and automate the deployment process with GitHub Webhook integration.

  ## How it works-

1. **Setup Docker Compose:** Begin by configuring Docker Compose to define your static website's services.
2. **Integrate with Jenkins**: Connect SpaceWeb with your GitHub repository using Jenkins CI/CD pipeline.
3. **Automatic Deployment**: Push changes to your GitHub repository, and Jenkins pipeline automatically deploys the updated website.
4. **Seamless Updates**: Enjoy hassle-free updates to your static website without manual intervention, thanks to GitHub Webhook integration.

 ## Getting Started -

  ## Prerequisites

  1. **AWS Account:** You need an AWS account to utilize services like Amazon EKS and EC2. If you don't have an AWS account, you can [create one here](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26src%3Dheader-signin%26state%3DhashArgsFromTB_ap-southeast-2_aacbff57e379dd11&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=gz0r28YwtQey_P0ZDDgYsMbdjUHsI0LNhXn3s58m1nU&code_challenge_method=SHA-256).
 
     2. **EC2 Instance with Ubuntu AMI:**
            - **Launch EC2 Instance:** Log in to your AWS Management Console and navigate to EC2. Launch an EC2 instance with Ubuntu AMI by following these steps:

         - Choose an Ubuntu AMI (Amazon Machine Image).
         - Select the instance type. For this project, choose "t2.medium" to ensure sufficient resources.
         - Configure instance details according to your requirements.
         - Add storage: Choose at least 12GB of storage to accommodate the application and dependencies.
         - Configure security group and key pair settings.
         - Review and launch the instance.
         - Connect to EC2 Instance: Once the instance is launched, connect to it using SSH or any other preferred method.

## Step-1

  - Creatae file for easily installation of Jenkins

   ```bash
   vim jenkins.sh
   ```
  - Then paste the shellscript code which is in the jenkins.sh file in the above repo and then save
  - Then make the file executable.
    ```
    chmod +x ./jenkins.sh
    ```
  - Then run the command for starting of installation
    ```bash
    ./jenkins.sh
    ```

  - After done of installation click on ``` ctrl+c ``` to exit
  - now paste your IP ``` <EC2 Public IP Address:8080> ``` on your browser
  - now get your administrator password for Jenkins use this
    ```bash
    sudo cat /var/lib/jenkins/secrets/initialAdminPassword
    ```
    
  - and then isntall docker, following these commands
    ```bash
    sudo apt install
    ```

    ```bash
    sudo apt update -y
    ```

    ```bash
    sudo apt install docker.io -y
    ```

  - Docker group for permissions.

    ```bash
    sudo usermod -a -G docker $USER
    ```
  - Now switch primary group to Docker for current session.
  
    ```bash
    newgrp docker
    ```

  - Now, grant universal read, write, and execute permissions to Docker socket.
    
    ```bash
    sudo chmod 777 /var/run/docker.sock
    ```

  - Then you have to create a new job on Jenkins Pipeline and choose on ``` pipeline ```
  - Then paste your github url
  - and then use jenkinsfile which is available on the above repository named ``` jenkinsfile```

    <img src="https://www.animatedimages.org/data/media/562/animated-line-image-0184.gif" width="1920" />

    ***Now, from here, you can visit [my medium blog](https://medium.com/@azfaralam/automated-ci-cd-pipeline-with-docker-and-jenkins-space-web-8b6186e21d31), where you will find everything explained from scratch, with screenshots for every step, uploaded from the beginning to the end. So once visit on [my Medium Blog for every steps](https://medium.com/@azfaralam/automated-ci-cd-pipeline-with-docker-and-jenkins-space-web-8b6186e21d31).***

**If you get stuck anywhere while creating this project, Feel free to reach out to me for support and guidance. You can easily connect with me through [LinkedIn](https://linkedin.com/in/md-azfar-alam), [Instagram](https://www.instagram.com/azfarxx_/) or [Discord](https://discord.com/users/877531143610708028).**

##  Looking forward to helping you succeed! 😊✨

    
