# RealEstateProject

End Goal: A Web Application to track market performance of Real Estate properties through uploading loan notes in the form of Excel sheets. Queries APIs such as Zillow and Trulia through a Python script to receive real time data. Uses Firebase for backend support through creating a full User Account System, User Storage, and Metadata Archive Database.

## Local Build
To build locally, run
```
mvn clean package
```

## Running on Tomcat (localhost:8080) 
After creating the build, execute the jar ie: navigate to the "site" directory and run
```
java -jar target/loanotes_site-0.0.1-SNAPSHOT.jar
```

Report Bugs and Feature Requests to: https://docs.google.com/spreadsheets/d/1rSAV1W6iAXSJXhFRDfDkjVmKMnm2ddXccSciXNZmZww/edit#gid=0

Fallback Static Site on amazonS3: http://loannotestracker.s3-website-us-west-1.amazonaws.com

Staging Repo: https://github.com/rsandeep15/note-eval-client-staging (private)
