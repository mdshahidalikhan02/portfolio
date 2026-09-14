// All facts below are sourced directly from Md Shahid Ali Khan's resume.
// Nothing here is invented — metrics, dates, and scope are quoted as stated.

export const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Md_Shahid_Khan_Resume.pdf`;

export const profile = {
  name: "Md Shahid Ali Khan",
  role: "Software Engineer",
  focus: "Distributed Systems · Financial Services",
  phone: "8809682225",
  email: "2000shahid2019@gmail.com",
  linkedin: "https://www.linkedin.com/in/md-shahid-ali-khan-aa18371b0/",
  linkedinLabel: "md-shahid-ali-khan",
  github: "https://github.com/mdshahidalikhan02",
  githubLabel: "mdshahidalikhan02",
  location: "Bangalore, India",
  summary:
    "Software Engineer with 3+ years of experience in Java and Spring Boot, developing microservices and distributed systems using Kafka, Redis, REST APIs, concurrency, and asynchronous processing in the financial services domain.",
};

export const metrics = [
  {
    label: "API response time",
    before: "10s",
    after: "<2s",
    beforeVal: 10,
    afterVal: 2,
    unit: "s",
    detail: "Caffeine-based L1 caching with tuned cache keys, TTLs, and eviction policies.",
  },
  {
    label: "Report generation time",
    before: "2min",
    after: "30s",
    beforeVal: 120,
    afterVal: 30,
    unit: "s",
    detail: "Same Caffeine L1 caching pass, tuned alongside the response-time optimization.",
  },
  {
    label: "Report workload volume",
    before: null,
    after: "50K+",
    beforeVal: null,
    afterVal: 50000,
    unit: "records",
    detail: "MDX queries against ActivePivot in-memory OLAP cubes for risk analysis and reporting.",
  },
  {
    label: "Transaction records analyzed",
    before: null,
    after: "100K+",
    beforeVal: null,
    afterVal: 100000,
    unit: "records",
    detail: "Rejected-transaction categorization by risk, via optimized SQL.",
  },
  {
    label: "Legacy scripts migrated",
    before: null,
    after: "70+",
    beforeVal: null,
    afterVal: 70,
    unit: "scripts",
    detail: "Unix shell scripts migrated to Linux and refactored for maintainability.",
  },
  {
    label: "Interns mentored → converted to FTE",
    before: null,
    after: "2",
    beforeVal: null,
    afterVal: 2,
    unit: "interns",
    detail: "Through code reviews and knowledge-transfer sessions.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Societe Generale",
    role: "Software Engineer",
    period: "July 2023 – Present",
    location: "Bangalore, India",
    project: "Financial Risk Reporting Platform",
    stack: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kafka", "ActivePivot", "Caffeine", "PostgreSQL"],
    bullets: [
      "Developed and enhanced Java/Spring Boot backend services and REST APIs for an enterprise financial risk analytics platform supporting NPV, NIM, GAP, sensitivity analysis, and regulatory reporting.",
      "Developed analytical reporting workflows using MDX against ActivePivot in-memory OLAP cubes, leveraging olap4j/qfs-olap4j for Java-based OLAP connectivity and RafalQuery APIs for analytical data retrieval, supporting 50K+ record report workloads across financial risk analysis and reporting.",
      "Implemented Caffeine-based L1 caching, optimizing cache keys, TTLs, and eviction policies to reduce API response time from 10s to under 2s and report generation time from 2min to 30s.",
      "Refactored long-running report generation into Kafka-driven asynchronous workflows, enabling concurrent report processing and improving API responsiveness.",
      "Implemented resilient Kafka consumer workflows with retry handling and MessengerClient consumers for automated email notifications on failed report batches.",
      "Implemented scheduled background jobs and dedicated thread pools for report, export, and cache-refresh workflows, with Resilience4j Circuit Breaker for failure handling.",
      "Contributed to Angular feature development and production bug fixes, supporting GitHub Actions CI/CD.",
      "Conducted code reviews and knowledge-transfer sessions, mentoring 2 interns who subsequently converted to FTE.",
    ],
  },
  {
    company: "Societe Generale",
    role: "Software Developer Intern",
    period: "March 2023 – July 2023",
    location: "Bangalore, India",
    project: "Rejected Transaction Impact Analysis & Script Migration",
    stack: ["Spring Boot", "SQL", "Linux"],
    bullets: [
      "Built a Spring Boot-based analysis platform to categorize rejected transactions by risk, processing 100K+ transaction records using optimized SQL queries to accelerate remediation workflows.",
      "Migrated 70+ legacy Unix shell scripts to Linux and refactored workflows, improving system compatibility, maintainability, and operational efficiency.",
    ],
  },
];

export type ProjectDetail = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  type: "Personal Project";
  tagline: string;
  stack: string[];
  featured: boolean;
  bullets: string[];
  caseStudy?: {
    problem: string;
    architecture: string;
    decisions: ProjectDetail[];
    failureScenarios: ProjectDetail[];
    performance: string[];
    tradeoffs: ProjectDetail[];
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "distributed-workflow-platform",
    name: "Distributed Workflow & Job Processing Platform",
    type: "Personal Project",
    tagline:
      "An asynchronous job-processing platform built around atomic state transitions, Transactional Outbox delivery, cache-aside caching, and idempotent handling of duplicate Kafka messages.",
    stack: ["Java", "Spring Boot", "Kafka", "Redis", "Caffeine", "PostgreSQL", "Resilience4j", "Docker"],
    featured: true,
    bullets: [
      "Built an asynchronous job-processing platform with persistent job lifecycle management, atomic state transitions, Kafka consumer groups, and concurrent workers.",
      "Implemented the Transactional Outbox pattern for reliable DB-to-Kafka event propagation, preventing dual-write inconsistencies during failures.",
      "Built Caffeine + Redis L1/L2 caching using the Cache-Aside pattern, along with Redis-based distributed rate limiting using atomic Lua operations.",
      "Engineered at-least-once Kafka processing with acknowledgements, offset management, atomic job claiming, and idempotency to handle duplicate message delivery.",
      "Implemented resilient job execution with exponential backoff, nextAttemptAt retries, Kafka error handling, and Dead Letter Topics (DLT), separating job and messaging failures.",
      "Added Resilience4j Circuit Breaker for Redis dependency failures and Redis distributed locking with expiry for coordination across application instances.",
    ],
    caseStudy: {
      problem:
        "A job-processing platform that writes to a database and publishes to Kafka is exposed to dual-write inconsistency — the DB commit and the Kafka publish can't both be guaranteed to succeed or fail together as two separate operations. Layered on top of that: Kafka's at-least-once delivery means the same message can arrive twice, multiple application instances can race to claim the same job, and a downstream Redis outage shouldn't be allowed to take every instance down with it.",
      architecture:
        "Each job is stored with persistent lifecycle state and moves through atomic state transitions, so concurrent workers can't both believe they own the same job. State changes that must be reflected in Kafka go through the Transactional Outbox pattern — the state change and its outbound event are written in the same local database transaction, removing the class of bug where one succeeds and the other doesn't. Caching is layered as Caffeine (in-process L1) and Redis (distributed L2) using the Cache-Aside pattern: the application checks the cache first and populates it on a miss, rather than the cache being transparently pre-warmed. Redis also backs distributed rate limiting via atomic Lua operations, and distributed locks with expiry for coordinating work across application instances, with a Resilience4j Circuit Breaker wrapping Redis calls so a Redis outage degrades gracefully instead of blocking every instance. Kafka consumption is built for at-least-once delivery — explicit acknowledgements and offset management, paired with atomic job claiming and idempotency checks so a redelivered message can't be processed twice.",
      decisions: [
        {
          heading: "Transactional Outbox for DB-to-Kafka propagation",
          body: "Writing the job state change and its outbound Kafka event in the same local database transaction removes the dual-write problem outright — there's no window where the database commits but the event never gets published, or the reverse. The database transaction is the single source of truth; publishing becomes a downstream, at-least-once concern.",
        },
        {
          heading: "Cache-Aside with Caffeine (L1) + Redis (L2)",
          body: "Caffeine serves the hottest, most recently used lookups in-process, with Redis as a shared L2 behind it. Using the Cache-Aside pattern — check cache, populate on miss — keeps the cache layer simple and puts the application explicitly in control of what gets cached and when, rather than depending on a transparent read-through layer.",
        },
        {
          heading: "Atomic job claiming + idempotency over exactly-once delivery",
          body: "Rather than building exactly-once delivery, the platform accepts Kafka's at-least-once guarantee and makes it safe: atomic job claiming ensures only one worker proceeds with a given job even if multiple consumers see the same message, and idempotency checks mean a redelivered message doesn't reapply its side effects.",
        },
        {
          heading: "Separating job failures from messaging failures",
          body: "A job that fails for a transient reason (a downstream dependency hiccup) is retried later on its own schedule via exponential backoff and a nextAttemptAt timestamp. A message-level failure (Kafka error, malformed payload) is instead routed to a Dead Letter Topic. Keeping these two failure types on separate paths means a job that just needs to wait and retry is never confused with a message that's actually broken.",
        },
        {
          heading: "Redis locking with expiry, guarded by a circuit breaker",
          body: "Cross-instance coordination uses Redis distributed locks with an expiry, so a crashed instance can't hold a lock forever. Because this coordination depends on Redis being available, a Resilience4j Circuit Breaker wraps those calls — if Redis starts failing, the breaker trips and the platform degrades instead of every instance blocking on a dependency that's down.",
        },
      ],
      failureScenarios: [
        {
          heading: "Duplicate Kafka delivery",
          body: "A message is redelivered under at-least-once semantics — for example, after a consumer restarts before committing its offset. Atomic job claiming and idempotency checks mean the job is not reprocessed a second time even though the message arrived twice.",
        },
        {
          heading: "Redis becomes unavailable",
          body: "Repeated failures calling Redis trip the Resilience4j Circuit Breaker, so instances stop hammering a dependency that's down instead of piling up blocked calls. Distributed locks carrying an expiry also ensure a lock is never held indefinitely if the instance that acquired it can't renew or release it.",
        },
        {
          heading: "Job fails vs. message fails",
          body: "A job that fails due to a transient downstream issue is rescheduled through exponential backoff using its nextAttemptAt timestamp. A genuinely broken or malformed message is instead routed to a Dead Letter Topic — the platform treats these as different problems with different remedies rather than retrying everything the same way.",
        },
        {
          heading: "Partial DB/Kafka write",
          body: "Without the Outbox pattern, a service could commit a database state change but fail to publish the corresponding Kafka event, or publish an event for a change that never actually committed. Writing both in the same local transaction removes this failure mode by construction.",
        },
      ],
      performance: [
        "Cache-Aside caching across Caffeine (L1) and Redis (L2) avoids repeated round-trips to the database and to Redis itself for hot lookups.",
        "Atomic Lua-based operations keep Redis-backed rate limiting free of check-then-act race conditions under concurrent access.",
        "Separating retry scheduling (nextAttemptAt backoff) from Dead Letter Topic routing keeps transient job failures from being treated the same as broken messages.",
      ],
      tradeoffs: [
        {
          heading: "At-least-once + idempotency over exactly-once",
          body: "Accepting at-least-once delivery and making consumers idempotent trades some per-handler complexity (every handler must tolerate being run twice) for a simpler, more provably correct guarantee at the messaging layer than building true exactly-once semantics.",
        },
        {
          heading: "Transactional Outbox adds a relay",
          body: "The Outbox pattern removes dual-write inconsistency at the cost of an additional relay component reading unpublished events, and at-least-once delivery semantics that downstream consumers must still handle idempotently.",
        },
        {
          heading: "Cache-Aside over read-through",
          body: "Cache-Aside puts cache-population logic in the application rather than behind a transparent read-through layer — more explicit control over what's cached and when, at the cost of that logic living in application code instead of the cache itself.",
        },
        {
          heading: "Expiry-based locks over fencing tokens",
          body: "A Redis lock with an expiry is simpler to implement and reason about than a fencing-token scheme, at the cost of a narrower edge case: an instance paused long enough for its lock to expire could, in principle, still believe it holds the lock when it resumes.",
        },
      ],
      outcome:
        "A job-processing platform where DB/Kafka consistency, duplicate message delivery, retry scheduling, and cross-instance coordination are each handled by an explicit, separable mechanism — Outbox, atomic claiming with idempotency, backoff-vs-DLT routing, and expiring locks behind a circuit breaker — rather than one catch-all retry loop.",
    },
  },
];

export type Note = {
  slug: string;
  title: string;
  tags: string[];
  readTime: string;
  summary: string;
  content: string[];
};

export const notes: Note[] = [
  {
    slug: "caffeine-l1-caching",
    title: "Caffeine L1 Caching: Cutting Report Latency from 10s to Under 2s",
    tags: ["Caching", "Caffeine", "Performance"],
    readTime: "5 min",
    summary:
      "How tuning an in-process Caffeine cache — not adding more infrastructure — took report response time from 10 seconds to under 2.",
    content: [
      "A financial risk analytics platform generating NPV, NIM, GAP, and sensitivity reports has an obvious first lever for latency: caching. The less obvious part is that the biggest win here came from getting the most out of a single in-process cache layer, rather than reaching for more infrastructure. Caffeine — an in-memory, in-process cache for the JVM — was already positioned to serve the hottest, most-repeated report lookups without leaving the process at all.",
      "The work was in the tuning: choosing cache keys precise enough to avoid false sharing between logically different reports but coarse enough to actually get hits, setting TTLs based on how often the underlying risk data changes rather than a round default, and picking an eviction policy that keeps genuinely hot entries resident instead of getting pushed out by one-off lookups.",
      "That tuning pass reduced API response time from 10 seconds to under 2 seconds for report requests, and brought total report generation time down from 2 minutes to 30 seconds.",
      "The lesson generalizes: a cache layer's ceiling is often set by its configuration, not its architecture. Before reaching for a second tier or a different technology, it's worth asking whether the first layer is actually configured for the access pattern it's serving.",
    ],
  },
  {
    slug: "kafka-async-reporting",
    title: "Moving Long-Running Reports Off the Request Thread with Kafka",
    tags: ["Kafka", "Async Processing", "Microservices"],
    readTime: "5 min",
    summary:
      "Refactoring synchronous, long-running report generation into Kafka-driven asynchronous workflows — and what failure handling looks like once you do.",
    content: [
      "Report generation that runs synchronously inside an HTTP request has a hard ceiling: the client is waiting, the connection can time out, and one slow report blocks the thread pool everyone else's requests depend on. The fix was refactoring long-running report generation into Kafka-driven asynchronous workflows — a request enqueues a job instead of computing inline, decoupling the caller from the processing time.",
      "This enabled concurrent report processing (multiple reports in flight without contending for the same request threads) and directly improved API responsiveness, since the synchronous part of the request became 'accept and enqueue' rather than 'compute and return'.",
      "Moving work onto Kafka consumers introduces its own failure surface, handled with resilient consumer workflows: retry handling for transient failures, and MessengerClient consumers dedicated to sending automated email notifications when a report batch ultimately fails — so a stuck batch is visible to whoever needs to act on it, not silently dropped.",
      "The underlying principle holds regardless of the specific tooling: asynchronous processing doesn't remove failure, it changes where you have to handle it. Retries and explicit failure notifications are what make 'enqueue and forget' safe to rely on operationally.",
    ],
  },
  {
    slug: "activepivot-mdx-olap",
    title: "Querying OLAP Cubes with MDX for 50K+ Record Risk Reports",
    tags: ["ActivePivot", "MDX", "OLAP"],
    readTime: "5 min",
    summary:
      "Financial risk reporting at scale often means querying an OLAP cube directly rather than a relational store — here's how that looks in practice.",
    content: [
      "NPV, NIM, GAP, and sensitivity analysis reports are inherently multi-dimensional — slicing risk exposure by book, currency, tenor, and scenario at once. Modeling that as ad hoc relational queries gets unwieldy fast. The alternative used here is querying ActivePivot in-memory OLAP cubes directly using MDX (Multidimensional Expressions), the query language purpose-built for this kind of dimensional analysis.",
      "Java-side connectivity to the cube goes through olap4j and qfs-olap4j for standardized OLAP access, with RafalQuery APIs used for the actual analytical data retrieval — giving the reporting layer a typed, Java-native way to issue MDX queries and consume cube results without hand-rolling a bridge between the two worlds.",
      "This path supports 50K+ record report workloads across financial risk analysis and reporting — volume that would be far more awkward to express and execute efficiently as flat relational aggregation queries.",
      "The broader takeaway: when the domain itself is naturally multi-dimensional, reaching for a query language and storage model built for that shape (OLAP + MDX) tends to age better than forcing the problem into a relational shape it doesn't quite fit.",
    ],
  },
  {
    slug: "scheduled-jobs-circuit-breakers",
    title: "Scheduled Jobs, Dedicated Thread Pools, and Circuit Breakers",
    tags: ["Resilience4j", "Concurrency", "Reliability"],
    readTime: "4 min",
    summary:
      "Report, export, and cache-refresh workflows each got their own thread pool — and their own failure boundary.",
    content: [
      "Report generation, data export, and cache-refresh are three different workloads with different latency and failure profiles, but sharing a single thread pool between them means a slow export can starve report generation, or a stuck cache refresh can quietly stop the cache from ever refreshing. The fix was giving each of these workflows its own dedicated thread pool, run on a schedule rather than purely in response to requests.",
      "Isolating thread pools this way means backpressure or slowness in one workflow doesn't propagate into the others just because they happen to share a runtime resource.",
      "On top of that, a Resilience4j Circuit Breaker wraps failure-prone calls within these workflows, so a dependency that starts failing repeatedly gets short-circuited instead of continuing to consume threads and retry into a service that's already struggling.",
      "Put together, these are two different resilience techniques solving two different problems: dedicated thread pools stop workloads from starving each other, and circuit breakers stop a struggling dependency from being hit harder by the very system trying to use it.",
    ],
  },
  {
    slug: "transactional-outbox",
    title: "The Transactional Outbox Pattern: Keeping a Database and Kafka Consistent",
    tags: ["Transactional Outbox", "Kafka", "Microservices"],
    readTime: "5 min",
    summary:
      "Writing to a database and publishing to Kafka as two separate steps invites a silent class of bugs. The Outbox pattern removes it.",
    content: [
      "A service that writes a state change to its database and then separately publishes a Kafka event describing that change has a structural problem: those are two operations, not one, and there's no guarantee both succeed or both fail together. The database write can commit while the Kafka publish fails, or the reverse — either way, downstream consumers now have a different picture of reality than the source of truth.",
      "The Transactional Outbox pattern fixes this by writing the state change and the outbound event to the same local database transaction. A relay process then reads unpublished events from that table and delivers them to Kafka. Because the transaction is atomic, there is no window where one half of the write happens without the other.",
      "This shifts the guarantee for event delivery to at-least-once — the relay might publish an event more than once if it crashes between publishing and marking it as sent — which means downstream consumers need to be idempotent regardless. That's a trade worth making: at-least-once delivery with idempotent consumers is a well-understood, provably safe pattern, while inconsistent dual writes are a source of bugs that are hard to even detect, let alone fix, in production.",
      "In the job-processing platform this pattern backs, it's what makes job-state changes and their corresponding Kafka events trustworthy as a pair — either both happened, or neither did.",
    ],
  },
  {
    slug: "cache-aside-and-atomic-rate-limiting",
    title: "Cache-Aside with Caffeine + Redis, and Atomic Rate Limiting with Lua",
    tags: ["Caching", "Redis", "Lua"],
    readTime: "5 min",
    summary:
      "Two Redis-backed patterns from the same project: a two-level Cache-Aside layer, and rate limiting that can't race itself.",
    content: [
      "The job-processing platform layers Caffeine as an in-process L1 cache in front of Redis as a shared L2, using the Cache-Aside pattern: on a lookup, the application checks the cache first, and on a miss reads from the source of truth and populates the cache itself. This keeps the cache's contents explicit and predictable — nothing is cached that the application didn't decide to cache.",
      "The same Redis instance also backs distributed rate limiting, implemented with atomic Lua operations. Rate limiting naturally involves a read (current count), a comparison (against the limit), and a write (increment) — done as three separate round-trips, concurrent requests can race between them and let more traffic through than the limit allows. Running that sequence as a single Lua script inside Redis makes it atomic: no other request can interleave partway through.",
      "Both patterns share a theme: correctness under concurrency usually isn't about the individual read or write being wrong, it's about what can happen in the gap between operations that look atomic but aren't. Cache-Aside makes the gap explicit and application-controlled; Lua scripting closes the gap in the rate limiter entirely.",
    ],
  },
  {
    slug: "idempotent-job-claiming",
    title: "Atomic Job Claiming: Making At-Least-Once Kafka Delivery Safe",
    tags: ["Kafka", "Idempotency", "Distributed Systems"],
    readTime: "5 min",
    summary:
      "Kafka guarantees at-least-once delivery, not exactly-once. Atomic job claiming and idempotency checks are what make that safe to build on.",
    content: [
      "At-least-once delivery means a Kafka message can be redelivered — after a consumer restarts before committing its offset, after a rebalance, or on retry. For a job-processing platform, an unhandled redelivery means a job could be processed twice. The response here is explicit acknowledgements and offset management paired with atomic job claiming: when a worker picks up a job, that claim itself is an atomic operation, so two workers racing to process the same redelivered message can't both believe they own it.",
      "Idempotency checks sit alongside job claiming as a second line of defense — even if a message is processed again, the handler is written so that reprocessing doesn't reapply side effects a second time.",
      "This was deliberately paired with exponential backoff and nextAttemptAt-based retry scheduling for job-level failures, and separate Dead Letter Topic (DLT) routing for Kafka-level or message-level failures — so a job that just needs to wait and retry later is never conflated with a message that's actually broken and needs to be pulled out of the normal flow.",
      "The broader point: at-least-once isn't a weaker guarantee to be worked around, it's the honest guarantee a distributed system can make. Atomic claiming and idempotency are what turn it into something safe to build a job-processing platform on top of.",
    ],
  },
  {
    slug: "redis-locking-and-circuit-breakers",
    title: "Redis Distributed Locking with Expiry, Behind a Circuit Breaker",
    tags: ["Redis", "Resilience4j", "Distributed Locking"],
    readTime: "4 min",
    summary:
      "Coordinating work across application instances with Redis locks — and making sure a Redis outage doesn't take every instance down with it.",
    content: [
      "When multiple instances of the same application need to coordinate — making sure only one of them performs a given piece of work at a time — a distributed lock backed by Redis is a common, lightweight solution. Giving each lock an expiry is what keeps this safe: if the instance holding the lock crashes or is killed, the lock doesn't stay held forever; it expires and becomes available again.",
      "But that coordination now has a dependency: if Redis itself becomes slow or unavailable, every instance trying to acquire or check a lock is exposed to that failure. Wrapping those Redis calls in a Resilience4j Circuit Breaker addresses this directly — after enough failures, the breaker trips and short-circuits further calls, so instances stop piling up blocked requests against a dependency that's already struggling.",
      "The two mechanisms solve different halves of the same reliability problem: lock expiry protects against a single instance failing while holding a lock; the circuit breaker protects the rest of the system from a shared dependency failing underneath all of them at once.",
    ],
  },
];

export const skills = {
  "Languages & Core CS": [
    "Java",
    "Data Structures & Algorithms (DSA)",
    "OOP",
    "Operating Systems",
    "DBMS",
  ],
  "Backend & Distributed Systems": [
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
    "Microservices",
    "Apache Kafka",
    "Redis",
    "Caffeine",
    "Concurrency",
    "Multithreading",
    "Resilience4j",
    "System Design",
  ],
  "Databases, Analytics & Cloud": [
    "PostgreSQL",
    "MySQL",
    "ActivePivot",
    "MDX",
    "AWS Lambda",
    "AWS S3",
    "AWS EC2",
    "AWS CloudWatch",
  ],
  "DevOps & Tools": ["Git", "GitHub Actions", "CI/CD Pipelines", "Docker"],
};

export const education = {
  school: "Birla Institute of Technology, Mesra (BIT Mesra)",
  location: "Ranchi, India",
  degree: "B.Tech in Information Technology",
  gpa: "8.60/10",
  period: "2019 – 2023",
};

export const achievements = [
  "Solved 650+ Data Structures & Algorithms problems, demonstrating strong problem-solving and algorithmic skills.",
  "Secured National Rank 844 in CODEKAZE 2021 among 200,000+ participants.",
];
