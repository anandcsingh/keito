# Ranked
## Trusted Martial Arts rank promotions

Prove and share rank/belt level, promote sutdents to new a new rank or even revoke their rank built using React and SnarkyJS for the Mina blockchain.
The application has 3 main components
- Mina Smart Contract
- React JS frontend
- Firebase database

## Mina Smart Contract 
The **Ranked** application currently ustilizes a simple smart contract that is only able to store 3 certifications for 3 different martial arts. With further development this could be expanded to facilitate more users utilizing *Off-chain* storage.
The contract lets you specify an Instructor wallet on-chain that can promote a student to a specific rank via various methods.

A hash of the students rank and martial art is stored on chain. The Ranked Martial Artists' portal uses hash to verify the students claim to that rank.

## Ranked Martial Artists' portal

![home](./home.png)
The portal built using React and SnarkyJS allows martrial artists supports the following at present.
### Home page
Welcome screen introducing you to the Ranked app, roadmap and contact information.
### Login with your Auro wallet
When you click launch app on the home page you are prompted to login with the Auro wallet. If your account is installed and funded, you are taken to the Rank page. Otherwise **Ranked** guides you in the setup process.
### View Rank
View verfied, and unverfied various martial arts ranks on the Rank page. Click the plus button to add an unverified martial art. Your instructor can certify or promote you after this. Verfied ranks are **Gold** indicating your instructor has certified your rank by creating a proof stored on-chain. You can prove your verified ranks when questioned by anyone,snext on the roadmap would be to share your rank with other users. You can use [Ranked Companion](#ranked-companion) to clear ranks.
### Add Rank
Add unverified martial art ranks which, will show up on your Rank page in grey indicating you are waiting to be certified. Ask your instructor to certify you. 
### Promote/Certify students
On the Student page promote or certify your students in a martial art giving them a trusted rank. Certifying a student writes to the blockchain a hash of their rank. These ranks are now displayed in **Gold** on the student's Rank page.
Currently only one instructor is available on-chain. Use the [Ranked Companion](#ranked-companion) to change the instructor to an account you control. Note there is a bug when promoting students in the martial art that they already have added. A CORS issue that could easily be resolved.

### Lineage
Not implemented exception! Intetion to be able to certify and trace your lineage in your martial art. Trace back to your instructor's instructor, his instructor and so on. Back to the begining if possible.

# Ranked Companion
Located at the botton right corner **Ranked companion** leads you to a page with some tools to help get past some of the shortcomings of the current implementation. Wait for SnarkyJS to load, the message will disapper after it is done. Use the console are various useful messages are written there.
## Instructor Address
- Current Instructor - lists the current instructor (can promote students)
- Change Instructor - enter an account you own to promote students

## Delete Student DB Ranks
Enter the student address whose DB records you want to delete. This allows you to recreate some martial arts while testing.

## Compare a rank on-chain
Only 3 martial arts are stored on-chain. These fields are shared across users. You can verify the martial art rank and address stored on chain by passing a Rank record to see if the hashes match.
# Known issues
- Storage on-chain is shared for all users. Only 3 martial arts are available. If more students are verified, others will lose their status. This can be rectified with off-chain storage!
- A CORS issue with the GitHub pages casues a specific case, works fine on localhost 😬. Cannot promote a student in a Martial Art if they already added that martial art. They have to add a martial art so you can see them in the app. But you can only promote/certify another martial art.
For example
- Student logs in for the first time
- Student adds Brazilian Jiu Jitsu and their rank
- Instructor chooses Karate and certifies that ranked
- This works.
