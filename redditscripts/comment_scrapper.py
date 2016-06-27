''' Comment Scrapper scrapes through all the comments for a particular user /u/user and stores them in a user.txt '''


import praw

user_agent = "CommentScraper v0.1 by /u/bangalorerohan | github: bangalorerohan"
r = praw.Reddit(user_agent = user_agent)

#Takes the username as user and User gets redditor /u/user

user = raw_input("Enter your username")
f = open(user+".txt","w")
User = r.get_redditor(user)

comments = User.get_comments(limit="none")

f.write("Total comments = "+str(len(list(comments))))

comments = User.get_comments(limit="none")

for comment in comments:
	f.write(comment.body.encode('utf-8'))
	f.write("\n\n")

f.close()
