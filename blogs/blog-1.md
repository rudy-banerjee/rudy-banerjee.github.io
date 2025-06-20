# Wicked Problems

I don't know where I got put onto the idea of Wicked Problems, but somehow or another, I found myself on a website, looking at [the following blog post](https://blog.codinghorror.com/development-is-inherently-wicked/).

Something here captured my attention.

> As far as I'm concerned, all software development can be classified as a Wicked Problem. It's far too complex and far too annoyingly micro-complicated to allow for a whole lot of rational planning. I know from personal experience that I can never get very far without writing code to better understand the problem I am trying to solve.

Very interesting stuff. I read more into it, and found in [an article](https://increment.com/planning/software-development-as-a-wicked-problem/) that Wicked Problems seemed to refer to a class of real-world project implementation complexity.
I understood Wicked Problems as projects with such an undefined scope that you have to try programming them out to generate the requirements for what you are building.
I talked about this idea with a few people at the UPL (Undergraduate Project Laboratory at the University of Wisconsin-Madison), and wasn't able to convince them that this was a particularly useful way of looking at projects.

At the time, I had been working on various side projects, but was unsure about how to start tackling larger scoped projects, like building something like a social media platform with users, or an NES emulator (someday I will write a blog post going into the details of this as well).
I had zero plan in mind for these more serious projects going in, and the idea of wicked problems provided me with a convenient justification for this.
If it's impossible to plan a large, non-trivial project from scratch, so why bother planning at all?
Why not dive head-first into it with nothing but a vague vision and unearned self-confidence?

But the idea of Wicked Problems provided me with a clearer understanding of how trying to tackle larger-scoped software projects was different from class projects.
Designing and building intricate full-stack software projects on your own without a clear goal isn't easy, and it's a skill CS majors have to pick up on without much help from the university.

I decided to try tackling what I thought seemed like a Wicked Problem: building a web-based NES emulator in JavaScript.

Building a small game console emulator is remarkably hard to start, because it involves emulating the behavior of an entire computer through just code constructs.
I had first heard about the idea of emulating a CPU in Java by just representing the CPU as a class that just decodes integer opcodes and does bit arithmetic on them, and representing memory as a large array of integers.

So I started building the project from the CPU side with another guy (Lucas Scharenboch, a much more diligent guy than me). There were at least 50 opcodes, each involving consulting old CPU documentation, implementing fairly complicated bit arithmetic, and strenuously testing each opcode for weird bugs.
In addition to the mountain of somewhat labor-intensive work for implementing the opcodes, we also had to figure out how the Picture Processing Unit worked, which was a sperarate piece of rendering hardware and required complex timing synchronization with the CPU.
I got mired in the micro-complexities of different parts of the project, and then gave up. The original build plan I had come up with didn't do enough to keep my enthusiasim in the project alive.

The second time around, after just not thinking about it for a year, I decided to build the emulator starting from the display screen, in such a way where I could view the evolution of the project through running programs through the CPU and seeing what it output on the display.
It was easier beacuse I had previous development experience on this project and basic understandings of the complicated relationship between different components, and because I could plan development around those challenges.

I started just an HTML canvas element, with a basic JS program to bounce a ball across the canvas at the resolution and pixel density of the original screen I was trying to emulate.
I was then able to build better debugging tools around the idea of the display.
Additionally, I just completely stopped writing unit tests and instead tested my code out using real videogame data and smaller assembly programs I had to manually write in CPU opcodes, which was a better idea.
A much faster and more interesting feedback loop that allowed me to demo the progress of the emulator in an easily viewable way, and kept me anchored to the goal of the project throughout development whenever I ran into heavy enough micro-complexities to distract me from the overarching scope of the project.

The idea of Wicked Problems makes more sense in the world of the early 2000's, when waterfall project management involving months of upfront design work and tail-end QA/testing was much more common in the industry, and Agile development was a much more fringe idea.
It didn't end up being any sort of silver bullet as a strategy for getting projects done; you're still bounded by the amount of effort you put in and weird bugs you're willing to put up with.
Additionally, I realized that even though the emulator project is difficult, it doesn't seem to come close to the scope of a Wicked Problem, which seems to refer more towards multi-year projects involving collaboration between teams of people.
But it's a useful concept to keep in mind when tackling large-scale projects.

An interesting idea to consider here is that Agile seemed to have emerge as a solution to tackling software projects that could be classified as Wicked Problems, which is a development process designed to achieve high speed iteration through fast feedback loops.
If you start with the assumption that your goals and success criteria aren't super clear, and you need to develop in a manner that consistently prioritizes creating usable software, turns out your software will be usuable to a higher degree than designed otherwise.
