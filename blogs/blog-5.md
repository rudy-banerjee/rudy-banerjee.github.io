Thoughts about caching

Monday 06/30/2025

I was reading a [blog post about caching](https://buttondown.com/jaffray/archive/caching-is-an-abstraction-not-an-optimization/) recently, and found it to be a bit different from the typical dev blog post.

It's main point is straight to the point: caching is an abstraction, not an optimization.

What does that mean?

I've looked into caching algithms in the past, and found them to be a bit strange to read about.

The algorithms themselves aren't too complicated to understand, but they always seemed to rely heavily on some hidden context about the data they were designed for.

You will see this for yourself if you go and read about caching algorithms out there. FIFO caches, LRU caches, the Clock page replacement algorithm in operating systems, even new and interesting ones like [Sieve](https://cachemon.github.io/SIEVE-website/blog/2023/12/17/sieve-is-simpler-than-lru/) for web caching (some further technical discussion on the topic is [here](https://news.ycombinator.com/item?id=38850202)).

However, one thing remains true when studying these caching algorithms: data lifetimes and access patterns inform the caching policy.

This applies to any sort of data caching like memory hierarchies with SSD vs RAM vs L1 cache alignment, or even Redis caching for web stuff like text/image/video data or user session information or anything like that.

In the blog post, the author makes the point: "My feelings now are that that perspective on caching is wrong, or at least incomplete. Having worked on software recently chiefly concerned with moving data between object storage, disk, and memory, I think now caching is probably best understood as a tool for making software simpler."

- (What is interesting about this idea that disagrees with the common sense intuition of "This is obviously false, caching was invented for the purposes of optimizing data access"?))

Consider the [LRU cache](https://leetcode.com/problems/lru-cache/description/). What are the benefits of this over the FIFO cache and why? What situations would either caching policy be useful?

It's difficult to get a good intuition about this without actually working on programs with fairly large-scale data accessing, whether it's a large web app being served to many users, or a program that handles a large number of individual manually managed allocations, or even the KV cache of a transformer model.

Games have arena allocators and frame buffer allocators.

I don't really know how the transformer KV cache works, but it was probably developed by studying the bespoke ways in which transformer model memory pages were referenced from RAM/SSD.

These are different types of algorithms from the FIFO, LRU, LFU, Clock eviction policies, because they all depend on their own context-dependent data access patterns. Having a frame buffer in an LLM makes no sense.

This is where the core of the argument comes in: "Data access is sufficiently unpredictable in real-world workload that we are forced to rely on heuristics, and fitting of heuristics, that we have to do this in any remotely realistic system. The belief that I'm doing this to the exclusion of some smarter, bespoke data movement strategy is an illusion."

- (Is this true? If it is, then why do all of these caching policies exist in the first place if more ordinary heuristics would do the job for most cases when dealing with unpredictable data access patterns?)
- (Clearly I have a lot to learn about the ways in which caching systems can break down)

Would it be possible for anyone to generate their own findings of a transformer model KV caching strategy if they tried observing and tracing the different pages of memory that was accessed?

Probably.

- I should take a harder look at this stuff, either by observing the data access patterns myself and testing out some of those caching strategies)

