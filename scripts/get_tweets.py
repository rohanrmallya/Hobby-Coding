import tweepy

# set the below variable accurately

consumer_key = ''
consumer_secret = ''
access_token = ''
access_token_secret = ''

# Authentication

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

# Document to write to

document = open("test2.txt", "w")

# Empty list initially, which will store all the tweets
tweetCollection = []

# Assign username to variable screen_name.
# count is the number of tweets that has to be retrieved. A Maximum of 200
# tweets can be retrieved at once, not more
tweets = api.user_timeline(screen_name="username_goes_here", count="200")

# tweets will return a list of tweets which we will extend to
# tweetCollection which holds all the tweets
tweetCollection.extend(tweets)

# Get the id of the last tweet -1. This is done to avoid repetition
# tweet, the tweet with that particular ID will repeat

lastTweetID = tweetCollection[-1].id - 1

# loopVariable to control the while loop. This is NOT the best way to do it. But works to explain the algorithm.
# loopVariable holds the id of the last tweet in the tweetCollection
loopVariable = tweetCollection[-1].id


while(loopVariable):
    tweets = api.user_timeline(
        screen_name="username_goes_here", max_id=lastTweetID, count="200")
    tweetCollection.extend(tweets)
    lastTweetID = tweetCollection[-1].id - 1
    print("Getting all tweets before " + str(lastTweetID))
    print("Number of tweets: " + str(len(tweetCollection)))

# If the ID of the last tweet in tweetCollection = loopVariable, we stop the loop's execution.
# Else we assign loopVariable the ID of the last tweet in the tweetCollection.
# When the loop reaches the last tweet, the id of the last tweet will be equal to the loopVariable as set below.

    if(str(tweetCollection[-1].id) == str(loopVariable)):
        loopVariable = 0
    else:
        loopVariable = tweetCollection[-1].id


 for tweet in tweetCollection:
     document.write(str(tweet.text))
     document.write("\n")
     document.write("\n")

# The maximum tweets that can be retrieved is 3,200. This is a limitation of the API and does not have to do anything with the code
