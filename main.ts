// defination pf class

class YoutubeVideos {

    //properties

    videoTitle: string;
    channelName: string;
    noOfVideos: number;
    category: string;
    views: number;
    description: string;
    likes: number;
    subscribed: boolean;

    // constructor
    constructor(videoTitle: string, channelName: string, noOfVideos: number, category: string, views: number,
        description: string, likes: number, subscribed: boolean) {

        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.noOfVideos = noOfVideos;
        this.category = category;
        this.views = views;
        this.description = description;
        this.likes = likes;
        this.subscribed = true;
    }//end of constructor

    // method to get the title of the video
    getVideoTitle = () => {
        return this.videoTitle;
    }

    //method to get the number of likes on videos
    getNoOfLikes = () => {
        return this.likes;
    }

    //subscription
    isSubscribed = () => {
        return this.subscribed;
    }

}

let myVideo = new YoutubeVideos("What is Artificial Intelligence Exactly?", "ColdFusion", 45, "Science & Technology",
    625000, "The Future", 25000, false)

console.log("Title : " +myVideo.getVideoTitle())
console.log("Subscription : " +myVideo.isSubscribed())
console.log("Likes : " + myVideo.getNoOfLikes())


//social profile class

class SocialMediaProfile {
    //properties

    firstName: string;
    lastName: string;
    fullName: string;
    dateOfBirth: string;
    homeTown: string;
    livesIn: string;
    contacts: number;
    enducation: string;
    noOfFriends: number;

    constructor(firstName: string, lastName: string, fullName: string, dateOfBirth: string, homeTown: string,
        livesIn: string, contacts: number, enducation: string, noOfFriends: number) {

        this.firstName =  firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.homeTown = homeTown;
        this.livesIn = livesIn;
        this.contacts = contacts;
        this.enducation = enducation;
        this.noOfFriends = noOfFriends;
    }

    getFullName = () =>{
        return this.fullName;
    }

    //calculate age
    getAge = () =>{
        let birthYear:string[] = this.dateOfBirth.split('/');
        let birthYear1:number = parseInt( birthYear[2]);
        let age:number = 2018 - birthYear1;
        return age;
    }
}

let myProfile = new SocialMediaProfile("Vaibhav","Chaudhari","Vaibhav Dipak Chaudhari","02/11/1994","Nagpur","Delhi",
8888888888,"B.E",574)

console.log("Full Name : "+myProfile.getFullName());
console.log("Age : "+ myProfile.getAge());


