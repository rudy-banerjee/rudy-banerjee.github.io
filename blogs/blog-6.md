The context of your problem

Thursday 07/03/2025

I was watching an interesting interview with one of the developers of TigerBeetle, a company trying to build the world's fastest and most reliable financial database (located [here](https://youtu.be/V8Bg55lTUCw?si=G60pMuOFyyfR4sXt)).

For context, TigerBeetle has been publicly documenting some of their system design and development choices with their database to great interest from a lot of developers.

This methodology is captured in their [Tigerstyle practices](https://tigerstyle.dev), based off of [NASA's guidelines for writing reliable software](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code).

Writing programs that adhere to those ideas is pretty tough.

For example, at around the 18 minute mark of the interview, the developer begines talking about how their database allocates all the memory they will need for the lifetime of the running program at initialization, and then reuses memory from that pool as necessary.

However, the developer also gives an interesting warning:

"In programming, the most ever important thing is the context. And [the] context for TigerBeetle is very, very specific. We are writing a highly reliable database for financial transactions. If your problem is kind of similar ... then what I am saying might make direct sense. But if your problem is different, then please take this with a grain of salt."

Unfortunately, I have come to the realization that JavaScript, and now TypeScript, are, at this point, the most ubiquitous languages in the world for writing full-stack application code, and a large number of programs don't need to be written using anything else.

Node.JS and it's single-threaded event loop are not usually bottlenecks in handling server traffic.

JavaScript is THE language for frontend development of any kind, and it has been designed and molded over time to be as optimized of a language as possible for sending across the internet and running on different machines.

The ecosystem evolves at a breakneck pace, and framework churn is a common thing people complain about.

However, that's partly because it's one of the most widely used programming languages for SaaS products, and when money and millions of developer hours are invested into web-based SaaS products who are all competing with each other on the frontiers of delivering customer value, some amount of change is expected.

Python doesn't necessarily have this problem because it shines in backend scripting and scientific computing environments, either as glue script code or as simulation/AI software.

If you are trying to write a fleet of backend microservice systems in the cloud, Golang the language and ecosystem for that.

If you are trying to write high performance software in which manual memory management, CPU cycles, or interactions with hardware are necessary, then C++/Rust/Zig are the languages for that.

If you are trying to write OS kernel code, then C and the Unix environment are what you need.

Big data systems rely on either Python for it's numerical processing libraries written in C under the hood, or Java for the battle-tested Apache suite of products that have had the bugs ironed out of them over several decades.

If you are trying to embed a simple scripting/configuration language within another software product, Lua could be a very good choice.

SQL is going nowhere.

Functional programming languages are an interesting curiosity, and Rust is starting to make a name for itself in the security space due to the high guarantees it can provide about the code that be written using it, but other than Erlang/Elixir at WhatsApp and Haskell in language purist niches within the industry, they are not a concern for most teams.

There's a reason for this: most code has a lifetime, in which the code is written, stays for a few years, and then is either over-written or deprecated/thrown away in favor of a new system/feature.

In reality, these boundaries between languages are somewhat arbitrary, because as long as a language is able to send and receive HTTP requests, it can be used for the backend of a software product.

However, the language and it's ecosystem dictate these boundaries to some extent, where a language and it's standard library/tooling is designed with specific design choices in mind (compiled vs interpreted, strong type safety vs no strict typing), and an ecosystem may grow somewhat organically over time due to the types of code that is convenient to write using them.

However, JavaScript is, at this point, one of the only contenders for an application with a frontend, without considering Swift and Kotlin for app development (Kotlin could be an interesting language to consider as a new JVM language, but since many Java teams are still using Java 8, it's traction within the JVM world is a lot slower).

