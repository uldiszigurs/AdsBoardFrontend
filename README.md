# AdsBoardFrontend
How to run : 
    1. npm install
    2. npm start
Make sure backend is running. https://github.com/uldiszigurs/AdsBoardBackend 

Known issues :  ()
- image uploading to frontend from backend is not working (this is backend fault, currently have hotfix of constant image)
- singlePost is being rendered additional time, also comments are being fetched twice (need to check state & async related functions to that state)
- commment form field is not being resetted after sumbitting the comment (could create ref and .reset())
- category posts section is not working properly (works from PostMan, fetching at least)

### Components: 
- [X] Navigation bar
- [X] Post preview (no comments)
- [X] Comments List
- [X] SimplePost 
- [X] SimpleComment
- [X] and others for reusing 
### Pages:
- [X] Register
- [X] Login 
- [X] Home (All posts by user) 
- [X] Create post, includes uploading image
- [X] Posts (all posts from all users)
- [X] Individual post by id
- [ ] PostsByCategory /w search

## TODO: 
- thumbnail images for post preview
- fix fetch by category 
- more TODOs will be added







