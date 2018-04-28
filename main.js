// defination pf class
var YoutubeVideos = /** @class */ (function () {
    // constructor
    function YoutubeVideos(videoTitle, channelName, noOfVideos, category, views, description, likes, subscribed) {
        var _this = this;
        // method to get the title of the video
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        //method to get the number of likes on videos
        this.getNoOfLikes = function () {
            return _this.likes;
        };
        //subscription
        this.isSubscribed = function () {
            return _this.subscribed;
        };
        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.noOfVideos = noOfVideos;
        this.category = category;
        this.views = views;
        this.description = description;
        this.likes = likes;
        this.subscribed = true;
    } //end of constructor
    return YoutubeVideos;
}());
var myVideo = new YoutubeVideos("What is Artificial Intelligence Exactly?", "ColdFusion", 45, "Science & Technology", 625000, "The Future", 25000, false);
console.log("Title : " + myVideo.getVideoTitle());
console.log("Subscription : " + myVideo.isSubscribed());
console.log("Likes : " + myVideo.getNoOfLikes());
//social profile class
var SocialMediaProfile = /** @class */ (function () {
    function SocialMediaProfile(firstName, lastName, fullName, dateOfBirth, homeTown, livesIn, contacts, enducation, noOfFriends) {
        var _this = this;
        this.getFullName = function () {
            return _this.fullName;
        };
        //calculate age
        this.getAge = function () {
            var birthYear = _this.dateOfBirth.split('/');
            var birthYear1 = parseInt(birthYear[2]);
            var age = 2018 - birthYear1;
            return age;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.homeTown = homeTown;
        this.livesIn = livesIn;
        this.contacts = contacts;
        this.enducation = enducation;
        this.noOfFriends = noOfFriends;
    }
    return SocialMediaProfile;
}());
var myProfile = new SocialMediaProfile("Vaibhav", "Chaudhari", "Vaibhav Dipak Chaudhari", "02/11/1994", "Nagpur", "Delhi", 8888888888, "B.E", 574);
console.log("Full Name : " + myProfile.getFullName());
console.log("Age : " + myProfile.getAge());
