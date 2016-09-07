# RealEstateProject

End Goal: A Web Application to track market performance of Real Estate properties through uploading loan notes in the form of Excel sheets. Queries APIs such as Zillow and Trulia through a Python script to receive real time data. Uses Firebase for backend support through creating a full User Account System, User Storage, and Metadata Archive Database.

Current State: Backend Web Architecture is almost complete. Working on making the site look nicer and actually deploying the real estate analytics scripts. As of now, user account system and uploading need to be heavily tested before proceeding with notes analytics and property list populating.
The current code base requires user testing.

Please focus testing on the following features: 

1) Able to upload any Excel Files <br>
2) View of Uploaded Excel Files is updated in real time <br>
3) Duplicate uploads are automatically detected and stopped from being pushed <br>
4) Able to create and sign in with user accounts <br>
5) Site navigation works as expected <br>

Report Test Fest bugs to:https://docs.google.com/spreadsheets/d/1rSAV1W6iAXSJXhFRDfDkjVmKMnm2ddXccSciXNZmZww/edit#gid=0
Hosting static site on amazonS3: http://loannotestracker.s3-website-us-west-1.amazonaws.com

Fallback Repo: https://github.com/rsandeep15/note-eval-client-staging (private)
