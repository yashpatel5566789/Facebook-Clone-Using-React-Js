import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSffonWEay8KsYosykanM2WBWR9vTP0cIeesefxFwFAZz6xcnR-PgkgkM9tYp-4d5mJScV3zEYsunUfpyl49jmaDQh3OloCVjx3lg&usqp=CAU&ec=45695924"
            profileSrc="https://i.imgur.com/OpF8f9e.jpg"
            title='Yash'
            />
            <Story 
            image = "https://cdn5.vectorstock.com/i/1000x1000/50/14/lines-background-startup-vector-18095014.jpg"
            profileSrc="https://i.imgur.com/hKIUTgB.jpg"
            title='Shubham'
            />
            <Story 
            image = "https://cutewallpaper.org/21/teaching-wallpaper/Teacher-Background,-Teacher-Wallpaper-Free-Download-.jpg"
            profileSrc="https://avatars3.githubusercontent.com/u/36697896?s=460&u=4b6de15e3a4ed4cd7a1322dad35bb740dd5269d3&v=4"
            title='Rupesh'
            />
            <Story 
            image = "https://pbs.twimg.com/profile_images/1220997010834067457/e7XWkY-B_400x400.jpg"
            profileSrc="https://www.static-contents.youth4work.com/y4w/Images/Users/829695.png?v=20170415021535"
            title='Menu  '
            />
        </div>
    )
}

export default StoryReel
