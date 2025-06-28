# Growing as a developer in the age of LLMs

Saturday 06/28/2025

I was watching a [video](https://youtu.be/lz451zUlF-k?si=TycZL6qElO7PxX6X) interview with a famous CS professor named John Osterhout.

He cares deeply about good code design and strategies for reducing code complexity, and this interview had two striking ideas I had to contend with.

## Tackling hard projects multiple times

One was that all of his students in his Software Design class were forced to implement the Paxos distributed consensus algorithm with minimal assistance and information beforehand.

He strongly believes in the idea of creating a project twice, and insists that the first implementation of an idea/project is discovering all of the hidden constraints and pitfalls in the project, and the second implementation will have a more elegant design that takes the discovered constraints and pitfalls in mind.

And his class project was designed with this philosophy in mind, where students will struggle through one 2.5k - 3k line of code implementation of the project, then he would conduct extensive code reviews of the projects, reading each one line by line and marking them up on paper like a high school English class essay, and then the students would submit another version of the project with less complexity and a more elegant design.

I somewhat agree with this idea, specifically in the domain of more advanced projects designed with a specific, polished end goal in mind.

I experienced something like this before in a React/TypeScript version control application for datasets, and an NES Gameboy emulator project I tried hacking up a few times.

Those are two projects I've tried working on where I felt the first iteration of building felt like straining on the toilet, trying to get shit out.

Successive iterations of the projects came out much easier and smoother, due to my exposure to weird bugs and constraints I discovered the first time around, which were partly caused by the mis-interaction of tools and the programming environment.

Those bugs/uncovered constraints led to me coming up with better designs when I tried a second or a third time.

(If you want some examples of this, make an issue on the GitHub repo)

However, one interesting aspect of this story he mentioned is that PAXOS is quite a difficult algorithm to implement, usually reserved for Master's students studying distributed systems, moreso than a random web app and even an NES emulator (which isn't a walk in the park either).

He had students chruning out 2.5k - 3k LOC codebases for this project, which is tough to get to when you're a unviersity student and still learning about data structures and algorithms and OS concepts and stuff like that.

I believe someone could do this somewhat minimally using Golang and simulating machines communicating by instead having different processes spun up at the same time, each with their own port on localhost, communicating with each other over plain old TCP.

Even so, this isn't an easy thing to do.

CS students and New Grads, you should probably try thinking about this problem (or similarly complex problems) in a similar way.

(some similar problems may be creating a stripped down terminal web browser that can display a basic subset of HTML/CSS from locally hosted endpoints, or a compiler or a Gameboy emulator)

It is tough to get good at programming and software design without actually trying to implement difficult projects on a regular basis.

([This place](https://codingchallenges.fyi) is a good place to start)

That might sound a bit daunting, but I find that knowing you can try implementing any particular project multiple times, no matter how stuck or frustrated you get the first time, a bit comforting, because it's less stressful for me to tackle weird, fucked up bugs if I know I can try again in the future, and it will be easier the next time around.

So go do it.

## LLMs are maturing as a way of rapidly gathering context about a problem

This section is going to be shorter because I have to leave the house soon.

But regardless of what you think about LLMs, this is something to consider. The genie has been out of the bottle for a long time.

Towards the tail end of the interview, John Osterhout mentioned that he tried contributing to the Linux kernel, and that the documentation absolutely sucked, but ChatGPT was incredibly knowledgeable about it, because it had absorbed a ton of the discussion and forum/blog post context around it.

This was a bit mindblowing of an idea for me, because I hadn't realized the extent to which ChatGPT knew about a staggeringly complex project like the Linux kernel.

John Osterhout is an extremely veteran programmer and has experienced a wealth of bugs and strange software patterns I can barely imagine.

However, in this interview he mentions that it was the first time he had made a contribution to the Linux kernel, and it didn't hallucinate a whole lot.

What that means for a guy like me, I don't really know. I certainly am not in a position to contribute to the Linux kernel any time soon.

But that idea of diving deep into highly complex and very well known open source project codebases like Chromium or SQLite, and being able to rely on ChatGPT for helping me navigate and understand the codebase is actually a game changer in terms of the speed at which I would be able to grow as a developer.

Imagine it: having an in-depth explanation of every important software design innovation over the past 50 years at your fingertips.

What would you do with this?

ChatGPT has gotten markedly more stable and reliable over the past few years, and I was blown away by how well it could answer and explain weird questions I had about the tools I was using, especially in an interactive chian of thought line of questioning, where it would ask me if I wanted to go deeper at the end of every response.

And at some point I just started trusting it and seeing how deep it could take me on any specific topic.

Doing this requires some attenion to detail and enough curiosity to continually ask questions and go on these research deep dives, but once you get the hang of it, it's the ultimate learning strategy.

I don't think I need to explain how useful most people find ChatGPT, but what I've been realizing over time is that ChatGPT and Claude can now basically function as replacements to the web and Googling things, which is amazing.

The idea of locally hosting and purely relying on a raw DeepSeek R1 instance (or Llama 5 whenever it comes out) for doing my research is a crazy idea, but it is possible.

The Supreme court ruled that training models off of proprietary data counts as "fair use" if you acquire the data legally, like the way libraries buy and digitize books.

This means LLMs certainly won't be getting worse any time soon, so at this point all there is to do is just lean into it as hard as you can.

Try all the models for days/weeks. Try the coding agents. Maybe guy a powerful desktop with enough RAM to host your own models.

Don't be stupid and offload all your critical thinking to these models, but realize that the amount of thought you can offload to the internet is potentially much less than the amount of thought you can offload to one of these models.