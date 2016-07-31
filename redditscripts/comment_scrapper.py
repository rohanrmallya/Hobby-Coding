''' Comment Scrapper scrapes through all the comments for a particular user /u/user and stores them in a user.txt '''

''' 
Copyright (c) 2016 Rohan Mallya

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
'''


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
