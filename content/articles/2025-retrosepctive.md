---
title: "2025 Retrospective"
date: 2025/12/10
description: "A look back at a year of uncompleted projects."
---

# 2025 Retrospective

To start off my site, I want to be able to start from a fresh creative slate. In every year-end reflection I've done, a recurring pattern has been to get myself to start making smaller projects, and to finish existing ones in lieu of starting new ones. This comes up because every year, I have a growing pain from continually not finishing projects. In the last few years, my one notable release is The Archipelago, in 2022.

I've been mulling over the relationship between project completion and sharing progress and status updates online, which may bea large contributer to my feelings. The more recent timing of this reflection has coincided with no longer regularly posting on major social media platforms Twitter and Instagram. 

My main goal with this post is to help myself perceive these incomplete projects as worthwhile, develop a framework for understanding why projects were abandoned when they were, and create a solid plan for 2026 and beyond. First, I'll start with projects I've done a substantial amount of work on, but haven't shared with anyone and have abandoned. Secondly, I'll look back on smaller projects I've felt are 'completed'. Lastly, I'll take a look at what I'll be carrying forward with me, in order to leave the rest behind.

## The Abandoned Projects

#### Farm TD - Jan 2021

![](/images/20251210/farmtd.gif)

This is a fully complete and playable prototype of a Tower Defense game inspired by Sunken Defense custom maps on Starcraft Broodwar. I had a couple of unique takes that I knew I wanted to incorporate: Enemy units should not be on a path, but use pathfinding to navigate through a user-defined maze, and the enemies should try to capture an object in order to make the maze creation and navigation less static. One of my main motivations, and ultimately downfall, was being obsessed with trying to make the game multiplayer (this will be a repeating pattern in this section of the list). 

In the end, I had a completely playable game with levels, multiple enemy type, progression with tower upgrades, and a way to win and lose. Painfully, once I reached this point, I wasn't quite satisfied with the loop, had a huge amount of work adding online multiplayer to the game, and promptly abandoned the project. This was a very early project of mine, at this point I didn't even see myself as a 'game developer', and was making this purely as a hobby on top of my web development work and practice. I didn't know what the pathway to a release would even be.

This was one of the strangest experiences for me to look back on one of my earliest attempts at solo dev, and to open a basically complete game. Though it would require a lot more content, polish, and balancing to fun to play more than once, the game is systems and art complete. Of the ones on the list, this is the one I'd be most likely to try to pickup again.

Learnings:
- It's wasn't enough for me to work on a game alone and silently, even if I get it to a playable state. Not having a plan or goal for the project made me lose a lot of motivation, and I didn't have any real milestones to hit in terms of where I wanted the game to end.
- It's really hard to feel like your game is missing an wow factor after you've built out a lot of systems. I've learned a lot from recent projects about being willing to keep re-working the core game play loop, but during this project's development I didn't have a great idea on how to keep going.
- I had a real fear of showing people the game. To this day, I don't think I've asked anyone to play it and give me feedback.

#### Mon Maker Land - March 2021

![](/images/20251210/Pasted%20image%2020251210163026.png)

Coming off of working at HelloFresh, I felt the overconfidence only an intermediate developer could have, that I had finally gained all the skills I needed to make any project into reality. I had learned how networking works, and had gained the ability as a full-stack programmer to write both client and server code. I had a couple months of unemployment to create a meaningful project, so I decided to go all in on Mon Maker Land.

I was really inspired by GBStudio as a time, as a project written entirely using web tooling, and I wanted to be able to use my web development abilities to make a game engine of my own. Mon Maker Land was to be a Pokemon MMO maker, where you can make your own online multiplayer version of pokemon easily.

![](/images/20251210/Pasted%20image%2020251210161022.png)

This project ended up being a disaster. I spent a month working on it full time, and at the end of it, had a web app where a user can move a camera around a grid map, and 3 empty repositories. This is an even more ridiculous result to me now, as it's something either AI or myself in Unity could whip up in 5 minutes.

Learnings:
- Don't use 'new technology' unless the goal is to use the project to learn. I wasted a lot of time with the sprite rendering and tile mapping setup, whereas using an off-the-shelf library I'm familiar with would have sufficed.
- I was not good at setting early MVPs and results at the time. The earliest working version with my original vision would have taken months. I don't think I even had an idea of timelines at the time, just that I knew I *could* make the project.

#### Crossover Clash - October 2021

![](/images/20251210/Pasted%20image%2020251215181322.png)

Crossover Clash was our first attempt at making a 'real' indie game. Inspired by my competitive melee background, it was to be a 2v2 platform fighter with fixed teams and control-point focused gameplay. To help us take it seriously, we crafted a pitch deck and took the game through the Fund Futures program run by Hand-Eye Society remotely during covid.

![](/images/20251210/crossover%20clash%201.gif)

While we had a ton of really great ideas for the project, the implementation was going at a snail's pace. We were struggling with the animation pipeline, and figuring out the state machine and physics setup for a fighting game with online multiplayer in mind meant doing a lot of infrastructure abstraction before any real gameplay. We had a working prototype in place, but without any confidence that we'd be able to scale it to a real release.

This one felt more embarassing since we had taken it through a multi-month program only to realize we weren't going to continue. Despite being told that it's very normal for this to happen, it's always going to be difficult to let weeks of work go to waste. 

Learnings:
- New technology again was a barrier, both using Godot for networking, and trying to make a fighting game with complex animation states.
- We had worked heavily on a concept before any playable prototype. Committing to a program like this without any validation either market or gameplay was a huge sunk cost for us. With CAC, we had a fun paper prototype before doing any additional work.

#### Tales of SM & Pokemon SRPG - April / July 2022

![](/images/20251210/talesofsm.gif)

As a child, I was heavily participating in online fangame communities like MFGG and ZFGN. I had a feeling that a good way to work on building a fanbase and community around my projects was to release a high quality fan game for some nintendo property.

![](/images/20251210/pokemon%20sprg.gif)

This was a fairly short-lived idea. I had spun up a couple of projects half heartedly, but similarly did not have the ability to scope a project into something small, and balance working on a project while working, instead of treating it as a jam project and doing it under a shorter period of time.

Learnings:
- Again, poor scoping, but more specifically not looking for short cuts where possible. Spending even a week without a playable end product is too long, since the motivation will leave before then.

#### Spacefarmer Showdown - May 2025

![](/images/20251210/sfs.gif)

Spacefarmer Showdown, a farming simulator meets auto battler, was a joint project with my friend Brett. At the start of 2025, I had a belief that the way forward for me as a game dev was to make small commercial projects, with the plan to release a commercial game (paid) within a short time frame (<3 months), targeting a <$5 price (I was unemployed at the time). I had been working for a few months fulltime on Creatures after Calamity, and was not seeing an exit point anytime soon. I also was influenced by increasing participation in an online Indie Studio community, where I felt like the signs were pointing to making games this way as being the most sustainable.

![](/images/20251210/Pasted%20image%2020251215171244.png)

I had a faux pitch-night with some of my friends where I pitched 4 game ideas, and had them pick the one that seemed the most exciting. This was what Spacefarmer Showdown ended up being. We jammed it during TO Jam 2025, and had a somewhat playable prototype near the end, where you built a farm on your planet, and faced off against ghosts of other players to feed the space alien.

Unfortunately, this project hit at a time where I was heads-down on CAC, I had just started a new job, and I didn't see a short-term finish line for this game. There were a few massive changes that I thought the game would need to be viable, and that didn't fit my original plan of finishing a game quickly in 3 months and releasing it. Realistically, even if the original version was fun off the bat, the idea itself would probably have required more than 3 months of work to see it to release.

Learnings:
- Picking an idea off of a pitch deck doesn't necessarily guarantee success. Though this idea was the most exciting on paper, the first iteration of the gameplay loop didn't live up to the idea I had in my mind. 
- Missing timelines for me personally is very demoralizing, especially with a larger-scale project in the background.


#### Overall learnings:

- I think for any new game projects that I want to start, big OR small, I would want to start from a graybox'd or paper playable prototype, to ensure that the gameplay itself has legs. It's been demoralizing to spend a lot of time on a game where the core gameplay itself is NOT engaging from the start, and end up with a game that has nothing special about it, or needs a ton of work.
- It's better to have a simple version of your game that is complete that you add onto instead of planning for bigger versions down the line. Most importantly this is in regards to multiplayer -- the common wisdom online is you can't retool your game to be multiplayer, but even so it's better for a game to have no multiplayer than to be abandoned. A successful version of your game can have a multiplayer sequel or a painful patch.
- With some of these projects, especially SFS, I did have this in mind, but even so, I focused more on infrastructure and planning more than keeping it simple. I could have realized the idea was going to be too difficult once we had to do many revisions before getting something playable.

## Sort of completed projects

*The following projects are all public and 'playable' in some way, which were made in a jam context or with friends, with no intention to continue working on it. I mostly wanted this section as a motivational positive catalog, to reflect that I have completed some things within this time frame that I'm happy with where it ended, despite not being large projects.*

#### Soup du Jour - November 2021

![](/images/20251210/soupdujour%202.gif)

Made in a group of 3 for Ludum Dare 49, Soup du Jour has you steering a ship while simultaneously chopping vegetables and making a soup. A very janky experience that was my first attempt at doing a 3D physics-based game. We wanted to test working with a new collaborator as well, which was a good experience.

#### How To Court the Demon Monarch - July 2022

![](/images/20251210/demonmonarch.gif)

Made for Global Game Jam 2022 with a group of 4, How to Court the Demon Monarch, in which you increase your notoriety at a party in an attempt to woo the Demon Monarch. I was glad for the opportunity to work with some long-standing friends, and we ended up all being satisfied having made something, even if we didn't feel like there was a path forward with the game.

#### Planetary Resonance - August 2024

![](/images/20251210/planetary%20resonance%201.gif)

A bizarrely complicated music theory rhythm game I made for GMTK 2024, which I intended to be more of a toybox that make fun sounds than a playable strategic game.

#### Pokeskill - May 2020

![](/images/20251210/Pasted%20image%2020251215175000.png)

A simple web-app built to learn Svelte, and also to help improve my type matchup understanding as I was learning to play competitive pokemon for the first time.

#### 100 days of drawing - April 2023

![](/images/20251210/Pasted%20image%2020251215175838.png)

As part of a group challenge in 2023, a group of friends decided to do a 100 days challenge, where we would all commit to doing an art practice for 30~ minutes a day for the first 100 days of the year. I had always wanted to learn to draw, and I had a great experience learning from my friends, sharing daily, and feeling a forward momentum in my life.

#### 3D platformer minigame - December 2025
![](/images/20251210/goofy.gif)

To share something recent, Kaelan and I made a simple platformer minigame, largely as a pre-cursor to the feelings I had that led me to write this post, which is that we wanted to work on something new, something small, to remind ourselves that we could.

## Projects I will continue

*These will get their own posts and devlogs down the line, but I wanted to have an idea of projects I did want to return to, to separate them from the ones I want to leave behind.*


#### Tournament Winner - March 2025
![](/images/20251210/new%20ui%20in.gif)

Tournament Winner, role-playing esports simulator, is a love letter to Super Smash Brothers Melee tournaments.

We abandoned this project because we weren't happy with the feeling of the gameplay, primarily the matches, and like other projects above, once it reached a threshold of time spent, I wanted to focus on our larger project CAC. For this one, however, we were so close to the finish line that I feel it would be a huge disservice to the work we spent on it to leave it unreleased.

#### Melon Patch - Circa 2019
![](/images/20251210/eujpDp.png)

Before 2020, I had started working on a board game version of the McGill Game Jam game I made in 2018. I had no idea what I was doing at the time design or marketing wise, and once 2020 hit I had a huge pause on the game, left in a state that was somewhat broken but had reasonable gameplay ideas.

I mostly want to revisit this game because the art is all finished, I have an idea of the production scale I want to hit with it, and doing just the gameplay redesign of it should be the most fun part.
