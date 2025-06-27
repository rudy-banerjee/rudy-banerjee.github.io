# Technical Guide to System Calls

_Thursday 06/26/2025_



I found an interesting link on Twitter (here)[https://mohitmishra786.github.io/chessman/2025/03/31/Technical-Guide-to-System-Calls-Implementation-and-Signal-Handling-in-Modern-Operating-Systems.html].

It goes deep into the realm of system calls and the transition between userspace and kernel space operations. Very interesting stuff.

I think that all of this isn't super necessary to know about unless you are working on a project which requires highly performant software, but also dealing heavily with I/O from storage or a network.

Most of my thoughts about high performance code seems to be around stuff like SIMD or memory hierarchies/caching, but only by learning more about databases and the Zig compiler have I gotten a better overview of where some of the bottlenecks are.

This is where the rubber meets the road.

I wonder how io_uring works and would be related to this.

I still don't really have a great idea of how software interacts with the underlying OS/hardware. It seems like studying the OS system calls might actually be a good way of thinking about this.

Studying compilers and databases and browsers would be useful too, because those tools seem to be the best case studies for software highly optimizing their syscall usage.